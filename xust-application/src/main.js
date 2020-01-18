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

Vue.use(VueAwesomeSwiper /* { default global options } */);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
