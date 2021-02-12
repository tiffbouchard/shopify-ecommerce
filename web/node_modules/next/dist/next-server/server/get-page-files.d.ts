export declare type BuildManifest = {
    devFiles: string[];
    ampDevFiles: string[];
    polyfillFiles: string[];
    lowPriorityFiles: string[];
    pages: {
        '/_app': string[];
        [page: string]: string[];
    };
    ampFirstPages: string[];
};
export declare function getPageFiles(buildManifest: BuildManifest, page: string): string[];
