const Discord = require("discord.js");
const fs = require("graceful-fs");

module.exports.run = async (client, message, args) => {
    if ((message.channel.id == "724349410858893372") || (message.channel.id == "722436626248237076")) {
        let FaqColourSignRu = new Discord.MessageEmbed()
        .setTitle("ColourSign")
        .setDescription("\n**Категория**: Misc\n**Описание**: Позволяет в игре изменять текст на табличках")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqColourSignRu)
    } else {
        let FaqColourSignEn = new Discord.MessageEmbed()
        .setTitle("ColourSign")
        .setDescription("\n**Category**: Misc\n**Description**: Allows ingame colouring of text on signs")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqColourSignEn)
    }
};

module.exports.config = {
    name: "faq/coloursign",
    aliases: [],
    use: "faq/coloursign",
    description: "What is ColourSign?",
    page: 6
};