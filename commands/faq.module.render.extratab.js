const Discord = require("discord.js");
const fs = require("graceful-fs");

module.exports.run = async (client, message, args) => {
    if ((message.channel.id == "724349410858893372") || (message.channel.id == "722436626248237076")) {
        let FaqExtraTabRu = new Discord.MessageEmbed()
        .setTitle("ExtraTab")
        .setDescription("\n**Категория**: Render\n**Описание**: Расширяет таблицу игроков")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqExtraTabRu)
    } else {
        let FaqExtraTabEn = new Discord.MessageEmbed()
        .setTitle("ExtraTab")
        .setDescription("\n**Category**: Render\n**Description**: Expands the player tab menu")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqExtraTabEn)
    }
};

module.exports.config = {
    name: "faq/extratab",
    aliases: [],
    use: "faq/extratab",
    description: "What is ExtraTab?",
    page: -1                                       
};