const Discord = require("discord.js");
const fs = require("graceful-fs");

module.exports.run = async (client, message, args) => {
    if ((message.channel.id == "724349410858893372") || (message.channel.id == "722436626248237076")) {
        let FaqAutoReconnectRu = new Discord.MessageEmbed()
        .setTitle("AutoReconnect")
        .setDescription("\n**Категория**: Misc\n**Описание**: Автоматически переподключается после отключения")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqAutoReconnectRu)
    } else {
        let FaqAutoReconnectEn = new Discord.MessageEmbed()
        .setTitle("AutoReconnect")
        .setDescription("\n**Category**: Misc\n**Description**: Automatically reconnects after being disconnected")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqAutoReconnectEn)
    }
};

module.exports.config = {
    name: "faq/autoreconnect",
    aliases: [],
    use: "faq/autoreconnect",
    description: "What is AutoReconnect?",
    state: "gamma",
    page: 6
};