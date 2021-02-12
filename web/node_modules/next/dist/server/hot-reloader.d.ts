/// <reference types="node" />
import { IncomingMessage, ServerResponse } from 'http';
import { UrlObject } from 'url';
import { __ApiPreviewProps } from '../next-server/server/api-utils';
export declare function renderScriptError(res: ServerResponse, error: Error, { verbose }?: {
    verbose?: boolean | undefined;
}): Promise<void>;
export default class HotReloader {
    private dir;
    private buildId;
    private middlewares;
    private pagesDir;
    private webpackHotMiddleware;
    private config;
    private stats;
    private serverStats;
    private clientError;
    private serverError;
    private serverPrevDocumentHash;
    private prevChunkNames?;
    private onDemandEntries;
    private previewProps;
    private watcher;
    constructor(dir: string, { config, pagesDir, buildId, previewProps, }: {
        config: object;
        pagesDir: string;
        buildId: string;
        previewProps: __ApiPreviewProps;
    });
    run(req: IncomingMessage, res: ServerResponse, parsedUrl: UrlObject): Promise<{
        finished?: true;
    }>;
    private clean;
    private getWebpackConfig;
    start(): Promise<void>;
    stop(): Promise<void>;
    getCompilationErrors(page: string): Promise<any[]>;
    private send;
    ensurePage(page: string): Promise<any>;
}
