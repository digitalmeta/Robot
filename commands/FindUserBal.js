/*CMD
  command: FindUserBal
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Send His Telegram id
  keyboard: 
  aliases: 
CMD*/

var admin = 
Bot.getProperty("admin"+user.telegramid)
if(user.telegramid == admin){
var b = 
Libs.ResourcesLib.anotherUserRes("balance",message)
Bot.sendMessage("*Balance Of User "+message+" is* "+b.value())
}else{
Bot.sendMessage("You Are Not An Admin")
}
