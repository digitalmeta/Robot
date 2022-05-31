/*CMD
  command: ChangePChannel
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 📥 Input The Payout Channel
  keyboard: 
  aliases: 
CMD*/

var admin = 
Bot.getProperty("admin"+user.telegramid)
if(user.telegramid == admin){
Bot.setProperty("Payout", message, "string")
Bot.sendMessage("Payout Channel Set To "+message)
}else{
Bot.sendMessage("You Are Not An Admin")
}
