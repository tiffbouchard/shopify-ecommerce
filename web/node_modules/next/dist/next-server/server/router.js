"use strict";exports.__esModule=true;exports.default=exports.prepareDestination=exports.route=void 0;var _url=require("url");var _pathToRegexp=require("next/dist/compiled/path-to-regexp");var _pathMatch=_interopRequireDefault(require("./lib/path-match"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}const route=(0,_pathMatch.default)();exports.route=route;const customRouteTypes=new Set(['rewrite','redirect','header']);const prepareDestination=(destination,params,query,appendParamsToQuery,basePath)=>{const parsedDestination=(0,_url.parse)(destination,true);const destQuery=parsedDestination.query;let destinationCompiler=(0,_pathToRegexp.compile)(`${parsedDestination.pathname}${parsedDestination.hash||''}`,// we don't validate while compiling the destination since we should
// have already validated before we got to this point and validating
// breaks compiling destinations with named pattern params from the source
// e.g. /something:hello(.*) -> /another/:hello is broken with validation
// since compile validation is meant for reversing and not for inserting
// params from a separate path-regex into another
{validate:false});let newUrl;// update any params in query values
for(const[key,strOrArray]of Object.entries(destQuery)){let value=Array.isArray(strOrArray)?strOrArray[0]:strOrArray;if(value){// the value needs to start with a forward-slash to be compiled
// correctly
value=`/${value}`;const queryCompiler=(0,_pathToRegexp.compile)(value,{validate:false});value=queryCompiler(params).substr(1);}destQuery[key]=value;}// add path params to query if it's not a redirect and not
// already defined in destination query
if(appendParamsToQuery){for(const[name,value]of Object.entries(params)){if(!(name in destQuery)){destQuery[name]=value;}}}const shouldAddBasePath=destination.startsWith('/')&&basePath;try{newUrl=`${shouldAddBasePath?basePath:''}${encodeURI(destinationCompiler(params))}`;const[pathname,hash]=newUrl.split('#');parsedDestination.pathname=pathname;parsedDestination.hash=`${hash?'#':''}${hash||''}`;parsedDestination.path=`${pathname}${parsedDestination.search}`;delete parsedDestination.search;}catch(err){if(err.message.match(/Expected .*? to not repeat, but got an array/)){throw new Error(`To use a multi-match in the destination you must add \`*\` at the end of the param name to signify it should repeat. https://err.sh/vercel/next.js/invalid-multi-match`);}throw err;}// Query merge order lowest priority to highest
// 1. initial URL query values
// 2. path segment values
// 3. destination specified query values
parsedDestination.query={...query,...parsedDestination.query};return{newUrl,parsedDestination};};exports.prepareDestination=prepareDestination;function replaceBasePath(basePath,pathname){return pathname.replace(basePath,'')||'/';}class Router{constructor({basePath='',headers=[],fsRoutes=[],rewrites=[],redirects=[],catchAllRoute,dynamicRoutes=[],pageChecker,useFileSystemPublicRoutes}){this.basePath=void 0;this.headers=void 0;this.fsRoutes=void 0;this.rewrites=void 0;this.redirects=void 0;this.catchAllRoute=void 0;this.pageChecker=void 0;this.dynamicRoutes=void 0;this.useFileSystemPublicRoutes=void 0;this.basePath=basePath;this.headers=headers;this.fsRoutes=fsRoutes;this.rewrites=rewrites;this.redirects=redirects;this.pageChecker=pageChecker;this.catchAllRoute=catchAllRoute;this.dynamicRoutes=dynamicRoutes;this.useFileSystemPublicRoutes=useFileSystemPublicRoutes;}setDynamicRoutes(routes=[]){this.dynamicRoutes=routes;}addFsRoute(fsRoute){this.fsRoutes.unshift(fsRoute);}async execute(req,res,parsedUrl){// memoize page check calls so we don't duplicate checks for pages
const pageChecks={};const memoizedPageChecker=async p=>{if(pageChecks[p]){return pageChecks[p];}const result=this.pageChecker(p);pageChecks[p]=result;return result;};let parsedUrlUpdated=parsedUrl;/*
      Desired routes order
      - headers
      - redirects
      - Check filesystem (including pages), if nothing found continue
      - User rewrites (checking filesystem and pages each match)
    */const allRoutes=[...this.headers,...this.redirects,...this.fsRoutes,// We only check the catch-all route if public page routes hasn't been
// disabled
...(this.useFileSystemPublicRoutes?[{type:'route',name:'page checker',requireBasePath:false,match:route('/:path*'),fn:async(checkerReq,checkerRes,params,parsedCheckerUrl)=>{const{pathname}=parsedCheckerUrl;if(!pathname){return{finished:false};}if(await memoizedPageChecker(pathname)){return this.catchAllRoute.fn(checkerReq,checkerRes,params,parsedCheckerUrl);}return{finished:false};}}]:[]),...this.rewrites,// We only check the catch-all route if public page routes hasn't been
// disabled
...(this.useFileSystemPublicRoutes?[this.catchAllRoute]:[])];const originallyHadBasePath=!this.basePath||req._nextHadBasePath;for(const testRoute of allRoutes){// if basePath is being used, the basePath will still be included
// in the pathname here to allow custom-routes to require containing
// it or not, filesystem routes and pages must always include the basePath
// if it is set
let currentPathname=parsedUrlUpdated.pathname;const originalPathname=currentPathname;const requireBasePath=testRoute.requireBasePath!==false;const isCustomRoute=customRouteTypes.has(testRoute.type);if(!isCustomRoute){// If replace ends up replacing the full url it'll be `undefined`, meaning we have to default it to `/`
currentPathname=replaceBasePath(this.basePath,currentPathname);}const newParams=testRoute.match(currentPathname);// Check if the match function matched
if(newParams){// since we require basePath be present for non-custom-routes we
// 404 here when we matched an fs route
if(!isCustomRoute){if(!originallyHadBasePath&&!req._nextDidRewrite){if(requireBasePath){// consider this a non-match so the 404 renders
return false;}// page checker occurs before rewrites so we need to continue
// to check those since they don't always require basePath
continue;}parsedUrlUpdated.pathname=currentPathname;}const result=await testRoute.fn(req,res,newParams,parsedUrlUpdated);// The response was handled
if(result.finished){return true;}// since the fs route didn't match we need to re-add the basePath
// to continue checking rewrites with the basePath present
if(!isCustomRoute){parsedUrlUpdated.pathname=originalPathname;}if(result.pathname){parsedUrlUpdated.pathname=result.pathname;}if(result.query){parsedUrlUpdated.query={...parsedUrlUpdated.query,...result.query};}// check filesystem
if(testRoute.check===true){const originalFsPathname=parsedUrlUpdated.pathname;const fsPathname=replaceBasePath(this.basePath,originalFsPathname);for(const fsRoute of this.fsRoutes){const fsParams=fsRoute.match(fsPathname);if(fsParams){parsedUrlUpdated.pathname=fsPathname;const fsResult=await fsRoute.fn(req,res,fsParams,parsedUrlUpdated);if(fsResult.finished){return true;}parsedUrlUpdated.pathname=originalFsPathname;}}let matchedPage=await memoizedPageChecker(fsPathname);// If we didn't match a page check dynamic routes
if(!matchedPage){for(const dynamicRoute of this.dynamicRoutes){if(dynamicRoute.match(fsPathname)){matchedPage=true;}}}// Matched a page or dynamic route so render it using catchAllRoute
if(matchedPage){parsedUrlUpdated.pathname=fsPathname;const pageParams=this.catchAllRoute.match(parsedUrlUpdated.pathname);await this.catchAllRoute.fn(req,res,pageParams,parsedUrlUpdated);return true;}}}}return false;}}exports.default=Router;
//# sourceMappingURL=router.js.map