import axios from "axios";

export const authAxios = axios.create({
  withCredentials: false
});
