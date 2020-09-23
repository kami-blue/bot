const Discord = require("discord.js");
const fs = require("graceful-fs");

module.exports.run = async (client, message, args) => {
    if ((message.channel.id == "724349410858893372") || (message.channel.id == "722436626248237076")) {
        let FaqAutoEatRu = new Discord.MessageEmbed()
        .setTitle("AutoEat")
        .setDescription("\n**Категория**: Player\n**Описание**: Автоматически есть при голодании")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqAutoEatRu)
    } else {
        let FaqAutoEatEn = new Discord.MessageEmbed()
        .setTitle("AutoEat")
        .setDescription("\n**Category**: Player\n**Description**: Automatically eat when hungry")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqAutoEatEn)
    }
};

module.exports.config = {
    name: "faq/autoeat",
    aliases: [],
    use: "faq/autoeat",
    description: "What is AutoEat?",
    page: -1                                       
};