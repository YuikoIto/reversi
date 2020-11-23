import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Main from '@/components/Main.vue';
import Game from '@/components/game/Game.vue';

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'Main',
    component: Main,
  },
  {
    path: '/game',
    name: 'Game',
    component: Game,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
