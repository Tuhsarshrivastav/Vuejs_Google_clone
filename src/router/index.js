import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Results from "../components/Results.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/results/:query",
    name: "Result",
    component: Results,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
