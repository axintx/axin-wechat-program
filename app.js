// app.js
App({
   onLaunch(options) {
      console.log(options);
      // 展示本地存储能力
      // const logs = wx.getStorageSync('logs') || []
      // logs.unshift(Date.now())
      const userInfo = wx.getStorageSync("userInfo")
      const token = wx.getStorageSync("token")

      // 1. 进行登录操作 (判断逻辑)
      // 将登录成功的数据, 保存到 storage
      if (!token || !userInfo) {
         console.log("登录操作")
         wx.setStorageSync("token", "wlstoken")
         wx.setStorageSync("userInfo", { nickName: "wls", level: 100})
      }
      
      // 2. 将获取到数据保存到 globalData 中
      this.globalData.token = token
      this.globalData.userInfo = userInfo    
   },

   onShow(options) {
      // 判断小程序进入场景
      console.log("onShow", options);
   },
   onHide(options) {
      console.log("onHide");
   },

   // 数据不是响应式的, 这里共享的数据通常是一些固定的数据 
   globalData: {
      token: "",
      userInfo: {}
   }
})
