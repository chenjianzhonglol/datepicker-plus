# datepicker-plus
可选择公历，农历日期；可选择隐藏年份；

使用方法：
1.把项目根目录下的datepicker-plus文件夹放到小程序根目录；
2.在需要调用该组件的page里，以项目里pages/index页面为例，配置.json文件声明组件，在.wxml里只需要添加<datepicker-plus bind:submit='submit' showDatePickerPlus='{{show}}'></datepicker-plus>标签；
3.显示和隐藏组件只需要控制showDatePickerPlus属性，选择日期点击确定的事件由submit接受。
