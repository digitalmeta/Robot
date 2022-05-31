/*CMD
  command: 📞Support
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

let Ask = User.getProperty("Ask")
var button = [{ title : "✏️Write me" , command : "Ask" }]
Bot.sendInlineKeyboard(button , "❓ Are you asking about when you will receive your withdrawal? \n All airdrop will be automatically sent to your wallet on the distribution date. Do not leave the must-join channels to be eligible for the airdrop.\n\n❓ How to change your wallet address \n Use /setwallet to change it, please complete the tasks before the distribution date. Airdrop will be automatically sent after the date.\n\n If you still need to contact us, please press the button below to send us a message. 📫 Last Question:* "+Ask+"")
