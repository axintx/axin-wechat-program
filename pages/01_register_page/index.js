// pages/01_初体验/index.js
Page({
	data: {
		banners: [],
    recommends: [],
    
    btns: ["red", "blue", "green", "orange"]
	},
	// 1. 作用一: 发送网络请求 请求数据
	onLoad() {
		// 发送网络请求
		wx.request({
			url: 'http://123.207.32.32:8000/home/multidata',
			success: (res) => {
				console.log(res);
				const data = res.data.data
				const banners = data.banner.list
				const recommends = data.recommend.list
				this.setData({
					banners,
					recommends
				})
			}
		})
  },
  
  // 3. 绑定wxml 中产生事件后的回调函数
  onBtnClick(event) {
    console.log('btn click', event.target.dataset.color);
  },

  // 4. 绑定下拉刷新 / 达到底部 / 页面滚动
  onPullDownRefresh() {
    console.log("下拉刷新" )
  },
  onReachBttom() {
    console.log("达到底部");
  },
  onPageScroll(event) {
    console.log("页面滚动", event);
  },
   
  // 生命周期函数
  onShow() {
    console.log("onShow");
  },
  onReady() {
    console.log("onReady");
  },
  onHide() {
    console.log("onHide");
  }, 
  onUnload() {
    console.log("onUnload");
  }
})

