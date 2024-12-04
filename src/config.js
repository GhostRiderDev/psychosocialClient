import axios from "axios";

// "http://192.168.10.35:8000/api"
 const baseURL = axios.create({
  baseURL: `${import.meta.env.VITE_BASE_URL}api/v1`,
  timeout: 10000,
  headers: { "X-Custom-Header": "foobar", authorization: `Bearer ${localStorage.getItem("token")}` },

})

export default baseURL;