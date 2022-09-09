// index.js
// 获取应用实例
const app = getApp()

Page({
   data: {
      pages: [
        { name: "01_初体验", path: "/pages/01_register_page/index" },
        { name: "02_常见组件", path: "/pages/02_common_cpns/index" },
        { name: "03_学习WXSS", path: "/pages/03_learn_wxss/index" },
        { name: "04_学习WXML", path: "/pages/04_learn_wxml/index" },
        { name: "05_学习WXS", path: "/pages/05_learn_wxs/index" },
        { name: "06_学习Event", path: "/pages/06_learn_event/index" },
      ]
   },
   // 事件处理函数
   onBtnClick(event) {
      console.log("onBtnclick");
      // 1. 获取item
      const item = event.target.dataset.item
      // 2. 跳转路径
      wx.navigateTo({
         url: item.path,
      })
   },
   onLoad() {

   },
   getUserProfile(e) {
      // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
      wx.getUserProfile({
         desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
         success: (res) => {
            console.log(res)
            this.setData({
               userInfo: res.userInfo,
               hasUserInfo: true
            })
         }
      })
   },
   getUserInfo(e) {
      // 不推荐使用getUserInfo获取用户信息，预计自2021年4月13日起，getUserInfo将不再弹出弹窗，并直接返回匿名的用户个人信息
      console.log(e)
      this.setData({
         userInfo: e.detail.userInfo,
         hasUserInfo: true
      })
   }
})