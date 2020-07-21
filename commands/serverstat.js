const fetch = require('node-fetch');
const Discord = require("discord.js");
const fs = require("graceful-fs");

module.exports.run = async (client, message, args) => {
    try {
        let result;
        fetch(`https://mcapi.us/server/status?ip=${args[0]}`)
            .then(response => response.json())
            .then(data => {
                result = JSON.parse(JSON.stringify(data));
                let statusEmbed = new Discord.MessageEmbed()
                    .setTitle(`Server Status of ${args[0]}: `)
                    .setDescription(`
                    Server online? ${result.online}
                    Message of the day: ${result.motd}
                    Players online: ${result.players.now}
                    Max Players online: ${result.players.max}
                    Server version: ${result.server.name}
                    `)
                    .setColor(client.colors.kamiblue)
                message.channel.send(statusEmbed);
            })
            .catch(err => console.error(err))

    }catch(err){
        message.channel.send("Failed to get the info of server!");
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
