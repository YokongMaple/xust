import axios from "axios";
import Vue from "vue";
import router from "./router";
const http = axios.create({
  baseURL: "http://server.versewow.cn/yunzhi",
});
http.interceptors.request.use(
  function(config) {
    if (localStorage.token) {
      config.headers.Authorization = "Bearer " + localStorage.token || "";
    }
    return config;
  },
  function(error) {
    return Promise.reject(error);
  }
);

// 响应拦截器
http.interceptors.response.use(
  (res) => {
    console.log(res.data);
    if (res.data.status === 401) {
      Vue.prototype.$message({
        type: "error",
        message: res.data.msg,
      });
    }
    if (res.data.status === 601) {
      Vue.prototype.$message({
        type: "error",
        message: res.data.msg,
      });
      router.push("/login");
    }
    console.log(res.data.status);
    return res;
  },
  (err) => {
    // if (err.response.data.message) {
    //   Vue.prototype.$message({
    //     type: "error",
    //     message: err.response.data.message,
    //   });
    // }

    return Promise.reject(err);
  }
);

export default http;
