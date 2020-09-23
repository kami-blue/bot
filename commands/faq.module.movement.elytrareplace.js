const Discord = require("discord.js");
const fs = require("graceful-fs");

module.exports.run = async (client, message, args) => {
    if ((message.channel.id == "724349410858893372") || (message.channel.id == "722436626248237076")) {
        let FaqElytraReplaceRu = new Discord.MessageEmbed()
        .setTitle("ElytraReplace")
        .setDescription("\n**Категория**: Movement\n**Описание**: Автоматически меняйте местами нагрудник и элитры.")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqElytraReplaceRu)
    } else {
        let FaqElytraReplaceEn = new Discord.MessageEmbed()
        .setTitle("ElytraReplace")
        .setDescription("\n**Category**: Movement\n**Description**: Automatically swap and replace your chestplate and elytra.")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqElytraReplaceEn)
    }
};

module.exports.config = {
    name: "faq/elytrareplace",
    aliases: [],
    use: "faq/elytrareplace",
    description: "What is ElytraReplace?",
    page: -1                                       
};