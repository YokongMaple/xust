import axios from "axios";
const http = axios.create({
  baseURL: "http://server.versewow.cn/yunzhi/admin/",
  withCredentials: true,
});
http.interceptors.request.use(
  (config) => {
    console.log(config);
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);
http.interceptors.response.use(
  function(response) {
    console.log(response, "qqqqq");
    return response;
  },
  function(error) {
    // Do something with response error
    return Promise.reject(error);
  }
);
export default http;
