import Vue from "vue";
import Router from "vue-router";

import Layout from "@/components/Layout/Layout";

// Routes with Multiple Child Components
import tables from "@/router/tables";
import core from "@/router/core";
import components from "@/router/components";
import uiElements from "@/router/ui-elements";
import formElements from "@/router/form-elements";
import formPages from "@/router/form-pages";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/login",
      name: "Login",
      component: () => import("@/pages/FormPages/Login"),
    },
    {
      path: "/error",
      name: "Error",
      component: () => import("@/pages/Error/Error"),
    },
    {
      path: "/app",
      name: "Layout",
      component: Layout,
      children: [
        {
          path: "dashboard",
          name: "AnalyticsPage",
          component: () => import("@/pages/Dashboard/Dashboard"),
        },
        {
          path: "notifications",
          name: "NotificationsPage",
          component: () => import("@/pages/Notifications/Notifications"),
        },
        {
          path: "custom-components",
          name: "CustomComponentsPage",
          component: () => import("@/pages/CustomComponents/CustomComponents"),
        },
        ...tables,
        ...core,
        ...components,
        ...uiElements,
        ...formElements,
        ...formPages,
      ],
    },
    {
      path: "*",
      redirect: "/app",
    },
  ],
});
