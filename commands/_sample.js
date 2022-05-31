/*CMD
  command: /sample
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let options = { disable_web_page_preview: true };
Bot.sendMessage("Cardano.org", options);
let api_token = { switch_pm_parameter: true,  };
// do anything what you want with this params
bot.answerInlineQuery(api_token, {switch_pm_text:'test',switch_pm_parameter:'x'});
