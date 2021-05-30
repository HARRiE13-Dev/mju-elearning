import Vue from "vue";
import Router from "vue-router";
import AppHeader from "./layout/AppHeader";
import AppFooter from "./layout/AppFooter";
import Components from "./views/Components.vue";
import Landing from "./views/Landing.vue";
import Lesson1_1 from "./views/Lesson1_1.vue";
import Lesson1_2 from "./views/Lesson1_2.vue";
import Lesson1_3 from "./views/Lesson1_3.vue";
import Lesson1_4 from "./views/Lesson1_4.vue";

import Lesson2_1 from "./views/Lesson2_1.vue";
import Lesson2_2 from "./views/Lesson2_2.vue";
import Lesson2_3 from "./views/Lesson2_3.vue";
import Lesson2_4 from "./views/Lesson2_4.vue";
import Lesson2_5 from "./views/Lesson2_5.vue";
import Lesson2_6 from "./views/Lesson2_6.vue";
import Lesson2_7 from "./views/Lesson2_7.vue";


import Lesson3_1 from "./views/Lesson3_1.vue";
import Lesson3_2 from "./views/Lesson3_2.vue";
import Lesson3_3 from "./views/Lesson3_3.vue";

import Lesson4_1 from "./views/Lesson4_1.vue";
import Lesson4_2 from "./views/Lesson4_2.vue";
import Lesson4_3 from "./views/Lesson4_3.vue";

import Lesson5_1 from "./views/Lesson5_1.vue";
import Lesson5_2 from "./views/Lesson5_2.vue";

import Lesson6_1 from "./views/Lesson6_1.vue";
import Lesson6_2 from "./views/Lesson6_2.vue";
import Lesson6_3 from "./views/Lesson6_3.vue";
import Lesson6_4 from "./views/Lesson6_4.vue";

import Lesson7_1 from "./views/Lesson7_1.vue";
import Lesson7_2 from "./views/Lesson7_2.vue";



import Login from "./views/Login.vue";
import Register from "./views/Register.vue";
import Profile from "./views/Profile.vue";

Vue.use(Router);

export default new Router({
  linkExactActiveClass: "active",
  routes: [
    {
      path: "/",
      name: "components",
      components: {
        header: AppHeader,
        default: Components,
        footer: AppFooter
      }
    },
    {
      path: "/landing",
      name: "landing",
      components: {
        header: AppHeader,
        default: Landing,
        footer: AppFooter
      }
    },
    {
      path: "/lesson1_1",
      name: "lesson1_1",
      components: {
        header: AppHeader,
        default: Lesson1_1,
        footer: AppFooter
      }
    },
    {
      path: "/lesson1_2",
      name: "lesson1_2",
      components: {
        header: AppHeader,
        default: Lesson1_2,
        footer: AppFooter
      }
    },
    {
      path: "/lesson1_3",
      name: "lesson1_3",
      components: {
        header: AppHeader,
        default: Lesson1_3,
        footer: AppFooter
      }
    },
    {
      path: "/lesson1_4",
      name: "lesson1_4",
      components: {
        header: AppHeader,
        default: Lesson1_4,
        footer: AppFooter
      }
    },
    {
      path: "/lesson2_1",
      name: "lesson2_1",
      components: {
        header: AppHeader,
        default: Lesson2_1,
        footer: AppFooter
      }
    },
    {
      path: "/lesson2_2",
      name: "lesson2_2",
      components: {
        header: AppHeader,
        default: Lesson2_2,
        footer: AppFooter
      }
    },
    {
      path: "/lesson2_3",
      name: "lesson2_3",
      components: {
        header: AppHeader,
        default: Lesson2_3,
        footer: AppFooter
      }
    },
    {
      path: "/lesson2_4",
      name: "lesson2_4",
      components: {
        header: AppHeader,
        default: Lesson2_4,
        footer: AppFooter
      }
    },
    {
      path: "/lesson2_5",
      name: "lesson2_5",
      components: {
        header: AppHeader,
        default: Lesson2_5,
        footer: AppFooter
      }
    },
    {
      path: "/lesson2_6",
      name: "lesson2_6",
      components: {
        header: AppHeader,
        default: Lesson2_6,
        footer: AppFooter
      }
    },
    {
      path: "/lesson2_7",
      name: "lesson2_7",
      components: {
        header: AppHeader,
        default: Lesson2_7,
        footer: AppFooter
      }
    },
    {
      path: "/lesson3_1",
      name: "lesson3_1",
      components: {
        header: AppHeader,
        default: Lesson3_1,
        footer: AppFooter
      }
    },
    {
      path: "/lesson3_2",
      name: "lesson3_2",
      components: {
        header: AppHeader,
        default: Lesson3_2,
        footer: AppFooter
      }
    },
    {
      path: "/lesson3_3",
      name: "lesson3_3",
      components: {
        header: AppHeader,
        default: Lesson3_3,
        footer: AppFooter
      }
    },
    {
      path: "/lesson4_1",
      name: "lesson4_1",
      components: {
        header: AppHeader,
        default: Lesson4_1,
        footer: AppFooter
      }
    },
    {
      path: "/lesson4_2",
      name: "lesson4_2",
      components: {
        header: AppHeader,
        default: Lesson4_2,
        footer: AppFooter
      }
    },
    {
      path: "/lesson4_3",
      name: "lesson4_3",
      components: {
        header: AppHeader,
        default: Lesson4_3,
        footer: AppFooter
      }
    },
    {
      path: "/lesson5_1",
      name: "lesson5_1",
      components: {
        header: AppHeader,
        default: Lesson5_1,
        footer: AppFooter
      }
    },
    {
      path: "/lesson5_2",
      name: "lesson5_2",
      components: {
        header: AppHeader,
        default: Lesson5_2,
        footer: AppFooter
      }
    },
    {
      path: "/lesson6_1",
      name: "lesson6_1",
      components: {
        header: AppHeader,
        default: Lesson6_1,
        footer: AppFooter
      }
    },
    {
      path: "/lesson6_2",
      name: "lesson6_2",
      components: {
        header: AppHeader,
        default: Lesson6_2,
        footer: AppFooter
      }
    },
    {
      path: "/lesson6_3",
      name: "lesson6_3",
      components: {
        header: AppHeader,
        default: Lesson6_3,
        footer: AppFooter
      }
    },
    {
      path: "/lesson6_4",
      name: "lesson6_4",
      components: {
        header: AppHeader,
        default: Lesson6_4,
        footer: AppFooter
      }
    },
    {
      path: "/lesson7_1",
      name: "lesson7_1",
      components: {
        header: AppHeader,
        default: Lesson7_1,
        footer: AppFooter
      }
    },
    {
      path: "/lesson7_2",
      name: "lesson7_2",
      components: {
        header: AppHeader,
        default: Lesson7_2,
        footer: AppFooter
      }
    },

    {
      path: "/login",
      name: "login",
      components: {
        header: AppHeader,
        default: Login,
        footer: AppFooter
      }
    },
    {
      path: "/register",
      name: "register",
      components: {
        header: AppHeader,
        default: Register,
        footer: AppFooter
      }
    },
    {
      path: "/profile",
      name: "profile",
      components: {
        header: AppHeader,
        default: Profile,
        footer: AppFooter
      }
    }
  ],
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});
