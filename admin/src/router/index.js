import Vue from "vue";
import VueRouter from "vue-router";

import Main from "../views/Main.vue";

import CaseEdit from "../views/CaseEdit";
import CaseList from "../views/CaseList";

import PolicyEdit from "../views/PolicyEdit.vue";
import PolicyList from "../views/PolicyList";

import ActivityEdit from "../views/ActivityEdit";
import ActivityList from "../views/ActivityList";

import OptionEdit from "../views/OptionEdit";
import OptionList from "../views/OptionList";

import ExpertEdit from "../views/ExpertEdit.vue";
import ExpertList from "../views/ExpertList.vue";

import IntroductionEdit from "../views/IntroductionEdit.vue";

import AccountList from "../views/AccountList.vue";
import AccountEdit from "../views/AccountEdit.vue";

import Login from "../views/Login.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/",
    name: "main",
    component: Main,
    children: [
      { path: "/expert/create", component: ExpertEdit },
      { path: "/expert/list", component: ExpertList },
      { path: "/expert/edit/:id", component: ExpertEdit, props: true },

      { path: "/case/create", component: CaseEdit },
      { path: "/case/list", component: CaseList },
      { path: "/case/edit/:id", component: CaseEdit, props: true },

      { path: "/activity/create", component: ActivityEdit },
      { path: "/activity/list", component: ActivityList },
      { path: "/activity/edit/:id", component: ActivityEdit, props: true },

      { path: "/option/create", component: OptionEdit },
      { path: "/option/list", component: OptionList },
      { path: "/option/edit/:id", component: OptionEdit, props: true },

      { path: "/policy/create", component: PolicyEdit },
      { path: "/policy/list", component: PolicyList },
      { path: "/policy/edit/:id", component: PolicyEdit, props: true },

      { path: "/Introduction/create", component: IntroductionEdit },

      // { path: "/introduction/create", component: IntroductionEdit },
      // { path: "/introduction/list", component: IntroductionList },
      // {
      //   path: "/introduction/edit/:id",
      //   component: IntroductionEdit,
      //   props: true
      // },

      { path: "/accounts/list", component: AccountList },
      { path: "/accounts/create", component: AccountEdit },
      { path: "/accounts/create/:uuid", component: AccountEdit, props: true },
    ],
  },
];

const router = new VueRouter({
  routes,
});

router.beforeEach((to, from, next) => {
  // if(to.path='login')
  console.log(to.path === "/login");
  if (to.path === "/login") {
    next();
    return;
  }
  if (localStorage.isLogin) {
    next();
  } else {
    next("/login");
    // next("/login");
  }
});

export default router;
