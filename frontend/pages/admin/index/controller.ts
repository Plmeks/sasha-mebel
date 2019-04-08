import { Controller } from "../../../common/Controller";

export const routes = [
    '/admin',
    '/admin/index',
];

class AdminController extends Controller {
    constructor() {
        super();
        alert('admin');
    }
}

export default AdminController;
