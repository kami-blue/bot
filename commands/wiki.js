const Discord = require("discord.js");
const fs = require("fs");

module.exports.run = async (client, message, args) => {
    if (!args[0]) {
        message.channel.send("Please enter a question query!");
        return;
    }

    let WikiEmbed = new Discord.MessageEmbed()
        .setTitle("Here you go!")
        .setDescription(`[ Click <3 ](https://wikipedia.org/wiki/${args.join("_")})`)
        .setColor(client.colors.kamiblue);
    message.channel.send(WikiEmbed);
};

module.exports.help = {
    name: "wiki",
    aliases: [],
    use: "wiki",
    description: "Search something in wikipedia!",
    state: "gamma",
    page: 1
};