import axios from "axios";
const http = axios.create({
  baseURL: "http://49.232.138.118:8080/yunzhi/"
});
export default http;
