import { Helpers } from '../common/Helpers';

const controllerModules = [
    import(/* webpackChunkName: "home" */ '../pages/home/controller'),
    import(/* webpackChunkName: "about" */ '../pages/about/controller')
];

(() => {
    controllerModules.forEach(async (module) => {
        const controllerModule = await module;

        if (Helpers.isRouteMatch(controllerModule.routes)) {
            const controller = new controllerModule.default();
            controller.launch();
        }
    });
})();
