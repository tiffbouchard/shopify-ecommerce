"use strict";exports.__esModule=true;exports.hasBasePath=hasBasePath;exports.addBasePath=addBasePath;exports.delBasePath=delBasePath;exports.isLocalURL=isLocalURL;exports.resolveHref=resolveHref;exports.markLoadingError=markLoadingError;exports.default=void 0;var _mitt=_interopRequireDefault(require("../mitt"));var _utils=require("../utils");var _isDynamic=require("./utils/is-dynamic");var _routeMatcher=require("./utils/route-matcher");var _routeRegex=require("./utils/route-regex");var _querystring=require("./utils/querystring");var _parseRelativeUrl=require("./utils/parse-relative-url");var _normalizeTrailingSlash=require("../../../client/normalize-trailing-slash");function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}/* global __NEXT_DATA__ */ // tslint:disable:no-console
const basePath=process.env.__NEXT_ROUTER_BASEPATH||'';function buildCancellationError(){return Object.assign(new Error('Route Cancelled'),{cancelled:true});}function hasBasePath(path){return path===basePath||path.startsWith(basePath+'/');}function addBasePath(path){// we only add the basepath on relative urls
return basePath&&path.startsWith('/')?path==='/'?(0,_normalizeTrailingSlash.normalizePathTrailingSlash)(basePath):basePath+path:path;}function delBasePath(path){return path.slice(basePath.length)||'/';}/**
 * Detects whether a given url is routable by the Next.js router (browser only).
 */function isLocalURL(url){if(url.startsWith('/'))return true;try{// absolute urls can be local if they are on the same origin
const locationOrigin=(0,_utils.getLocationOrigin)();const resolved=new URL(url,locationOrigin);return resolved.origin===locationOrigin&&hasBasePath(resolved.pathname);}catch(_){return false;}}/**
 * Resolves a given hyperlink with a certain router state (basePath not included).
 * Preserves absolute urls.
 */function resolveHref(currentPath,href){// we use a dummy base url for relative urls
const base=new URL(currentPath,'http://n');const urlAsString=typeof href==='string'?href:(0,_utils.formatWithValidation)(href);try{const finalUrl=new URL(urlAsString,base);finalUrl.pathname=(0,_normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);// if the origin didn't change, it means we received a relative href
return finalUrl.origin===base.origin?finalUrl.href.slice(finalUrl.origin.length):finalUrl.href;}catch(_){return urlAsString;}}const PAGE_LOAD_ERROR=Symbol('PAGE_LOAD_ERROR');function markLoadingError(err){return Object.defineProperty(err,PAGE_LOAD_ERROR,{});}function prepareUrlAs(router,url,as){// If url and as provided as an object representation,
// we'll format them into the string version here.
return{url:addBasePath(resolveHref(router.pathname,url)),as:as?addBasePath(resolveHref(router.pathname,as)):as};}function tryParseRelativeUrl(url){try{return(0,_parseRelativeUrl.parseRelativeUrl)(url);}catch(err){if(process.env.NODE_ENV!=='production'){setTimeout(()=>{throw new Error(`Invalid href passed to router: ${url} https://err.sh/vercel/next.js/invalid-href-passed`);},0);}return null;}}const manualScrollRestoration=process.env.__NEXT_SCROLL_RESTORATION&&typeof window!=='undefined'&&'scrollRestoration'in window.history;function fetchRetry(url,attempts){return fetch(url,{// Cookies are required to be present for Next.js' SSG "Preview Mode".
// Cookies may also be required for `getServerSideProps`.
//
// > `fetch` won’t send cookies, unless you set the credentials init
// > option.
// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
//
// > For maximum browser compatibility when it comes to sending &
// > receiving cookies, always supply the `credentials: 'same-origin'`
// > option instead of relying on the default.
// https://github.com/github/fetch#caveats
credentials:'same-origin'}).then(res=>{if(!res.ok){if(attempts>1&&res.status>=500){return fetchRetry(url,attempts-1);}throw new Error(`Failed to load static props`);}return res.json();});}function fetchNextData(dataHref,isServerRender){return fetchRetry(dataHref,isServerRender?3:1).catch(err=>{// We should only trigger a server-side transition if this was caused
// on a client-side transition. Otherwise, we'd get into an infinite
// loop.
if(!isServerRender){markLoadingError(err);}throw err;});}class Router{/**
   * Map of all components loaded in `Router`
   */ // Static Data Cache
constructor(_pathname,_query,_as,{initialProps,pageLoader,App,wrapApp,Component,err,subscription,isFallback}){this.route=void 0;this.pathname=void 0;this.query=void 0;this.asPath=void 0;this.basePath=void 0;this.components=void 0;this.sdc={};this.sub=void 0;this.clc=void 0;this.pageLoader=void 0;this._bps=void 0;this.events=void 0;this._wrapApp=void 0;this.isSsr=void 0;this.isFallback=void 0;this._inFlightRoute=void 0;this.onPopState=e=>{const state=e.state;if(!state){// We get state as undefined for two reasons.
//  1. With older safari (< 8) and older chrome (< 34)
//  2. When the URL changed with #
//
// In the both cases, we don't need to proceed and change the route.
// (as it's already changed)
// But we can simply replace the state with the new changes.
// Actually, for (1) we don't need to nothing. But it's hard to detect that event.
// So, doing the following for (1) does no harm.
const{pathname,query}=this;this.changeState('replaceState',(0,_utils.formatWithValidation)({pathname:addBasePath(pathname),query}),(0,_utils.getURL)());return;}if(!state.__N){return;}const{url,as,options}=state;const{pathname}=(0,_parseRelativeUrl.parseRelativeUrl)(url);// Make sure we don't re-render on initial load,
// can be caused by navigating back from an external site
if(this.isSsr&&as===this.asPath&&pathname===this.pathname){return;}// If the downstream application returns falsy, return.
// They will then be responsible for handling the event.
if(this._bps&&!this._bps(state)){return;}this.change('replaceState',url,as,options);};// represents the current component key
this.route=(0,_normalizeTrailingSlash.removePathTrailingSlash)(_pathname);// set up the component cache (by route keys)
this.components={};// We should not keep the cache, if there's an error
// Otherwise, this cause issues when when going back and
// come again to the errored page.
if(_pathname!=='/_error'){this.components[this.route]={Component,props:initialProps,err,__N_SSG:initialProps&&initialProps.__N_SSG,__N_SSP:initialProps&&initialProps.__N_SSP};}this.components['/_app']={Component:App};// Backwards compat for Router.router.events
// TODO: Should be remove the following major version as it was never documented
this.events=Router.events;this.pageLoader=pageLoader;this.pathname=_pathname;this.query=_query;// if auto prerendered and dynamic route wait to update asPath
// until after mount to prevent hydration mismatch
this.asPath=// @ts-ignore this is temporarily global (attached to window)
(0,_isDynamic.isDynamicRoute)(_pathname)&&__NEXT_DATA__.autoExport?_pathname:_as;this.basePath=basePath;this.sub=subscription;this.clc=null;this._wrapApp=wrapApp;// make sure to ignore extra popState in safari on navigating
// back from external site
this.isSsr=true;this.isFallback=isFallback;if(typeof window!=='undefined'){// make sure "as" doesn't start with double slashes or else it can
// throw an error as it's considered invalid
if(_as.substr(0,2)!=='//'){// in order for `e.state` to work on the `onpopstate` event
// we have to register the initial route upon initialization
this.changeState('replaceState',(0,_utils.formatWithValidation)({pathname:addBasePath(_pathname),query:_query}),(0,_utils.getURL)());}window.addEventListener('popstate',this.onPopState);// enable custom scroll restoration handling when available
// otherwise fallback to browser's default handling
if(process.env.__NEXT_SCROLL_RESTORATION){if(manualScrollRestoration){window.history.scrollRestoration='manual';let scrollDebounceTimeout;const debouncedScrollSave=()=>{if(scrollDebounceTimeout)clearTimeout(scrollDebounceTimeout);scrollDebounceTimeout=setTimeout(()=>{const{url,as:curAs,options}=history.state;this.changeState('replaceState',url,curAs,Object.assign({},options,{_N_X:window.scrollX,_N_Y:window.scrollY}));},10);};window.addEventListener('scroll',debouncedScrollSave);}}}}update(route,mod){const Component=mod.default||mod;const data=this.components[route];if(!data){throw new Error(`Cannot update unavailable route: ${route}`);}const newData=Object.assign({},data,{Component,__N_SSG:mod.__N_SSG,__N_SSP:mod.__N_SSP});this.components[route]=newData;// pages/_app.js updated
if(route==='/_app'){this.notify(this.components[this.route]);return;}if(route===this.route){this.notify(newData);}}reload(){window.location.reload();}/**
   * Go back in history
   */back(){window.history.back();}/**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */push(url,as=url,options={}){;({url,as}=prepareUrlAs(this,url,as));return this.change('pushState',url,as,options);}/**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */replace(url,as=url,options={}){;({url,as}=prepareUrlAs(this,url,as));return this.change('replaceState',url,as,options);}async change(method,url,as,options){if(!isLocalURL(url)){window.location.href=url;return false;}if(!options._h){this.isSsr=false;}// marking route changes as a navigation start entry
if(_utils.ST){performance.mark('routeChange');}if(this._inFlightRoute){this.abortComponentLoad(this._inFlightRoute);}const cleanedAs=hasBasePath(as)?delBasePath(as):as;this._inFlightRoute=as;// If the url change is only related to a hash change
// We should not proceed. We should only change the state.
// WARNING: `_h` is an internal option for handing Next.js client-side
// hydration. Your app should _never_ use this property. It may change at
// any time without notice.
if(!options._h&&this.onlyAHashChange(cleanedAs)){this.asPath=cleanedAs;Router.events.emit('hashChangeStart',as);this.changeState(method,url,as,options);this.scrollToHash(cleanedAs);this.notify(this.components[this.route]);Router.events.emit('hashChangeComplete',as);return true;}const parsed=tryParseRelativeUrl(url);if(!parsed)return false;let{pathname,searchParams}=parsed;const query=(0,_querystring.searchParamsToUrlQuery)(searchParams);// url and as should always be prefixed with basePath by this
// point by either next/link or router.push/replace so strip the
// basePath from the pathname to match the pages dir 1-to-1
pathname=pathname?(0,_normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)):pathname;// If asked to change the current URL we should reload the current page
// (not location.reload() but reload getInitialProps and other Next.js stuffs)
// We also need to set the method = replaceState always
// as this should not go into the history (That's how browsers work)
// We should compare the new asPath to the current asPath, not the url
if(!this.urlIsNew(cleanedAs)){method='replaceState';}const route=(0,_normalizeTrailingSlash.removePathTrailingSlash)(pathname);const{shallow=false}=options;if((0,_isDynamic.isDynamicRoute)(route)){const{pathname:asPathname}=(0,_parseRelativeUrl.parseRelativeUrl)(cleanedAs);const routeRegex=(0,_routeRegex.getRouteRegex)(route);const routeMatch=(0,_routeMatcher.getRouteMatcher)(routeRegex)(asPathname);if(!routeMatch){const missingParams=Object.keys(routeRegex.groups).filter(param=>!query[param]);if(missingParams.length>0){if(process.env.NODE_ENV!=='production'){console.warn(`Mismatching \`as\` and \`href\` failed to manually provide `+`the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);}throw new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `+`Read more: https://err.sh/vercel/next.js/incompatible-href-as`);}}else{// Merge params into `query`, overwriting any specified in search
Object.assign(query,routeMatch);}}Router.events.emit('routeChangeStart',as);try{const routeInfo=await this.getRouteInfo(route,pathname,query,as,shallow);const{error}=routeInfo;Router.events.emit('beforeHistoryChange',as);this.changeState(method,url,as,options);if(process.env.NODE_ENV!=='production'){const appComp=this.components['/_app'].Component;window.next.isPrerendered=appComp.getInitialProps===appComp.origGetInitialProps&&!routeInfo.Component.getInitialProps;}await this.set(route,pathname,query,cleanedAs,routeInfo);if(error){Router.events.emit('routeChangeError',error,cleanedAs);throw error;}if(process.env.__NEXT_SCROLL_RESTORATION){if(manualScrollRestoration&&'_N_X'in options){window.scrollTo(options._N_X,options._N_Y);}}Router.events.emit('routeChangeComplete',as);return true;}catch(err){if(err.cancelled){return false;}throw err;}}changeState(method,url,as,options={}){if(process.env.NODE_ENV!=='production'){if(typeof window.history==='undefined'){console.error(`Warning: window.history is not available.`);return;}if(typeof window.history[method]==='undefined'){console.error(`Warning: window.history.${method} is not available`);return;}}if(method!=='pushState'||(0,_utils.getURL)()!==as){window.history[method]({url,as,options,__N:true},// Most browsers currently ignores this parameter, although they may use it in the future.
// Passing the empty string here should be safe against future changes to the method.
// https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
'',as);}}async handleRouteInfoError(err,pathname,query,as,loadErrorFail){if(err.cancelled){// bubble up cancellation errors
throw err;}if(PAGE_LOAD_ERROR in err||loadErrorFail){Router.events.emit('routeChangeError',err,as);// If we can't load the page it could be one of following reasons
//  1. Page doesn't exists
//  2. Page does exist in a different zone
//  3. Internal error while loading the page
// So, doing a hard reload is the proper way to deal with this.
window.location.href=as;// Changing the URL doesn't block executing the current code path.
// So let's throw a cancellation error stop the routing logic.
throw buildCancellationError();}try{const{page:Component}=await this.fetchComponent('/_error');const routeInfo={Component,err,error:err};try{routeInfo.props=await this.getInitialProps(Component,{err,pathname,query});}catch(gipErr){console.error('Error in error page `getInitialProps`: ',gipErr);routeInfo.props={};}return routeInfo;}catch(routeInfoErr){return this.handleRouteInfoError(routeInfoErr,pathname,query,as,true);}}async getRouteInfo(route,pathname,query,as,shallow=false){try{const cachedRouteInfo=this.components[route];if(shallow&&cachedRouteInfo&&this.route===route){return cachedRouteInfo;}const routeInfo=cachedRouteInfo?cachedRouteInfo:await this.fetchComponent(route).then(res=>({Component:res.page,__N_SSG:res.mod.__N_SSG,__N_SSP:res.mod.__N_SSP}));const{Component,__N_SSG,__N_SSP}=routeInfo;if(process.env.NODE_ENV!=='production'){const{isValidElementType}=require('react-is');if(!isValidElementType(Component)){throw new Error(`The default export is not a React Component in page: "${pathname}"`);}}let dataHref;if(__N_SSG||__N_SSP){dataHref=this.pageLoader.getDataHref((0,_utils.formatWithValidation)({pathname,query}),as,__N_SSG);}const props=await this._getData(()=>__N_SSG?this._getStaticData(dataHref):__N_SSP?this._getServerData(dataHref):this.getInitialProps(Component,// we provide AppTree later so this needs to be `any`
{pathname,query,asPath:as}));routeInfo.props=props;this.components[route]=routeInfo;return routeInfo;}catch(err){return this.handleRouteInfoError(err,pathname,query,as);}}set(route,pathname,query,as,data){this.isFallback=false;this.route=route;this.pathname=pathname;this.query=query;this.asPath=as;return this.notify(data);}/**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */beforePopState(cb){this._bps=cb;}onlyAHashChange(as){if(!this.asPath)return false;const[oldUrlNoHash,oldHash]=this.asPath.split('#');const[newUrlNoHash,newHash]=as.split('#');// Makes sure we scroll to the provided hash if the url/hash are the same
if(newHash&&oldUrlNoHash===newUrlNoHash&&oldHash===newHash){return true;}// If the urls are change, there's more than a hash change
if(oldUrlNoHash!==newUrlNoHash){return false;}// If the hash has changed, then it's a hash only change.
// This check is necessary to handle both the enter and
// leave hash === '' cases. The identity case falls through
// and is treated as a next reload.
return oldHash!==newHash;}scrollToHash(as){const[,hash]=as.split('#');// Scroll to top if the hash is just `#` with no value
if(hash===''){window.scrollTo(0,0);return;}// First we check if the element by id is found
const idEl=document.getElementById(hash);if(idEl){idEl.scrollIntoView();return;}// If there's no element with the id, we check the `name` property
// To mirror browsers
const nameEl=document.getElementsByName(hash)[0];if(nameEl){nameEl.scrollIntoView();}}urlIsNew(asPath){return this.asPath!==asPath;}/**
   * Prefetch page code, you may wait for the data during page rendering.
   * This feature only works in production!
   * @param url the href of prefetched page
   * @param asPath the as path of the prefetched page
   */async prefetch(url,asPath=url,options={}){const parsed=tryParseRelativeUrl(url);if(!parsed)return;const{pathname}=parsed;// Prefetch is not supported in development mode because it would trigger on-demand-entries
if(process.env.NODE_ENV!=='production'){return;}const route=(0,_normalizeTrailingSlash.removePathTrailingSlash)(pathname);await Promise.all([this.pageLoader.prefetchData(url,asPath),this.pageLoader[options.priority?'loadPage':'prefetch'](route)]);}async fetchComponent(route){let cancelled=false;const cancel=this.clc=()=>{cancelled=true;};const componentResult=await this.pageLoader.loadPage(route);if(cancelled){const error=new Error(`Abort fetching component for route: "${route}"`);error.cancelled=true;throw error;}if(cancel===this.clc){this.clc=null;}return componentResult;}_getData(fn){let cancelled=false;const cancel=()=>{cancelled=true;};this.clc=cancel;return fn().then(data=>{if(cancel===this.clc){this.clc=null;}if(cancelled){const err=new Error('Loading initial props cancelled');err.cancelled=true;throw err;}return data;});}_getStaticData(dataHref){const{href:cacheKey}=new URL(dataHref,window.location.href);if(process.env.NODE_ENV==='production'&&this.sdc[cacheKey]){return Promise.resolve(this.sdc[cacheKey]);}return fetchNextData(dataHref,this.isSsr).then(data=>{this.sdc[cacheKey]=data;return data;});}_getServerData(dataHref){return fetchNextData(dataHref,this.isSsr);}getInitialProps(Component,ctx){const{Component:App}=this.components['/_app'];const AppTree=this._wrapApp(App);ctx.AppTree=AppTree;return(0,_utils.loadGetInitialProps)(App,{AppTree,Component,router:this,ctx});}abortComponentLoad(as){if(this.clc){Router.events.emit('routeChangeError',buildCancellationError(),as);this.clc();this.clc=null;}}notify(data){return this.sub(data,this.components['/_app'].Component);}}exports.default=Router;Router.events=(0,_mitt.default)();
//# sourceMappingURL=router.js.map