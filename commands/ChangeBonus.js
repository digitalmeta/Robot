/*CMD
  command: ChangeBonus
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 📥 Input The Bonus Value
  keyboard: 
  aliases: 
CMD*/

var admin = 
Bot.getProperty("admin"+user.telegramid)
if(user.telegramid == admin){
Bot.setProperty("Bonus", message, "string")
Bot.sendMessage("Bonus Set To "+message+"")
}else{
Bot.sendMessage("You Are Not An Admin")
}
