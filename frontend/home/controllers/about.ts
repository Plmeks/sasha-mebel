import { Controller } from '../../common/Controller';

const routes = [
    '/about',
    '/home/about',
];

class HomeAboutPageController extends Controller {
    constructor() {
        super();
        console.log('about');
    }
    initialize() {
        console.log('about controller');
    }
}

export default HomeAboutPageController;
export { routes };
