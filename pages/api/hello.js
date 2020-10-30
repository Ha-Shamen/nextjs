// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const TelegramBot = require('node-telegram-bot-api');
import TELEBOT from 'TelegramBot'


export default (req, res) => {
  console.log('start bot');
  console.log(TELEBOT)
  console.log('start bot');
  
  console.log(req.body);
  //instantiate Telebot with our token got in the BtFather
  console.log('start bot');
//   const bot = new TeleBot({
//     token: "617229388:AAFtTHLGAvYgSdMOC7_KAVaeRgyAyh1nKp8",
//   });
//   console.log('bot started send message');
//   let reply = bot.sendMessage(req.body.message.chat.id, `Hello ${req.body.message.chat.username}`);
//   console.log(`sent message ${reply}`);
  res.statusCode = 200
  res.json({ name: 'John Doe' })
//   //instantiate Telebot with our token got in the BtFather
//   const bot = new TeleBot({
//     token: "617229388:AAFtTHLGAvYgSdMOC7_KAVaeRgyAyh1nKp8",
//   });

//   //our command
//   bot.on(["/start", "/hello"], (msg) => {
//     //all the information about user will come with the msg
//     console.log(msg);
//     bot.sendMessage(msg.from.id, `Hello ${msg.chat.username}`);
//   });

//   //start polling
//   bot.start();
}
