/*CMD
  command: 🎁 Bonus
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

var reflink=Libs.ReferralLib.currentUser.getRefLink("cardanonetwork_bot","Bot");
function canRun(){
var last_run_at = User.getProperty("last_run_at");
if(!last_run_at){ return true }

var minutes = (Date.now() - last_run_at) /1000/60;

var minutes_in_day = 24 * 60
var next = minutes_in_day - minutes
var wait_hours = Math.floor(next / 60)
next -= wait_hours * 60
var wait_minutes = Math.floor(next)
var seconds = Math.floor((next - wait_minutes) * 60)
if (minutes < minutes_in_day) {
let options = { disable_web_page_preview: true }
Bot.sendMessage("*📛 You have already received your bonus today*\n\n▶️ Come Back After ⏳ "+wait_hours+" h "+wait_minutes+" m " 
+seconds+ "s" );
Bot.sendMessage("*Share your link to receive 30 ADA▶️"+reflink+"*", options)
return
}
return true;
}

if(!canRun()){ return }
User.setProperty("last_run_at", Date.now(), "integer");
let referral = Libs.ResourcesLib.userRes("referral")
referral.add(0)
let balance = Libs.ResourcesLib.userRes("balance")
balance.add(20)
Bot.sendMessage(
"*🎁Congrats , you Received 20 ADA*"
)

