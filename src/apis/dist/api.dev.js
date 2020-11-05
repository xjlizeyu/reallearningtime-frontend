"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchStatistic = exports.newPlan = exports.deletePlan = exports.stopTiming = exports.startTiming = exports.getTime = exports.signIn = exports.logIn = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _qs = _interopRequireDefault(require("qs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_axios["default"].defaults.baseURL = "http://localhost:80";
_axios["default"].defaults.withCredentials = true;
_axios["default"].defaults.headers["Content-Type"] = "application/x-www-form-urlencoded"; //声明通过axios与后端通信的api
//-----------------------------------------
//用户信息以及登陆注册相关api

var logIn = function logIn(userName, password) {
  return _axios["default"].post("/user/login", _qs["default"].stringify({
    userName: userName,
    password: password
  }));
};

exports.logIn = logIn;

var signIn = function signIn(userName, password) {
  return _axios["default"].post("/user/signin", _qs["default"].stringify({
    userName: userName,
    password: password
  }));
}; //-----------------------------------------
//-----------------------------------------
//计时相关操作


exports.signIn = signIn;

var getTime = function getTime() {
  return _axios["default"].post("/timing/gettime");
};

exports.getTime = getTime;

var startTiming = function startTiming() {
  return _axios["default"].post("/timing/start");
};

exports.startTiming = startTiming;

var stopTiming = function stopTiming() {
  return _axios["default"].post("/timing/stop");
}; //-----------------------------------------
//-----------------------------------------
//计划相关api


exports.stopTiming = stopTiming;

var deletePlan = function deletePlan() {
  return _axios["default"].post("/plan/delete");
};

exports.deletePlan = deletePlan;

var newPlan = function newPlan(days, duration) {
  return _axios["default"].post("/plan/new", _qs["default"].stringify({
    days: days,
    duration: duration
  }));
}; //-----------------------------------------
//--------------------------------------------
//统计相关api


exports.newPlan = newPlan;

var fetchStatistic = function fetchStatistic() {
  return _axios["default"].post("/timing/statistic");
}; //--------------------------------------------


exports.fetchStatistic = fetchStatistic;