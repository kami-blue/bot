const Discord = require("discord.js");
const fs = require("graceful-fs");

module.exports.run = async (client, message, args) => {
    if ((message.channel.id == "724349410858893372") || (message.channel.id == "722436626248237076")) {
        let FaqAutoReplyRu = new Discord.MessageEmbed()
        .setTitle("AutoReply")
        .setDescription("\n**Категория**: Chat\n**Описание**: Автоматический ответ на личные сообщения")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqAutoReplyRu)
    } else {
        let FaqAutoReplyEn = new Discord.MessageEmbed()
        .setTitle("AutoReply")
        .setDescription("\n**Category**: Chat\n**Description**: Automatically reply to direct messages")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqAutoReplyEn)
    }
};

module.exports.config = {
    name: "faq/autoreply",
    aliases: [],
    use: "faq/autoreply",
    description: "What is AutoReply?",
    state: "gamma",
    page: -1
};