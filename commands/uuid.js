const fetch = require('node-fetch');
const Discord = require("discord.js");
const fs = require("graceful-fs");

module.exports.run = async (client, message, args) => {
    if(isNaN(args[0]) || args[0].toLowerCase() === "undefined") return;
    try {
        let result;
        let part1, part2, part3, part4, part5;
        fetch(`https://api.mojang.com/users/profiles/minecraft/${args[0]}`)
            .then(response => response.json())
            .then(data => {
                result = JSON.parse(JSON.stringify(data));
                //If it works then dont touch it lul
                part1 = result.id.slice(0, 8);
                part2 = result.id.slice(8, 12);
                part3 = result.id.slice(12, 16);
                part4 = result.id.slice(16, 20);
                part5 = result.id.slice(20, 32);
                let uuidEmbed = new Discord.MessageEmbed()
                    .setTitle('UUID of player ' + result.name)
                    .setThumbnail(`https://crafatar.com/renders/body/${result.id}?overlay`)
                    .setDescription(part1 + '-' + part2 + '-' + part3 + '-' + part4 + '-' + part5)
                    .setColor(client.colors.kamiblue);
                message.channel.send(uuidEmbed);
            })
            .catch(err => message.channel.send("Error: invalid username!"))
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
