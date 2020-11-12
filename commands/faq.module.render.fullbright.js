const Discord = require("discord.js");
const fs = require("graceful-fs");

module.exports.run = async (client, message, args) => {
    if ((message.channel.id == "724349410858893372") || (message.channel.id == "722436626248237076")) {
        let FaqFullBrightRu = new Discord.MessageEmbed()
        .setTitle("FullBright")
        .setDescription("\n**Категория**: Render\n**Описание**: Делает всё светлее!")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqFullBrightRu)
    } else {
        let FaqFullBrightEn = new Discord.MessageEmbed()
        .setTitle("FullBright")
        .setDescription("\n**Category**: Render\n**Description**: Makes everything brighter!")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqFullBrightEn)
    }
};

module.exports.config = {
    name: "faq/fullbright",
    aliases: [],
    use: "faq/fullbright",
    description: "What is FullBright?",
    page: -1                                       
};