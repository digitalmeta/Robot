/*CMD
  command: SetValueCode
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 📥 Input The Code Value
  keyboard: 
  aliases: 
CMD*/

var admin = Bot.getProperty("admin"+user.telegramid)
if (user.telegramid == admin){
var tt = options.myData
Bot.sendMessage("*Value for the code: *" + tt + "* has been set*")
Bot.setProperty(tt, message,"integer")
}else{
Bot.sendMessage("YOU ARE NOT ADMIN")
}var admin = Bot.getProperty("admin"+user.telegramid)
if (user.telegramid == admin){
var tt = options.myData
Bot.sendMessage("*Value for the code: *" + tt + "* has been set*")
Bot.setProperty(tt, message,"integer")
}else{
Bot.sendMessage("YOU ARE NOT ADMIN")
}
