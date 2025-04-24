import axios from "axios";

export const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers:{
    Authorization: `Bearer ${localStorage.getItem("authToken")}`,
  },
  withCredentials: true
})