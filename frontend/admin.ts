import { Helpers } from './common/Helpers';
import { AdminLayoutController } from './layouts/admin/controller';

const controllerModules = [
    import(/* webpackChunkName: "admin~index" */ './pages/admin/index/controller')
];

(() => {
    const layoutController = new AdminLayoutController();
    layoutController.initialize();

    controllerModules.forEach(async (module) => {
        const controllerModule = await module;

        if (Helpers.isRouteMatch(controllerModule.routes)) {
            const controller = new controllerModule.default();
            controller.launch();
        }
    });
})();
