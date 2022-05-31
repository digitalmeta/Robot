/*CMD
  command: /refCount
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let options = { disable_web_page_preview: true }
var reflink=Libs.ReferralLib.currentUser.getRefLink("cardanonetwork_bot","Bot");
function getRefCount(userId){ 
  if(!userId){ userId = user.id } 
  var refsCount = User.getProperty({ 
    name: 'REFLIB_' + 'refsCount', 
    user_id: userId 
  }); 
 
  if(!refsCount){ refsCount = 0 }   
  return refsCount; 
} 
 
Bot.sendMessage("*👫Your Referral Count :*" + getRefCount())
Bot.sendMessage("*⛔️ Per Referral : 30ADA \n\n🔗 Referral Link ⬇️\n"+reflink+"*", options);
