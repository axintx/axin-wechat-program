// pages/profile/profile.js
Page({

   /**
    * 页面的初始数据
    */
   data: {
      listCount: 50
      
   },

   /**
    * 生命周期函数--监听页面加载
    */
   onLoad(options) {

   },

   /**
    * 生命周期函数--监听页面初次渲染完成
    */
   onReady() {

   },

   /**
    * 生命周期函数--监听页面显示
    */
   onShow() {

   },

   /**
    * 生命周期函数--监听页面隐藏
    */
   onHide() {

   },

   /**
    * 生命周期函数--监听页面卸载
    */
   onUnload() {

   },

   /**
    * 页面相关事件处理函数--监听用户下拉动作
    */
   onPullDownRefresh() {
      console.log("用户进行下拉刷新");

      // 模拟网络请求: 定时器
      setTimeout(() => {
         this.setData({
            listCount: 50
         })
         // api: 停止下拉刷新 
         wx.stopPullDownRefresh({
            success: (res) => {
               console.log("成功停止了下拉刷新", res);
            },
            fail: (err) => {
               console.log("失败停止了下拉刷新", err);
            }
         })
      }, 1000)
   },

   /**
    * 页面上拉触底事件的处理函数
    */
   onReachBottom() {
      console.log("用户进行上拉操作");
      this.setData({
         listCount: this.data.listCount + 50
      })
   },

   /**
    * 用户点击右上角分享
    */
   onShareAppMessage() {

   }
})