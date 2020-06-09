const Discord = require('discord.js')
const bot = new Discord.Client()

bot.on('ready', function(){

    bot.user.setActivity('#084')
})
bot.on('message', function (message){
    if (message.content === '!doduo'){
        message.channel.send('#084')
    }
})

bot.login(process.env.TOKEN)
