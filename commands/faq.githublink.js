const Discord = require("discord.js");
const fs = require("graceful-fs");

module.exports.run = async (client, message, args) => {
    if ((message.channel.id == "724349410858893372") || (message.channel.id == "722436626248237076")) {
        let githublinkRU = new Discord.MessageEmbed()
        .setTitle(`[ Оффициальные репозитории KAMI Blue ](https://github.com/kami-blue)`)
        .setColor(client.colors.kamiblue)
        message.channel.send(githublinkRU)
    } else {
        let githublinkEN = new Discord.MessageEmbed()
        .setTitle(`[Official repositories KAMI Blue](https://github.com/kami-blue)`)
        .setColor(client.colors.kamiblue)
        message.channel.send(githublinkEN)
    }
};

module.exports.config = {
    name: "github",
    aliases: [],
    use: "github",
    description: "KAMI Blue github link",
    state: "gamma",
    page: 2
};
