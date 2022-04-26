import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "main",
      component: () => import("@/views/Main.vue"),
    },
    {
      path: "/login",
      name: "login",
      component: () => import("@/views/auth/Login.vue"),
    },
    {
      path: "/register",
      name: "register",
      component: () => import("@/views/auth/Register.vue"),
    },
    {
      path: "/blogs",
      name: "blogs",
      component: () => import("@/views/Blogs.vue"),
    },
    {
      path: "/request",
      name: "request",
      component: () => import("@/views/Request.vue"),
    },
    {
      path: "/apply",
      name: "apply",
      component: () => import("@/views/Apply.vue"),
    },
    {
      path: "/vacancies",
      name: "vacancies",
      component: () => import("@/views/Vacancies.vue"),
    },
  ],
});

export default router;
