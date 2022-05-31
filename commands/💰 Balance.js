/*CMD
  command: 💰 Balance
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let options = { disable_web_page_preview: true }
var wallet = User.getProperty("PaytmWallet")
var reflink=Libs.ReferralLib.currentUser.getRefLink("cardanonetwork_bot","Bot");
var balance = Libs.ResourcesLib.userRes("balance")
Bot.sendMessage("*🤴 User : "+user.first_name+"\n\n💰 Balance : "+balance.value().toFixed(2)+"ADA\n\n💼 Wallet: "+wallet+" \n\n🔗 Referral Link ⬇️\n"+reflink+"\n\nRefer And Earn More!*", options)
