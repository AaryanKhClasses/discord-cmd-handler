// init
const Discord = require('discord.js')
const client = new Discord.Client()
const config = require('./config.json')

//export loading
const loadCommands = require('./commands/load-commands.js')

//event ready
client.on('ready', () => {
    console.log('The Bot is Online!')
    client.user.setActivity(`${config.prefix}help`, {type: 'LISTENING'}).catch(console.error)

    loadCommands(client)
})

//login
client.login(config.token)