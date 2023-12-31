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
  ],
});

export default router;
