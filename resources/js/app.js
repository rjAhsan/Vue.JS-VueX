import Vue from 'vue';
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';
import router from './Routes/routes';
import Store from './Store/store';
import BootstrapVue from 'bootstrap-vue'

Vue.use(BootstrapVue);




const app = new Vue({
    el: '#app',
    render: h => h(App),
    router,
    Store


});
