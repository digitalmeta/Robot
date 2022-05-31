/*CMD
  command: /start
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var button = [{ title : "✅CHECK" , command : "✅CHECK"}]
Bot.sendInlineKeyboard(button ,  "*Join and follow partner channels before proceeding: \n\n➤ @airdrop_groupalert\n\n➤ @airdrop_announcementsfree\n\n➤@cardanoairdropevent \n\n☑️ Done Subscribed! Click ✅CHECK*")
function hello(message) {
var greetings = ""

Bot.sendMessage(greetings + message)
}

function doTouchOwnLink() {
Bot.sendMessage("*You're trying to invite your self!*")
}

function doAttracted(channel) {
hello("Referral: " + channel)
}

function doAtractedByUser(refUser) {
hello("")
var balance = Libs.ResourcesLib.anotherUserRes("balance", refUser.telegramid)
balance.add(30)
Bot.sendMessageToChatWithId(refUser.chatId, "*🏧 New Referral : +30 ADA*")
}

function doAlreadyAttracted(){
Bot.sendMessage("*You already started the Bot ❗️*");
}

var trackOptions = {
onTouchOwnLink: doTouchOwnLink,
onAttracted: doAttracted,
onAtractedByUser: doAtractedByUser,
onAlreadyAttracted: doAlreadyAttracted
}

Libs.ReferralLib.currentUser.track(trackOptions);
