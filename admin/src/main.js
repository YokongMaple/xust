import Vue from "vue";
import "./plugins/axios";
import App from "./App.vue";
import "./plugins/element.js";
import router from "./router";
import { VueEditor } from "vue2-editor";
Vue.config.productionTip = false;
import http from "./http";
Vue.prototype.$http = http;

// 时间格式化插件
import moment from "moment";
Vue.prototype.$moment = moment;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
