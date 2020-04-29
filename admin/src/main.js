import Vue from "vue";
import "./plugins/axios";
import App from "./App.vue";
import "./plugins/element.js";
import router from "./router";
import { VueEditor } from "vue2-editor";
import VueCookie from "vue-cookie";
Vue.use(VueCookie);
Vue.config.productionTip = false;
import http from "./http";
import store from "./store";
Vue.prototype.$http = http;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
