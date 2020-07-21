const ms = require("minestats");
const Discord = require("discord.js");
const fs = require("graceful-fs");

module.exports.run = async (client, message, args) => {
    try {
        ServerStats(args[0]).then(info => {
            let statusEmbed = new Discord.MessageEmbed()
                .setTitle(`Minecraft server status of ${args[0]}: `)
                .setDescription(info)
                .setColor(client.colors.kamiblue)
            message.channel.send(statusEmbed);
        })
    }catch(err){
        message.channel.send("Failed to get the info of server! Is server online?");
        console.error(err);
    }
}

module.exports.config = {
    name: "serverstat",
    aliases: ["stat"],
    use: "serverstat [server ip]",
    description: "Gets status of server",
    state: "gamma",
    page: 1
};
