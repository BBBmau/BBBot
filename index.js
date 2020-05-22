const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'NzEzMjU2NjU4NjYyNTg4NDE4.XsdhlA.SsP8lrvz5NPkOp0hE_9JXb_qRgE';

bot.on('ready', () =>{
    console.log('This bot is online!')
})

bot.on('message', msg=>{
    if(msg.content === "$BBB"){
        msg.reply('BIG BALLER BRAND');
    }
})

bot.login(token);
