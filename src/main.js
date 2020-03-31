import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import Objects from './components/Objects.vue';
import Departments from './components/Departments.vue';
import ObjectDetail from './components/ObjectDetail.vue';

Vue.config.productionTip = false;
Vue.use(VueRouter);

const routes = [
  { path: '/:id', component: Objects, props: true },
  { path: '/', component: Departments },
  { path: '/:id' + '/:objectId', component: ObjectDetail, props: true },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
