Page({
  data: {
    show: false,
    dateInfo: {}
  },
  submit: function(e) {
    console.log(e);
    console.log('日期类型：' + e.detail.dateType)
    console.log('是否显示年份：' + e.detail.showYear)
    console.log('日期字符串：' + e.detail.dateStr)
    this.setData({
      dateInfo: e.detail
    })
  },
  showDatePickerPlus: function() {
    this.setData({
      show: true
    })
  },
  onLoad: function () {
    
  },
})
