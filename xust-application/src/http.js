import axios from "axios";
const http = axios.create({
  baseURL: "http://49.232.138.118:8080/yunzhi/",
  withCredentials: true,
});
http.interceptors.request.use(
  (config) => {
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);
http.interceptors.response.use(
  function(response) {
    return response;
  },
  function(error) {
    // Do something with response error
    return Promise.reject(error);
  }
);
export default http;
