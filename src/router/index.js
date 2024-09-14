import { createRouter, createWebHistory, RouterView } from "vue-router";
import LayoutDefault from "@/layouts/Default.vue";
const routes = [
  {
    path: "/",
    component: LayoutDefault,
    children: [
      {
        // 메인
        path: "",
        name: "Main",
        component: () => import("@/pages/Main.vue"),
      },
    ],
  },
  {
    path: "/404",
    name: "NotFound",
    component: () => import("@/pages/NotFound.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/404",
  },
];

const router = createRouter({
  /*  history: createWebHistory(process.env.BASE_URL), */
  history: createWebHistory(""),
  routes,
  scrollBehavior(to, from, savedPosition) {
    document.getElementById("app").scrollIntoView({ behavior: "smooth" });
    return savedPosition
      ? savedPosition
      : {
          top: 0,
        };
  },
});
// beforeEach 설정
// router.beforeEach(beforeEach);
// afterEach설정
// router.afterEach(hideModal);
export default router;
