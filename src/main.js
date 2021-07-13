import Vue from 'vue'
import App from './App.vue'
import router from './router'

/* Import Components Globally */
import Header           from './components/Header.vue';
import MainContainer    from './components/MainContainer.vue';
import AddDay           from './components/AddDay.vue';
import Day              from './components/Day.vue'; 
import Exercises        from './components/Exercises.vue'; 
import DeleteExercise   from './components/DeleteExercise.vue'; 
import AddExercise      from './components/AddExercise.vue'; 

/* Declare components */
Vue.component('app-header',       Header);
Vue.component('main-container',   MainContainer);
Vue.component('add-day',          AddDay);
Vue.component('app-day',          Day);
Vue.component('app-exercises',    Exercises);
Vue.component('del-exercises',    DeleteExercise);
Vue.component('add-exercises',    AddExercise);

/* Import Axios */
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
