import Vue from "vue";
import "./plugins/axios";
import App from "./App.vue";
import "./plugins/element.js";
import router from "./router";
import { VueEditor } from "vue2-editor";
Vue.config.productionTip = false;
import http from "./http";
Vue.prototype.$http = http;
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
