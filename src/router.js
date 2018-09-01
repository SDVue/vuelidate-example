import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export const routes = [
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
    name: "Display Errors",
    component: () => import("@/examples/3-DisplayErrors")
  },
  {
    path: "/delayed",
    name: "Delayed Errors",
    component: () => import("@/examples/4-DelayedErrors")
  },
  {
    path: "/prevent",
    name: "Prevent Invalid",
    component: () => import("@/examples/5-PreventInvalid")
  },
  {
    path: "/loops",
    name: "Loops",
    component: () => import("@/examples/6-Loops")
  }
];

const router = new Router({
  routes
});

export default router;
