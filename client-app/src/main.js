import Vue from 'vue';
import VueRouter from 'vue-router';
import ElementUI from 'element-ui';
import locale from 'element-ui/lib/locale/lang/en';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faClock, faCalendarAlt, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import App from './App.vue';


import NoteToday from './components/pages/NoteToday.vue';
import NotePast from './components/pages/NotePast.vue';
import NoteStats from './components/pages/NoteStats.vue';


import 'element-ui/lib/theme-chalk/index.css';

library.add(faClock);
library.add(faCalendarAlt);
library.add(faTrashAlt);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.use(ElementUI, { locale });
Vue.use(VueRouter);


Vue.config.productionTip = false;

const routes = [
  { path: '/', component: NoteToday },
  { path: '/today', component: NoteToday },
  { path: '/past', component: NotePast },
  { path: '/stats', component: NoteStats },
];


const router = new VueRouter({
  routes, // short for `routes: routes`
});

new Vue({
  render: h => h(App),
  router,
}).$mount('#app');
