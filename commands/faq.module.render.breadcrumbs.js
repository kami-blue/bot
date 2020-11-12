const Discord = require("discord.js");
const fs = require("graceful-fs");

module.exports.run = async (client, message, args) => {
    if ((message.channel.id == "724349410858893372") || (message.channel.id == "722436626248237076")) {
        let FaqBreadcrumbsRu = new Discord.MessageEmbed()
        .setTitle("Breadcrumbs")
        .setDescription("\n**Категория**: Render\n**Описание**: Рисует ваш путь сзади при движении")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqBreadcrumbsRu)
    } else {
        let FaqBreadcrumbsEn = new Discord.MessageEmbed()
        .setTitle("Breadcrumbs")
        .setDescription("\n**Category**: Render\n**Description**: Draws a tail behind as you move")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqBreadcrumbsEn)
    }
};

module.exports.config = {
    name: "faq/breadcrumbs",
    aliases: [],
    use: "faq/breadcrumbs",
    description: "What is Breadcrumbs?",
    page: -1                                       
};