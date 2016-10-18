// news 
Page({
  data:{
    // text:"这是一个页面"
    imgUrls:[
        'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
        'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    indicatorDots: false,
    autoplay: false,
    interval: 5000,
    duration: 1000,

    // 默认为空
    items:[]  
  },

  onPullDownRefresh: function () {
    //console.log('onPullDownRefresh', new Date())
    requestData((res)=>{
        this.setData({items:res});
        console.log('数据获取到了');
        wx.stopPullDownRefresh({
          complete: function (res) {
            //console.log(res, new Date())
             console.log(res, '停止刷新');
            }
        })
    });
  },
  // stopPullDownRefresh: function () {
  //   wx.stopPullDownRefresh({
  //     complete: function (res) {
  //       console.log(res, new Date())
  //     }
  //   })
  // },
  
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    var context = this;
    requestData((res)=>{
        this.setData({items:res});
    });
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})

function requestData(callback){
    wx.request({
      url:"http://c.m.163.com/nc/auto/list/5YWo5Zu9/0-20.html",
      header: {'Content-Type': 'application/json'},
      success: function(res){
        console.log(res.data)
        var news = res.data.list;
        callback(news);
      }
    })

}
