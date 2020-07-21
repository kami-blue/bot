const ms = require("minestats/JavaScript");
const Discord = require("discord.js");
const fs = require("graceful-fs");

module.exports.run = async (client, message, args) => {
    try {
        ms.init(args[0], 25565, function (result) {
            if (ms.online) {
                let statusEmbed = new Discord.MessageEmbed()
                    .setTitle(`Minecraft server status of ${ms.address} on port ${ms.port}: `)
                    .setDescription(
                        `
                    Server is running version ${ms.version} with ${ms.current_players} out of ${ms.max_players} players.
                    Message of the day: ${ms.motd}
                    Latency: ${ms.latency} ms.
                        `
                    )
                message.channel.send(statusEmbed);
            } else {
                message.channel.send(`Server is offline!`);
            }
        });
    }catch(err){
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
