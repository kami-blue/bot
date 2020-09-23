const Discord = require("discord.js");
const fs = require("graceful-fs");

module.exports.run = async (client, message, args) => {
    if ((message.channel.id == "724349410858893372") || (message.channel.id == "722436626248237076")) {
        let FaqAntiDisconnectRu = new Discord.MessageEmbed()
        .setTitle("AntiDisconnect")
        .setDescription("\n**Категория**: Misc\n**Описание**: Вы уверены, что хотите отключиться?")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqAntiDisconnectRu)
    } else {
        let FaqAntiDisconnectEn = new Discord.MessageEmbed()
        .setTitle("AntiDisconnect")
        .setDescription("\n**Category**: Misc\n**Description**: Are you sure you want to disconnect?")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqAntiDisconnectEn)
    }
};

module.exports.config = {
    name: "faq/antidisconnect",
    aliases: [],
    use: "faq/antidisconnect",
    description: "What is AntiDisconnect?",
    state: "gamma",
    page: -1
};