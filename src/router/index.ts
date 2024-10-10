import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../components/HomePage.vue'; // This will be the homepage layout with Hero, Features, etc.
import SearchableGrid from '../components/SearchableGrid.vue'; // The dynamic page

const routes = [
  {
    path: '/',
    component: HomePage, // This is where your homepage components (Hero, Features, etc.) will render
  },
  {
    path: '/finterms',
    component: SearchableGrid, // The SearchableGrid page
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
