import { Controller } from '../../common/Controller';

const routes = [
    '/about'
];

class AboutController extends Controller {
    constructor() {
        super();
        console.log('about');
    }
    initialize() {
        console.log('about controller');
    }
}

export default AboutController;
export { routes };
