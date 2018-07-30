const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
const replies = ["It is certain",
"It is decidedly so",
    "Without a doubt",
"Yes, definitely",
    "You may rely on it",
"As I see it, yes",
    "Most likely",
"Outlook good",
    "Yes",
"Signs point to yes",
    "Reply hazy try again",
"Ask again later",
    "Better not tell you now",
"Cannot predict now",
    "Concentrate and ask again",
"Don't count on it",
    "My reply is no",
"My sources say no",
    "Outlook not so good",
"Very doubtful"];
    message.replytext = Math.floor((Math.random() * replies.length) + 0);
return message.reply(replies[message.replytext]);
}

exports.help = {
  name: '8ball',
  description: 'you know',
  usage: '8ball [question]'
};