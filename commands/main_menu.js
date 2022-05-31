/*CMD
  command: main_menu
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var user = User.getProperty("status");
if (user=="member" | user =="administrator" | user=="creator"){
Bot.sendKeyboard("💰 Balance\n👫 Referral,🎁 Bonus,💲Withdraw,\n⚙️Set wallet,👥Referred User,📞Support", "*🔰Cardano (ADA) Aidrop Event*\n_Cardano is a blockchain platform built on the groundbreaking Ouroboros proof-of-stake consensus protocol, and developed using the Haskell programming language: a functional programming language that enables Cardano to pursue evidence-based development, for unparalleled security and stability._\n\n*Benefits*\n 1.Low cost\n 2.Fast\n 3.Decentralized and unstoppable. \n\nRead more about Cardano.org\n\n *Step by Step guide*\n*Step1:* Install trustwallet.com\n*Step2:* Submit your TrustWallet address here\n*Step3:* Submit withdrawal request and receive airdrop on distribution date\n\n*🔐 Distribution date: 31 MAY 2022*\n\n_⚠️ You will receive your airdrop on the distribution date automatically. Please make sure you are staying in our Telegram Channel and Following twitter, checks will be made before airdrop is disbursed to your wallet._ ", options)
}
if (user=="left"){
Bot.runCommand("/start");
}
