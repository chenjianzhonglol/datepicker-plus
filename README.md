# datepicker-plus
可选择公历，农历日期；可选择隐藏年份；

使用方法：
1.把项目根目录下的datepicker-plus文件夹放到小程序目录中；
2.在需要调用该组件的page里，以项目里pages/index页面为例，配置.json文件声明组件
{
  "usingComponents": {
    "datepicker-plus": "/datepicker-plus/index"
  }
}
3.在.wxml里调用组件<datepicker-plus bind:submit='submit' showDatePickerPlus='{{show}}'></datepicker-plus>

参数：
showDatePickerPlus：true/false，显示或隐藏组件
initDate：'2018-02-12'，初始化公历日期
submit：返回值 {dateStr: 选择的日期字符串, 'showYear': 是否选择年份, 'dateType': 公农历}

