import Vue from 'vue'
import App from './App.vue'
import router from './router'

/* Import Components Globally */
import Header           from './components/Header.vue';
import MainContainer    from './components/MainContainer.vue';
import AddDay           from './components/AddDay.vue';
import Day              from './components/Day.vue'; 
import Exercises        from './components/Exercises.vue'; 
import DeleteDay        from './components/DeleteDay.vue'; 
import AddExercise      from './components/AddExercise.vue'; 
import AddSet           from './components/AddSet.vue'; 

/* Declare components */
Vue.component('app-header',       Header);
Vue.component('main-container',   MainContainer);
Vue.component('add-day',          AddDay);
Vue.component('app-day',          Day);
Vue.component('app-exercises',    Exercises);
Vue.component('del-day',          DeleteDay);
Vue.component('add-exercises',    AddExercise);
Vue.component('add-sets',         AddSet);

/* Import Axios */
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
