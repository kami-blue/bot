const Discord = require("discord.js");
const fs = require("graceful-fs");

module.exports.run = async (client, message, args) => {
    if ((message.channel.id == "724349410858893372") || (message.channel.id == "722436626248237076")) {
        let FaqTracersRu = new Discord.MessageEmbed()
        .setTitle("Tracers")
        .setDescription("\n**Категория**: Render\n**Описание**: Рисовать линии к объектам")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqTracersRu)
    } else {
        let FaqTracersEn = new Discord.MessageEmbed()
        .setTitle("Tracers")
        .setDescription("\n**Category**: Render\n**Description**: Draws lines to other living entities")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqTracersEn)
    }
};

module.exports.config = {
    name: "faq/tracers",
    aliases: [],
    use: "faq/tracers",
    description: "What is Tracers?",
    page: 6                                       
};