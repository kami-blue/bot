const {UsernameToUUID} = require("minestats");
const Discord = require("discord.js");
const fs = require("graceful-fs");

module.exports.run = async (client, message, args) => {
    try {
        UsernameToUUID(args[0]).then(info => {
            let final = JSON.parse(info);
            let statusEmbed = new Discord.MessageEmbed()
                .setTitle(`UUID of player ${args[0]}: `)
                .setDescription(final.name)
                .setColor(client.colors.kamiblue)
            message.channel.send(statusEmbed);
        })
    }catch(err){
        message.channel.send("Failed to get the uuid of player!");
        console.error(err);
    }
}

module.exports.config = {
    name: "uuid",
    aliases: [],
    use: "uuid [username]",
    description: "Gets uuid of that player",
    state: "gamma",
    page: 1
};
