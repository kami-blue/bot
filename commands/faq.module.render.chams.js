const Discord = require("discord.js");
const fs = require("graceful-fs");

module.exports.run = async (client, message, args) => {
    if ((message.channel.id == "724349410858893372") || (message.channel.id == "722436626248237076")) {
        let FaqChamsRu = new Discord.MessageEmbed()
        .setTitle("Chams")
        .setDescription("\n**Категория**: Render\n**Описание**: Видеть сущности сквозь стены")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqChamsRu)
    } else {
        let FaqChamsEn = new Discord.MessageEmbed()
        .setTitle("Chams")
        .setDescription("\n**Category**: Render\n**Description**: See entities through walls")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqChamsEn)
    }
};

module.exports.config = {
    name: "faq/chams",
    aliases: [],
    use: "faq/chams",
    description: "What is Chams?",
    page: -1                                       
};