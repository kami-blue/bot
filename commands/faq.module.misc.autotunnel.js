const Discord = require("discord.js");
const fs = require("graceful-fs");

module.exports.run = async (client, message, args) => {
    if ((message.channel.id == "724349410858893372") || (message.channel.id == "722436626248237076")) {
        let FaqAutoTunnelRu = new Discord.MessageEmbed()
        .setTitle("AutoTunnel")
        .setDescription("\n**Категория**: Misc\n**Описание**: Автоматически прокладывает туннели заданного размера")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqAutoTunnelRu)
    } else {
        let FaqAutoTunnelEn = new Discord.MessageEmbed()
        .setTitle("AutoTunnel")
        .setDescription("\n**Category**: Misc\n**Description**: Automatically tunnels forward, at a given size")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqAutoTunnelEn)
    }
};

module.exports.config = {
    name: "faq/autotunnel",
    aliases: [],
    use: "faq/autotunnel",
    description: "What is AutoTunnel?",
    state: "gamma",
    page: -1
};