const Discord = require("discord.js");
const fs = require("graceful-fs");

module.exports.run = async (client, message, args) => {
    if ((message.channel.id == "724349410858893372") || (message.channel.id == "722436626248237076")) {
        let FaqAutoFeetPlaceRu = new Discord.MessageEmbed()
        .setTitle("AutoFeetPlace")
        .setDescription("\n**Категория**: Combat\n**Описание**: Кладет обсидиан вокруг ног")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqAutoFeetPlaceRu)
    } else {
        let FaqAutoFeetPlaceEn = new Discord.MessageEmbed()
        .setTitle("AutoFeetPlace")
        .setDescription("\n**Category**: Combat\n**Description**: Continually places obsidian around your feet")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqAutoFeetPlaceEn)
    }
};

module.exports.config = {
    name: "faq/autofeetplace",
    aliases: [],
    use: "faq/autofeetplace",
    description: "What is AutoFeetPlace?",
    state: "gamma",
    page: 6
};