const fetch = require('node-fetch');
const Discord = require("discord.js");
const fs = require("graceful-fs");

module.exports.run = async (client, message, args) => {
    try {
        const response = await fetch(`https://api.mojang.com/users/profiles/minecraft/${args[0]}`);
        const result = await JSON.parse(response);

        let uuidEmbed = new Discord.MessageEmbed()
                .setTitle(`UUID of player ${result.name}: `)
                .setDescription(result.id)
                .setColor(client.colors.kamiblue);

        message.channel.send(uuidEmbed);
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
