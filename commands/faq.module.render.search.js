const Discord = require("discord.js");
const fs = require("graceful-fs");

module.exports.run = async (client, message, args) => {
    if ((message.channel.id == "724349410858893372") || (message.channel.id == "722436626248237076")) {
        let FaqSearchRu = new Discord.MessageEmbed()
        .setTitle("Search")
        .setDescription("\n**Категория**: Render\n**Описание**: Подсвечивать выбранные блоки в мире")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqSearchRu)
    } else {
        let FaqSearchEn = new Discord.MessageEmbed()
        .setTitle("Search")
        .setDescription("\n**Category**: Render\n**Description**: Highlights blocks in the world")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqSearchEn)
    }
};

module.exports.config = {
    name: "faq/search",
    aliases: [],
    use: "faq/search",
    description: "What is Search?",
    page: -1                                       
};