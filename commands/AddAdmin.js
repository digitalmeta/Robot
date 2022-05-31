/*CMD
  command: AddAdmin
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Send the Telegram id
  keyboard: 
  aliases: 
CMD*/

if (user.telegramid == owner.telegram.id){
Bot.setProperty("admin"+message+"",""+message+"","string")
Bot.sendMessageToChatWithId(""+message+"", "*Owner Made You Admin*")
Bot.sendMessage(message+" Promoted")
}else{
Bot.sendMessage("You have to Become Owner")
}
