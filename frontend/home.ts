import { Helpers } from './common/Helpers';
import { HomeLayoutController } from './layouts/home/controller';

const controllerModules = [
    import(/* webpackChunkName: "home~index" */ './pages/home/index/controller'),
    import(/* webpackChunkName: "home~about" */ './pages/home/about/controller')
];

(() => {
    const layoutController = new HomeLayoutController();
    layoutController.initialize();

    controllerModules.forEach(async (module) => {
        const controllerModule = await module;

        if (Helpers.isRouteMatch(controllerModule.routes)) {
            const controller = new controllerModule.default();
            controller.launch();
        }
    });
})();
