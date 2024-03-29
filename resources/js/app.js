/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

import VueRouter from 'vue-router'
import { BootstrapVue } from 'bootstrap-vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import draggable from 'vuedraggable'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

library.add(faBars, faExternalLinkAlt)

window.Vue = require('vue');

Vue.use(BootstrapVue)
Vue.use(VueRouter)

const routes = [
    {path: '/', component: require('./components/Books.vue').default},
    {path: '/categories', component: require('./components/Categories.vue').default},
    {path: '/list/:slug', component: require('./components/BooksList.vue').default},
    {path: '/detail/:id', component: require('./components/BookDetail.vue').default},
]

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

const files = require.context('./', true, /\.vue$/i)
files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))
// Vue.component('font-awesome-icon', FontAwesomeIcon);
// Vue.component('draggable', draggable);
// Vue.component('TableDraggable', require('./components/TableDraggable.vue').default);
// Vue.component('Books', require('./components/Books.vue').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const router = new VueRouter({
    routes,
    mode: "history"
})

const app = new Vue({
    router,
    el: '#app',
});
