// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const TeleBot = require("telebot");
//instantiate Telebot with our token got in the BtFather
  const bot = new TeleBot({
    token: "617229388:AAFtTHLGAvYgSdMOC7_KAVaeRgyAyh1nKp8",
});

export default (req, res) => {
  res.statusCode = 200
  res.json({ name: 'John Doe' })
  console.log(req.body);
  bot.sendMessage(req.body.message.chat.id, `Hello ${req.body.message.chat.username}`);

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
