//currently not working
const Discord = require("discord.js");
const fs = require("graceful-fs");

module.exports.run = async (client, message, args) => {
    try {
        ServerStats(args[0]).then(info => {
            let final = JSON.parse(info);
            let statusEmbed = new Discord.MessageEmbed()
                .setTitle(`Minecraft server status of ${args[0]}: `)
                .setDescription(`
                    Message Of The Day: ${final.motd}
                    Online Players: ${final.players.now}
                    Max Players: ${final.players.max}
                    Version: ${final.server.name}
                `)
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
