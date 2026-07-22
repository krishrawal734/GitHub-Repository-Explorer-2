import axios from "axios";
import toast from "react-hot-toast";

const axiosInstance = axios.create({
  baseURL: "https://api.github.com",
  timeout: 10000,
  headers: {
    Accept: "application/vnd.github.v3+json",
  },
});


axiosInstance.interceptors.request.use((config) => {

  const token = import.meta.env.VITE_GITHUB_TOKEN;

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});


axiosInstance.interceptors.response.use(

(response)=>response,

(error)=>{

if(error.response?.status===403){

toast.error("Github API Rate Limit Exceeded");

}

return Promise.reject(error);

}

);

export default axiosInstance;