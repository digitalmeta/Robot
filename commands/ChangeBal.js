/*CMD
  command: ChangeBal
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: - Send his telegram id
  keyboard: 
  aliases: 
CMD*/

var admin = Bot.getProperty("admin"+user.telegramid)
if(user.telegramid == admin ){
User.setProperty("TgidB", message, "string")
Bot.runCommand("Change2")
}else{
Bot.sendMessage("You Are Not An Admin")
}
