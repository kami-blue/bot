const Discord = require("discord.js");
const fs = require("graceful-fs");

module.exports.run = async (client, message, args) => {
    if ((message.channel.id == "724349410858893372") || (message.channel.id == "722436626248237076")) {
        let FaqChatTimeStampRu = new Discord.MessageEmbed()
        .setTitle("ChatTimeStamp")
        .setDescription("\n**Категория**: Chat\n**Описание**: Показывает время отправки сообщения рядом с сообщением")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqChatTimeStampRu)
    } else {
        let FaqChatTimeStampEn = new Discord.MessageEmbed()
        .setTitle("ChatTimeStamp")
        .setDescription("\n**Category**: Chat\n**Description**: Shows the time a message was sent beside the message")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqChatTimeStampEn)
    }
};

module.exports.config = {
    name: "faq/chattimestamp",
    aliases: [],
    use: "faq/chattimestamp",
    description: "What is ChatTimeStamp?",
    state: "gamma",
    page: 6
};