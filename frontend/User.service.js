import axios from "axios";

const BASE_URL = "http://localhost:8080/user/get/7";
export const getUserList = () => {
  return axios.get(BASE_URL + "/user/list");
};
export const getUserById = (userId) => {
  return axios.get(BASE_URL + "/user/get/" + userId);
};
