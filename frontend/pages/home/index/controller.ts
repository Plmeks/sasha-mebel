import { Controller } from '../../../common/Controller';
import { HomeServices } from './services';
import Vue from 'vue';

const routes = [
    '/',
    '/home',
    '/index',
    '/home/index'
];

class HomeIndexPageController extends Controller {
    constructor() {
        super();
        console.log('home');
    }
    
    initialize() {
        console.log('home controller!');
        this.initializeVueComponents();
        this.initializeVue();
    }

    initializeVueComponents() {
        Vue.component('todo-item', {
            template: '<li>Это одна задача в списке</li>'
        });
    }

    initializeVue() {
        new Vue({
            el: '#vue-home',
            data: {
                name: "Max",
                homeClass: "test",
                year: 24,
                posts: []
            },
            created: async function() {
                const homeServices = new HomeServices();
                this.posts = await homeServices.getPosts();
            },
            methods: {
                getText: () => {
                    return 'Hi!';
                }
            }
        });
    }
}

export default HomeIndexPageController;
export { routes };
