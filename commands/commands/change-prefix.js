const prefixModel = require("../../models/custom-prefix-model");
const mongo = require("../../mongo");
const commandBase = require('../command-base')

module.exports = {
    commands: 'prefix',
    cooldown: 60, //1 min cooldown(u can change this)
    callback: async(client, message, args) => {
        if(args[0]) {
            await mongo().then(async(mongoose) => {
                try {
                    const guildId = message.guild.guildId
                    const prefix = args[0]
    
                    await prefixModel.findOneAndUpdate({ _id: guildId }, { _id: guildId, prefix }, { upsert: true })
                    message.reply(`The prefix for the bot in this server is successfully changed to ${prefix}`) //u can modify this
                    commandBase.updateCache(guildId, prefix)
                } finally {
                    mongoose.connection.close()
                }
            })
        } else if(!args[0]) {
            return message.reply('Please specify a letter(or symbol) to set it the bot prefix for this server!')
        }
    }
}