/// <reference types="node" />
import '../next-server/server/node-polyfill-fetch';
declare type RuntimeConfig = any;
export declare function loadStaticPaths(distDir: string, pathname: string, serverless: boolean, config: RuntimeConfig): Promise<Pick<{
    paths: (string | {
        params: import("querystring").ParsedUrlQuery;
    })[];
    fallback: boolean | "unstable_blocking";
}, "fallback"> & {
    paths: string[];
}>;
export {};
