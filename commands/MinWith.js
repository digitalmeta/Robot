/*CMD
  command: MinWith
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: INPUT MINIMUM WITHDRAWAL AMOUNT
  keyboard: 
  aliases: 
CMD*/

var admin = 
Bot.getProperty("admin"+user.telegramid)
if(user.telegramid == admin){
Bot.setProperty("MinW", message, "string")
Bot.sendMessage("Minimum Withdraw Set To "+message)
}else{
Bot.sendMessage("You Are Not An Admin")
}
