/*CMD
  command: ⚙️Set wallet
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: *Send Your Payment Wallet💼 *
  keyboard: 
  aliases: 
CMD*/

if(data.message.length > 6){
let wallet = User.getProperty("PaytmWallet")
User.setProperty("PaytmWallet" , data.message ,"string")
Bot.sendMessage("*✅ Payment wallet set to :* "+data.message+"\n\n _This will also be used in future withdrawals_")
}else{
Bot.sendMessage("*⚠️ Invalid Payment Wallet*")
}
