const Discord = require('discord.js');
const bot = new Discord.Client();

const PREFIX = '.';

bot.on('ready', () =>{
    console.log('This bot is online!');
})

bot.on('message', msg=>{
    
    let args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0]){
        case 'ping':
            message.channel.sendMessage('pong!')    
            break;
        case 'info':
            if(args[1] === 'version'){
                message.channel.sendMessage('imgay');
            }else{
                message.channel.sendMessage('Invalid Args')
            }
            break;
    }
})

bot.login(process.env.token);