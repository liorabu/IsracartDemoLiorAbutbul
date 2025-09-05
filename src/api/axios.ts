import axios from "axios";
import { BASE_URL } from "../constants/api";

const axiosLiveInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 3000,
});

export default axiosLiveInstance;