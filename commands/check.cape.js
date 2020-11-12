const Discord = require('discord.js');
const fetch = require('node-fetch');

/**
 * @module cape
 * @author vypr-ysl
 */

module.exports.run = async (client, message, args) => {

    try {

        const KamiCapeUUID = args[0]

        if (!KamiCapeUUID) return message.channel.send('Please provide a valid UUID!')

        const uuid = await fetch(`https://raw.githubusercontent.com/kami-blue/assets/assets/assets/capes.json`)
            .then(res => res.json())

        const mcUsername = await fetch(`https://sessionserver.mojang.com/session/minecraft/profile/${KamiCapeUUID}`)
            .then(res => res.json())

        var UUID_Cape = uuid.filter(UUID => UUID["uuid"] == KamiCapeUUID)
        var Cape_Type = UUID_Cape[0]["url"]

        if (Cape_Type == 'https://raw.githubusercontent.com/kami-blue/assets/assets/assets/capes/cape13.png') {
            let Cape = "Contributor Cape"

            const embed = new Discord.MessageEmbed()
                .setTitle(`${mcUsername["name"]}'s KAMI-Blue Cape:`)
                .setDescription(`\`UUID:\` ${UUID_Cape[0]["uuid"]}\n\`Cape Type:\` **${Cape}**`)
                .setThumbnail(UUID_Cape[0]["url"])
                .setColor(0x9b90ff)
                .setFooter('カミレッドー！', 'https://avatars2.githubusercontent.com/u/63122879?s=280&v=4')
                .setTimestamp()

            message.channel.send(embed)

        } else if (Cape_Type == "https://raw.githubusercontent.com/kami-blue/assets/assets/assets/capes/cape10.png") {
            let Cape = "Donator Cape"

            const embed = new Discord.MessageEmbed()
                .setTitle(`${mcUsername["name"]}'s KAMI-Blue Cape:`)
                .setDescription(`\`UUID:\` ${UUID_Cape[0]["uuid"]}\n\`Cape Type:\` **${Cape}**`)
                .setThumbnail(UUID_Cape[0]["url"])
                .setColor(0x9b90ff)
                .setFooter('カミレッドー！', 'https://avatars2.githubusercontent.com/u/63122879?s=280&v=4')
                .setTimestamp()

            message.channel.send(embed)
        }
       } catch (err) {
        message.channel.send("`❌` Invalid UUID, or user does not have a KAMI-Blue Cape!");
    }
}



module.exports.config = {
    name: "cape",
    aliases: ["cape"],
    use: "cape",
    description: "Check your cape on the KAMI-Blue client!",
    state: "gamma",
    page: 4
}