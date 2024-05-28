import { createRouter, createWebHistory } from 'vue-router';
import HomeView from './views/HomeView.vue';
import AccountView from './views/AccountView.vue';
import GameView from './views/GameView.vue';
import InfoView from './views/InfoView.vue';
import LogoView from './views/LogoView.vue';
import TestView from './views/TestView.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/info',
    name: 'info',
    component: InfoView,
  },
  {
    path: '/logo',
    name: 'logo',
    component: LogoView,
  },
  {
    path: '/account',
    name: 'account',
    component: AccountView,
  },
  {
    path: '/game',
    name: 'game',
    component: GameView,
  },
  {
    path: '/test',
    name: 'test',
    component: TestView,
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;