import Vue from 'vue'
import VueRouter from 'vue-router'
import BootstrapVue from 'bootstrap-vue'
import App from './App.vue'


import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Paginas
import Home from './components/home.vue'
import Detalhes from './components/paginas/detalhes.vue'

Vue.use(BootstrapVue);
Vue.use(VueRouter);

const routes = [
  { path: '/', component: Home },
  { path: '/detalhes', component: Detalhes },

]
const router = new VueRouter({
  routes
})


const app = new Vue({
  router
}).$mount('#container')
