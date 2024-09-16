import { createRouter, createWebHistory } from 'vue-router'; 
import UserRegister from '../views/UserRegister.vue'; 
import UserLogin from '../views/UserLogin.vue'; 
import MainPage from '../views/MainPage.vue'; 

const routes = [
  {
    path: '/register',
    name: 'UserRegister',
    component: UserRegister
  },
  {
    path: '/login',
    name: 'UserLogin',
    component: UserLogin
  },
  {
    path: '/',
    name: 'MainPage',
    component: MainPage
  }
];

const router = createRouter({
  history: createWebHistory(), 
  routes
});

export default router;
