import { createRouter, createWebHistory } from "vue-router";
import HomeView_1 from "../views/HomeView_1.vue";
import HomeView_2 from "../views/HomeView_2.vue";
import DetailView from "../views/DetailView.vue";

const routes = [
  {
    path: "/HomeView_1",
    name: "HomeView_1",
    component: HomeView_1,
  },
  {
    path: "/HomeView_2",
    name: "homeView_2",
    component: HomeView_2,
  },
  {
    path: "/posts/:id",
    name: "DetailView",
    component: DetailView,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
