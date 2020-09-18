import Vue from 'vue'
import VueRouter from 'vue-router';          // 追記 
import App from './App.vue'
import Game from './components/Game.vue';    // 追記
import Score from './components/Score.vue';  // 追記
 
// ルータ設定 追記
Vue.use(VueRouter);
const router = new VueRouter({
  routes: [
    {
      path: '/game',
      component: Game
    },
    {
      path: '/score',
      component: Score
    },
    {
      path: '*',
      redirect: '/game'
    }
  ]
});
 
new Vue({
  el: '#app',
  router, // 追記
  render: h => h(App)
});