const Discord = require("discord.js");
const fs = require("graceful-fs");

module.exports.run = async (client, message, args) => {

    const bigRat = new Discord.messageEmbed()
    .setColor(BLACK)
    .setTitle("BIGRAT")
    .setImage("https://bigrat.monster/")

    message.channel.send(bigRat)
}

module.exports.config = {
    name: "bigrat",
    aliases: ["rat"],
    use: "bigrat",
    description: "BigRat",
    state: "gamma",
    page: 2
};
