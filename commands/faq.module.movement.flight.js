const Discord = require("discord.js");
const fs = require("graceful-fs");

module.exports.run = async (client, message, args) => {
    if ((message.channel.id == "724349410858893372") || (message.channel.id == "722436626248237076")) {
        let FaqFlightRu = new Discord.MessageEmbed()
        .setTitle("Flight")
        .setDescription("\n**Категория**: Movement\n**Описание**:  Позволяет вам летать")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqFlightRu)
    } else {
        let FaqFlightEn = new Discord.MessageEmbed()
        .setTitle("Flight")
        .setDescription("\n**Category**: Movement\n**Description**: Makes the player fly")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqFlightEn)
    }
};

module.exports.config = {
    name: "faq/flight",
    aliases: [],
    use: "faq/flight",
    description: "What is Flight?",
    page: 6                                       
};