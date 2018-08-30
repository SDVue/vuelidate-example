import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const routes = [
  {
    path: "/",
    name: "Home",
    redirect: "/basic"
  },
  {
    path: "/basic",
    name: "Basic",
    component: () => import("@/examples/1-Basic")
  },
  {
    path: "/extended",
    name: "Extended",
    component: () => import("@/examples/2-Extended")
  },
  {
    path: "/errors",
    name: "Errors",
    component: () => import("@/examples/3-DisplayErrors")
  }
];

const router = new Router({
  routes
});

export default router;
