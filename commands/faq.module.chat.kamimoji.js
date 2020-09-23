const Discord = require("discord.js");
const fs = require("graceful-fs");

module.exports.run = async (client, message, args) => {
    if ((message.channel.id == "724349410858893372") || (message.channel.id == "722436626248237076")) {
        let FaqKamiMojiRu = new Discord.MessageEmbed()
        .setTitle("KamiMoji")
        .setDescription("\n**Категория**: Chat\n**Описание**: Добавьте смайлики в чат с помощью KamiMoji, любезно предоставлено EmojiAPI.")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqKamiMojiRu)
    } else {
        let FaqKamiMojiEn = new Discord.MessageEmbed()
        .setTitle("KamiMoji")
        .setDescription("\n**Category**: Chat\n**Description**: Add emojis to chat using KamiMoji, courtesy of the EmojiAPI.")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqKamiMojiEn)
    }
};

module.exports.config = {
    name: "faq/kamimoji",
    aliases: [],
    use: "faq/kamimoji",
    description: "What is KamiMoji?",
    state: "gamma",
    page: -1
};