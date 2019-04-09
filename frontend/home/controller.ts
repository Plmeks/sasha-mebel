import { Controller } from "../common/Controller";
import { DynamicImport } from '../common/DynamicImport';

const controllerModules = [
    import(/* webpackChunkName: "home~index" */ './controllers/index'),
    import(/* webpackChunkName: "home~about" */ './controllers/about')
];

class HomeController extends Controller {
    initialize() {
        new DynamicImport(controllerModules);
    }
}

export { HomeController };
