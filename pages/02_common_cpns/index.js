// pages/02_common_cpns/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    message: "阿心同学",
    chooseImageUrl: "",
    viewColors: ["red", "blue", "green", "purple", "yellow", "red", "blue", "green", "purple", "yellow"]
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
   * 获取用户信息
   */
  getUserInfo(events) {
    wx.getUserProfile({
      desc: 'desc',
    }).then(res => {
      console.log(res);
    })
  },
  /**
   * 获取电话号
   * @param {*} event 
   */
  getPhoneNumber(event) {
    console.log(event);
  },
  /**
   * 获取图片
   */
  onChooseImage() {
    wx.chooseMedia({
      mediaType: "image",
    }).then(res => {
      console.log(res);
      const imagePath = res.tempFiles[0].tempFilePath
      this.setData({
        chooseImageUrl: imagePath
      })
    })
  },

  /**
   * 滚动到顶部或左边
   */
  onScrollToUpper() {
    console.log("滚动到顶部或左边");
  },

  /**
   * 滚动到底部或右边
   */
  onScrollToLower() {
    console.log("滚动到底部或右边");
  },

  /**
   * 正在滚动
   */
  onScroll(event) {
    console.log("滚动路径", event);
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

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})