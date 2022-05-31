/*CMD
  command: 👨‍💻Admin Panel
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var admin = Bot.getProperty("admin"+user.telegramid)
if (user.telegramid == admin){
var button = [
[{title: "🎙️Broadcast", command: "Broadcast"}],[{title: "⚠️Ban", command: "Ban"},{title: "🔓Unban", command: "UnBan"}],[{title:"🕹️Change Balance", command: "ChangeBal"}],[{title: "♦️Make Card", command: "MakeGift"},{title: "📤Send Message", command: "SendMsg"}],[{title: "💡Change Start Channel",command: "ChangeSChannel"}],[{title:"➕Add Admin", command: "AddAdmin"},{title: "➖ Admin", command: "RemoveAdmin"}],[{title:"📤Send Bot", command: "SendBot"}],[{title: "🎁Change Bonus", command: "ChangeBonus"}],[{title: "💠Change Payment Channel",command: "ChangePChannel"}],[{title: "💼Find User Balance", command: "FindUserBal"}],[{title: "💰 Minimum Withdraw", command: "MinWith"}],[{title: "⚙️Set Refer Bonus", command: "ReferBonus"}]
];
Bot.sendInlineKeyboard(button, "Welcome ["+user.first_name+"](tg://user?id="+user.telegramid+")\n\n🌐Coded By [Meraj](https://t.me/Meraj4870)")
}else{
Bot.sendMessage("You Are Not An Admin")
}

