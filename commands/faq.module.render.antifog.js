const Discord = require("discord.js");
const fs = require("graceful-fs");

module.exports.run = async (client, message, args) => {
    if ((message.channel.id == "724349410858893372") || (message.channel.id == "722436626248237076")) {
        let FaqAntiFogRu = new Discord.MessageEmbed()
        .setTitle("AntiFog")
        .setDescription("\n**Категория**: Render\n**Описание**: Отключает туман")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqAntiFogRu)
    } else {
        let FaqAntiFogEn = new Discord.MessageEmbed()
        .setTitle("AntiFog")
        .setDescription("\n**Category**: Render\n**Description**: Disables or reduces fog")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqAntiFogEn)
    }
};

module.exports.config = {
    name: "faq/antifog",
    aliases: [],
    use: "faq/antifog",
    description: "What is AntiFog?",
    page: -1                                       
};