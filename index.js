const Discord = require('discord.js');
const bot = new Discord.Client();
const { Client, MessageAttachment } = require('discord.js');

const token = 'NzEzMjU2NjU4NjYyNTg4NDE4.XseMQw.rB15ERQirpNoVZhPLP9fgQBHoWU';

bot.on('ready', () =>{
    console.log('This bot is online!')
})

bot.on('message', msg=> {
    if(msg.content === "$Hello"){
        msg.channel.send(`${msg.author}, Are you a Big Baller?`);
    }
}
)

bot.on('message', msg=> {
    if(msg.content === "$Help"){
    const BBB = new MessageAttachment('https://i.imgur.com/aqzPoH8.jpg')

        msg.channel.send(`Big Ballers don't need HELP` , BBB );
    }
}
)

bot.on('message', msg => {
    // If the message is "what is my avatar"
    if (msg.content === '$Avatar') {
      // Send the user's avatar URL
      msg.reply(msg.author.displayAvatarURL());
    }
  });

  bot.on('message', msg => {
    // If the message is '!rip'
    if (msg.content === '$Drew') {
      // Create the attachment using MessageAttachment
      const attachment =  new MessageAttachment('https://i.imgur.com/UKQPMt2.png');
      // Send the attachment in the message channel
      msg.channel.send(`${msg.author}, Yikes!`, attachment);
    }
  });

  bot.on('message', msg=>{
    if(msg.content === "$N"){
        msg.reply('NIGGER.');
    }
}
)

bot.on('message', msg=>{
    if(msg.content === "$BBB"){
        msg.reply('BIG BALLER BRAND');
    }
}
)

bot.login(token);
