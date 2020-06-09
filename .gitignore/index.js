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

bot.on('guildmemberAdd', function (member){
    member.createDM().then(function (channel){
        return channel.send('Bienvenue sur le serveur ' + member.displayName)
        .catch(console.error)
    })

})


bot.login(process.env.TOKEN)
