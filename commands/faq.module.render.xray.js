const Discord = require("discord.js");
const fs = require("graceful-fs");

module.exports.run = async (client, message, args) => {
    if ((message.channel.id == "724349410858893372") || (message.channel.id == "722436626248237076")) {
        let FaqXRayRu = new Discord.MessageEmbed()
        .setTitle("XRay")
        .setDescription("\n**Категория**: Render\n**Описание**: Смотреть нужные блоки через другие")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqXRayRu)
    } else {
        let FaqXRayEn = new Discord.MessageEmbed()
        .setTitle("XRay")
        .setDescription("\n**Category**: Render\n**Description**: See through common blocks")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqXRayEn)
    }
};

module.exports.config = {
    name: "faq/xray",
    aliases: [],
    use: "faq/xray",
    description: "What is XRay?",
    page: 6                                       
};