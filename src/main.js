import Vue from 'vue'
import App from './App.vue'
import router from './router'

/* Import Components Globally */
import Header           from './components/Header.vue';
import MainContainer    from './components/MainContainer.vue';
import AddDay           from './components/AddDay.vue';
import Day              from './components/Day.vue'; 

/* Declare components */
Vue.component('app-header',       Header);
Vue.component('main-container',   MainContainer);
Vue.component('add-day',          AddDay);
Vue.component('app-day',          Day);

/* Import Axios */
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
