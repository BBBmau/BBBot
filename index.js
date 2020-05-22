const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'TOKEN_#';

bot.on('ready', () =>{
    console.log('This bot is online!')
})

bot.on('message', msg=>{
    if(msg.content === "$BBB"){
        msg.reply('BIG BALLER BRAND');
    }
})

bot.login(token);
