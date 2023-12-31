import { createRouter, createWebHistory } from "vue-router";
import FlexboxVue from "@/components/Flexbox.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: FlexboxVue,
    },
    {
      path: "/miles-to-kilometers",
      name: "miles-to-kilometers",
      component: () => import("@/components/MilesToKilometers.vue"),
    },
    {
      path: "/to-do",
      name: "to-do",
      component: () => import("@/components/ToDo.vue"),
    },
    {
      path: "/age-calculator",
      name: "age-calculator",
      component: () => import("@/components/AgeCalculator.vue"),
    },
  ],
});

export default router;
