const emojiRegex = /^<:[\w\d]*:\d{18}>$/g

/**
 * @author vypr-ysl
 * @command stealmoji
 **/

module.exports.run = async (client, message, args) => {

    const guildTier = message.guild.premiumTier
    if (guildTier == 0) maxEmoji = 50
    if (guildTier == 1) maxEmoji = 100
    if (guildTier == 2) maxEmoji = 150
    if (guildTier == 3) maxEmoji = 250

    if(message.guild.emojis.cache.size > maxEmoji) return message.channel.send('Guild has reached the maximum number emoji slots.')

    if (!message.guild.members.cache.get(client.user.id).hasPermission("MANAGE_EMOJIS")) {
        return message.channel.send(`\`❌\` Bot is Missing Permissions: \`MANAGE_EMOJIS\``)
    }

    if(!message.guild.members.cache.get(message.author.id).hasPermission("MANAGE_EMOJIS")) {
        return message.channel.send(`\`❌\` You are Missing Permissions: \`MANAGE_EMOJIS\``)
    }

    if (!args[0]) {
        return message.channel.send(`Please provide an emoji to steal.`)
    }
    if (!args[0].match(emojiRegex)) {
        return message.channel.send(`Invalid Emoji!`)

    } else {
        try {
            let emoji = args[0].split(':').pop().toString().replace(/>/g, '')

            let name = args[1] || args[0].split(':')[1]
            message.guild.emojis.create(`https://cdn.discordapp.com/emojis/${emoji}.png`, name).then(r => {
                message.channel.send('\`✅\` Emoji stolen! <:a:' + r + '>')
            })
        } catch (e) {
            message.channel.send(`\`❌\` Could not steal Emoji.`)
        }
    }
}

module.exports.config = {
    name: "stealmoji",
    aliases: ["sm"],
    use: "stealmoji",
    description: "Steal an emoji from another server.",
    state: "gamma",
    page: 4
};
