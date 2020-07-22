const fetch = require('node-fetch');
const Discord = require("discord.js");
const fs = require("graceful-fs");

module.exports.run = async (client, message, args) => {
        try {
            let result;
            fetch(`https://api.mojang.com/users/profiles/minecraft/${args[0]}`)
                .then(response => response.json())
                .then(data => {
                    result = JSON.parse(JSON.stringify(data));
                    let uuidEmbed = new Discord.MessageEmbed()
                        .setTitle('UUID of player ' + result.name)
                        .setThumbnail(`https://crafatar.com/renders/body/${result.id}`)
                        .setDescription(result.id)
                        .setColor(client.colors.kamiblue);
                    message.channel.send(uuidEmbed);
                })
                .catch(err => console.error(err))
        } catch (err) {
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
