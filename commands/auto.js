/*CMD
  command: auto
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

var withdrawn = Bot.getProperty("totalWithdrawn");
let options = { disable_web_page_preview: true } 
withdrawn = parseFloat(withdrawn);
var inUSD = data.message * 0.80 
var reflink=Libs.ReferralLib.currentUser.getRefLink("Cardanonetwork_bot","Bot");
var wallet = User.getProperty("PaytmWallet");
var balance = Libs.ResourcesLib.userRes("balance")
if(data.message < 1){
Bot.sendMessage("_❌ Minimum withdraw 1_")
}else{
if(data.message > balance.value()){
Bot.sendMessage("_❌ Maximum withdraw "+balance.value().toFixed(6)+" ADA_")
}else{
Bot.sendMessage("*✅ Withdrawal sent\n\n💳 Transaction Details :\n 💰Amount : "+data.message+" ADA\n💼 wallet : "+wallet+"\n Payment Channel: @cardanoairdropevent\n\n Make sure to follow our partner to confirm your withdrawal🐦 https://www.twitter.com/AirdropAlertsYT*", options)
balance.add(-data.message)
Api.sendMessage({ 
chat_id: "@cardanoairdropevent", 
disable_web_page_preview: true, 
text: "*🔰Cardano (ADA) Airdrop Event\n📆You will receive your airdrop on May 31 2022, 12:00 UTC\n\n🔋 New Approved Withdrawal\n▪️ Status : Confirmed\n▪️User🆔 :* "+user.telegramid+"\n*▪️ Amount :* "+data.message+ "ADA \n*▪️ Value :* "+inUSD+"$\n\n*♦️ Paid Address ♦️\n *"+wallet+"*\nJoin me📌"+reflink+"*" ,
parse_mode: "Markdown"})
}
}
