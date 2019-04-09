import { Helpers } from './Helpers';

class DynamicImport {
    private controllerModules: any;

    constructor(modules: any) {
        this.controllerModules = modules;
        this.initializeControllers();
    }

    initializeControllers() {
        this.controllerModules.forEach(async (module: any) => {
            const controllerModule = await module;
    
            if (Helpers.isRouteMatch(controllerModule.routes)) {
                new controllerModule.default();
            }
        });
    }
}

export { DynamicImport };