import axios from "axios";
import Qs from "qs";
axios.defaults.baseURL = "http://localhost:80";
axios.defaults.withCredentials = true;
axios.defaults.headers["Content-Type"] = "application/x-www-form-urlencoded";

//声明通过axios与后端通信的api

//-----------------------------------------
//用户信息以及登陆注册相关api
export const logIn = (userName, password) => {
  return axios.post("/user/login", Qs.stringify({ userName, password }));
};

export const signIn = (userName, password) => {
  return axios.post("/user/signin", Qs.stringify({ userName, password }));
};

//-----------------------------------------

//-----------------------------------------
//计时相关操作
export const getTime = () => {
  return axios.post("/timing/gettime");
};
export const startTiming = () => {
  return axios.post("/timing/start");
};
export const stopTiming = () => {
  return axios.post("/timing/stop");
};
//-----------------------------------------

//-----------------------------------------
//计划相关api
export const deletePlan = () => {
  return axios.post("/plan/delete");
};

export const newPlan = (days, duration) => {
  return axios.post("/plan/new", Qs.stringify({ days, duration }));
};
//-----------------------------------------
//--------------------------------------------
//统计相关api
export const fetchStatistic = () => {
  return axios.post("/timing/statistic");
};
//--------------------------------------------
