const fetch = require('node-fetch');
const Discord = require("discord.js");
const fs = require("graceful-fs");

module.exports.run = async (client, message, args) => {
    try {
        let result;
        fetch(`https://api.mcsrvstat.us/2/${args[0]}`)
            .then(response => response.json())
            .then(data => {
                result = JSON.parse(JSON.stringify(data));
                let statusEmbed = new Discord.MessageEmbed()
                    .setTitle(`Server Status of ${result.hostname}: `)
                    .setDescription(`IP of Target Server: ${result.ip} \n Message of the Day: ${result.motd.clean[0]} ${result.motd.clean[1]} \n Online Players: ${result.players.online} \n Max Players: ${result.players.max} \n Version: ${result.version}`)
                    .setThumbnail(`https://api.mcsrvstat.us/icon/${args[0]}`)
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
