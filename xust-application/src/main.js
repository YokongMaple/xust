import Vue from "vue";
import "./plugins/axios";
import App from "./App.vue";
import "./plugins/element.js";
import router from "./router";
import { VueEditor } from "vue2-editor";
import "./style.css";
Vue.config.productionTip = false;
import VueAwesomeSwiper from "vue-awesome-swiper";

// require styles
import "swiper/dist/css/swiper.css";

// 导入axios配置文件
import http from "./http";

import store from './store'
Vue.prototype.$http = http;

Vue.use(VueAwesomeSwiper /* { default global options } */);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
