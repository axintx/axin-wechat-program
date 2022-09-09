// pages/favor/favor.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 1. 案例1  数据绑定 mustache 语法
    message: "hello world",

    // 2. 案例2  列表数据
    movies: ["少年派", "大话西游", "星际穿越", "独行月球"],

    // 3. 案例3  计数器
    counter: 0

  },

  increment() {
    // 可以修改data中的数据, 但是修改并不会引起页面的刷新(自动检测的新数据在小程序 和 react 中不会自动刷新重新渲染页面)
    // this.data.counter +=1

    // 修改data 必须使用 this.setData()
    this.setData({
      counter: this.data.counter + 1
    })
  },
  decrement() {
    // this.data.counter -=1
    this.setData({
      counter: this.data.counter - 1
    })
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