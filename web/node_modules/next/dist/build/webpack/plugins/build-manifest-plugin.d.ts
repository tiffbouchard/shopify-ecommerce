import { Compiler } from 'webpack';
export default class BuildManifestPlugin {
    private buildId;
    private modern;
    constructor(options: {
        buildId: string;
        modern: boolean;
    });
    createAssets(compilation: any, assets: any): any;
    apply(compiler: Compiler): void;
}
