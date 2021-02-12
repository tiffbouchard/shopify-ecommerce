#!/usr/bin/env node
"use strict";exports.__esModule=true;exports.nextDev=void 0;var _path=require("path");var _index=_interopRequireDefault(require("next/dist/compiled/arg/index.js"));var _fs=require("fs");var _startServer=_interopRequireDefault(require("../server/lib/start-server"));var _utils=require("../server/lib/utils");var Log=_interopRequireWildcard(require("../build/output/log"));var _output=require("../build/output");function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _getRequireWildcardCache(){if(typeof WeakMap!=="function")return null;var cache=new WeakMap();_getRequireWildcardCache=function(){return cache;};return cache;}function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}if(obj===null||typeof obj!=="object"&&typeof obj!=="function"){return{default:obj};}var cache=_getRequireWildcardCache();if(cache&&cache.has(obj)){return cache.get(obj);}var newObj={};var hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;if(desc&&(desc.get||desc.set)){Object.defineProperty(newObj,key,desc);}else{newObj[key]=obj[key];}}}newObj.default=obj;if(cache){cache.set(obj,newObj);}return newObj;}const nextDev=argv=>{const validArgs={// Types
'--help':Boolean,'--port':Number,'--hostname':String,// Aliases
'-h':'--help','-p':'--port','-H':'--hostname'};let args;try{args=(0,_index.default)(validArgs,{argv});}catch(error){if(error.code==='ARG_UNKNOWN_OPTION'){return(0,_utils.printAndExit)(error.message,1);}throw error;}if(args['--help']){// tslint:disable-next-line
console.log(`
      Description
        Starts the application in development mode (hot-code reloading, error
        reporting, etc)

      Usage
        $ next dev <dir> -p <port number>

      <dir> represents the directory of the Next.js application.
      If no directory is provided, the current directory will be used.

      Options
        --port, -p      A port number on which to start the application
        --hostname, -H  Hostname on which to start the application
        --help, -h      Displays this message
    `);process.exit(0);}const dir=(0,_path.resolve)(args._[0]||'.');// Check if pages dir exists and warn if not
if(!(0,_fs.existsSync)(dir)){(0,_utils.printAndExit)(`> No such directory exists as the project root: ${dir}`);}async function preflight(){const{getPackageVersion}=await Promise.resolve().then(()=>_interopRequireWildcard(require('../lib/get-package-version')));const semver=await Promise.resolve().then(()=>_interopRequireWildcard(require('next/dist/compiled/semver'))).then(res=>res.default);const reactVersion=await getPackageVersion({cwd:dir,name:'react'});if(reactVersion&&semver.lt(reactVersion,'16.10.0')){Log.warn('Fast Refresh is disabled in your application due to an outdated `react` version. Please upgrade 16.10 or newer!'+' Read more: https://err.sh/next.js/react-version');}else{const reactDomVersion=await getPackageVersion({cwd:dir,name:'react-dom'});if(reactDomVersion&&semver.lt(reactDomVersion,'16.10.0')){Log.warn('Fast Refresh is disabled in your application due to an outdated `react-dom` version. Please upgrade 16.10 or newer!'+' Read more: https://err.sh/next.js/react-version');}}}const port=args['--port']||3000;const appUrl=`http://${args['--hostname']||'localhost'}:${port}`;(0,_startServer.default)({dir,dev:true,isNextDevCommand:true},port,args['--hostname']).then(async app=>{(0,_output.startedDevelopmentServer)(appUrl);// Start preflight after server is listening and ignore errors:
preflight().catch(()=>{});// Finalize server bootup:
await app.prepare();}).catch(err=>{if(err.code==='EADDRINUSE'){let errorMessage=`Port ${port} is already in use.`;const pkgAppPath=require('next/dist/compiled/find-up').sync('package.json',{cwd:dir});const appPackage=require(pkgAppPath);if(appPackage.scripts){const nextScript=Object.entries(appPackage.scripts).find(scriptLine=>scriptLine[1]==='next');if(nextScript){errorMessage+=`\nUse \`npm run ${nextScript[0]} -- -p <some other port>\`.`;}}// tslint:disable-next-line
console.error(errorMessage);}else{// tslint:disable-next-line
console.error(err);}process.nextTick(()=>process.exit(1));});};exports.nextDev=nextDev;
//# sourceMappingURL=next-dev.js.map