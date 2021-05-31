const mongo = require('../mongo')
const prefixModel = require('../models/custom-prefix-model')
const { prefix: globalPrefix } = require('../config.json')
const guildPrefixes = {}

let recentlyRan = []

module.exports = (client, commandOptions) => {
    let {
        commands,
        cooldown = -1,
        callback
    } = commandOptions

    if(!commands) { return }
    if(typeof commands === 'string') { commands = [commands] }
    console.log(`Registering command "${commands[0]}"`) //u can delete this

    client.on('message', async(message) => {
        const { member, content, guild, channel } = message
        const prefix = guildPrefixes[guild.id] || globalPrefix

        for(const alias of commands){
            const command = `${prefix}${alias.toLowerCase()}`

            if(
                content.toLowerCase().startsWith(`${command}`) ||
                content.toLowerCase() === command
            ){
                let cooldownString = `${guild.id}-${member.id}-${commands[0]}`
                console.log('cooldownString: ', cooldownString) //u can delete this

                if(cooldown > 0 && recentlyRan.includes(cooldownString)){
                    message.reply('You cannot use that command so soon, please wait.') //u can modify this
                    return
                }

                const arguments = content.split(/[ ]+/)
                arguments.shift()

                if(cooldown > 0){
                    recentlyRan.push(cooldownString)
                    setTimeout(() => {
                        console.log('BEFORE: ', recentlyRan) // u can delete this
                        recentlyRan = recentlyRan.filter((string) => {
                            return string !== cooldownString
                        })

                        console.log('AFTER: ', recentlyRan) // u can delete this
                    }, 1000 * cooldown)
                }

                callback(client, message, arguments, arguments.join(' '))
                return

            }
        }
    })
}

module.exports.updateCache = (guildId, newPrefix) => {
    guildPrefixes[guildId] = newPrefix
}

module.exports.loadPrefixes = async(client) => {
    await mongo().then(async(mongoose) => {
        try{
            for(const guild of client.guilds.cache){
                const guildId = guild[1].id

                const result = await prefixModel.findOne({ _id: guildId })
                guildPrefixes[guildId] = result ? result.prefix : globalPrefix
            }

            console.log(guildPrefixes) // u can delete this
        } finally{
            mongoose.connection.close()
        }
    })
}