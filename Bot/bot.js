const { Telegraf } = require("telegraf");
const TOKEN = "6596372383:AAHQWDvOkot3doQSCzT2laKU9jvyeFfunUo";
const bot = new Telegraf(TOKEN);

const web_link = "https://suleymanmyradov.github.io/durger/";

bot.start((ctx) =>
  ctx.reply("Welcome :)))))", {
    reply_markup: {
      keyboard: [[{ text: "web app", web_app: { url: web_link } }]],
    },
  })
);

bot.launch();
