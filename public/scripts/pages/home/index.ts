import { HomeServices } from './services';
import Vue from 'vue';

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

Vue.component('todo-item', {
    template: '<li>Это одна задача в списке</li>'
});
