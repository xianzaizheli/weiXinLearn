// 云函数入口文件
const cloud = require('wx-server-sdk')

//初始化云函数
cloud.init()

// 云函数入口函数
// event事件函数，可以接受传递的参数 + 后端自动注入的小程序用户的 openid 和小程序的 appid
//context上下文对象，调用信息和运行状态
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  return {
    event,
    context,
    openid: wxContext.OPENID,
    appid: wxContext.APPID,
    unionid: wxContext.UNIONID,
    sum: event.a + event.b,
  }
}