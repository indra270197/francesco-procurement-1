import VueRouter from 'vue-router'
Vue.use(VueRouter);


import { store } from '../store/store' 
import PurchaseRequestComponent from '../components/purchase-officer/purchase_request.vue'
window.router = new VueRouter({
  routes: [
    { 
      path: '/', 
      redirect: '/purchase-request' 
    },
    { 
      path: '/purchase-request', 
      component: PurchaseRequestComponent
    }
  ]
});

const app = new Vue({
  	router,
    store
}).$mount('#app');

