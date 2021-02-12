export declare type Env = {
    [key: string]: string;
};
export declare type LoadedEnvFiles = Array<{
    path: string;
    contents: string;
}>;
export declare function processEnv(loadedEnvFiles: LoadedEnvFiles, dir?: string): Env;
export declare function loadEnvConfig(dir: string, dev?: boolean): {
    combinedEnv: Env;
    loadedEnvFiles: LoadedEnvFiles;
};
