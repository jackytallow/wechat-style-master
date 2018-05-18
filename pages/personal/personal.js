"use strict";
var app = getApp();
var root_path = "../../";
var index_obj = require(root_path + 'function/personal_index.js')

Page({
  data: {
    //定义用户信息的json配置
    userInfo: {},

  },
  onLoad: function (options) {
    var that = this;
    app.getUserInfo(function (userInfo) {
  //后台打印出用户信息
      // console.log(userInfo);

      //设置用户信息
      that.setData({
        userInfo: userInfo
      })
    });
  },
  onReady: function () {
    index_obj.set_title();
  },
  onShow: function () {
    index_obj.set_title();
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  }
})