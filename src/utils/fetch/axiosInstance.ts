import { configure } from "axios-hooks";
import Axios, { AxiosRequestConfig } from "axios";

export const axios = Axios.create({
  baseURL: process.env.VUE_APP_SERVER_ADDRESS || "",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

axios.interceptors.request.use((config: AxiosRequestConfig) => {
  const token = localStorage.getItem("access-token");
  config.headers.common["Authorization"] = `Bearer ${token}`;
  return config;
});

configure({ axios });
