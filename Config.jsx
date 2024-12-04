import axios from "axios";
const token = localStorage.getItem("token");

const baseAxios = axios.create({
  baseURL: `${import.meta.env.VITE_BASE_URL}/api/v1`,
  timeout: 10000,
  headers: { "X-Custom-Header": "foobar", Authorization: `Bearer ${token}` },
});

export default baseAxios;
