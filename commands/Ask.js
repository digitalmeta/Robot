/*CMD
  command: Ask
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: *Send some message , this will directly send to admins*
  keyboard: 
  aliases: 
CMD*/

let Ask = User.getProperty("Ask")
User.setProperty("Ask" , data.message ,"string")
Bot.sendMessage("*📩 Message sent to admin as :* "+data.message+"\n\n_Please wait 1-2 business days to get response from admins_")
