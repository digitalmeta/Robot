/*CMD
  command: Change2
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: SEND THE AMOUNT
  keyboard: 
  aliases: 
CMD*/

var admin = Bot.getProperty("admin"+user.telegramid)
if (user.telegramid == admin){
var ser = User.getProperty("TgidB")
var bal = Libs.ResourcesLib.anotherUserRes("balance", ""+ser+"")
bal.add(+data.message)
Bot.sendMessageToChatWithId(""+ser+"", "You have just received "+message+" from admin")
Bot.sendMessage("Balance of "+message+" Added to "+ser+"")
}else{
Bot.sendMessage("You Are Not An Admin")
}
