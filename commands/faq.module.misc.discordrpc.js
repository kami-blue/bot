const Discord = require("discord.js");
const fs = require("graceful-fs");

module.exports.run = async (client, message, args) => {
    if ((message.channel.id == "724349410858893372") || (message.channel.id == "722436626248237076")) {
        let FaqDiscordRPCRu = new Discord.MessageEmbed()
        .setTitle("DiscordRPC")
        .setDescription("\n**Категория**: Misc\n**Описание**: Транслировать KAMI Blue в Discord Rich Presence")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqDiscordRPCRu)
    } else {
        let FaqDiscordRPCEn = new Discord.MessageEmbed()
        .setTitle("DiscordRPC")
        .setDescription("\n**Category**: Misc\n**Description**: Discord Rich Presence")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqDiscordRPCEn)
    }
};

module.exports.config = {
    name: "faq/discordrpc",
    aliases: [],
    use: "faq/discordrpc",
    description: "What is DiscordRPC?",
    page: -1
};