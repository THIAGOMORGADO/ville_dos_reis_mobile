import axios from "axios";

const api = axios.create({
  baseURL: 'https://backend-valledosreis.vercel.app/'
}) ;

export default api;