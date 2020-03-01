import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Subject from "../views/Subject.vue";
import Option from "../views/Option.vue";
import Case from "../views/Case.vue";
import Activity from "../views/Activity.vue";
import Policy from "../views/Policy.vue";
import Introduction from "../views/Introduction.vue";
import Expert from "../views/Expert.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import ExpertDetail from "../views/details/ExpertDetail.vue";
import CaseDetail from "../views/details/CaseDetail.vue";
import PolicyDetail from "../views/details/PolicyDetail.vue";
import SubjectDetail from "../views/details/SubjectDetail.vue";
import ActivityDetail from "../views/details/ActivityDetail.vue";
import Question from "../views/Question.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Home
  },
  { path: "/home", name: "home", component: Home },
  { path: "/subject", name: "subject", component: Subject },
  { path: "/activity", name: "activity", component: Activity },
  { path: "/introduction", name: "introduction", component: Introduction },
  { path: "/policy", name: "policy", component: Policy },
  { path: "/case", name: "case", component: Case },
  { path: "/option", name: "option", component: Option },
  { path: "/expert", name: "expert", component: Expert },
  { path: "/login", name: "login", component: Login },
  { path: "/register", name: "register", component: Register },
  {
    path: "/expert/detail/:id",
    name: "expert-detail",
    component: ExpertDetail
  },
  { path: "/case/detail/:id", name: "case-detail", component: CaseDetail },
  {
    path: "/policy/detail/:id",
    name: "policy-detail",
    component: PolicyDetail
  },
  {
    path: "/activity/detail/:id",
    name: "activity-detail",
    component: ActivityDetail
  },
  { path: "/subject/detail", name: "subject-detail", component: SubjectDetail },
  { path: "/question", name: "question", component: Question }
];

const router = new VueRouter({
  routes
});
// router.beforeEach((to, from, next) => {
//   if (localStorage.getItem("loginStatus")) {
//     console.log(this.$store.state.loginStatus);
//     this.$store.state.loginStatus = localStorage.getItem("loginStatus");
//     next();
//   } else {
//     next(); // 确保一定要有next()被调用
//   }
// });
export default router;
