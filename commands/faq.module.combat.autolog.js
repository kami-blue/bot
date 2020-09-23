const Discord = require("discord.js");
const fs = require("graceful-fs");

module.exports.run = async (client, message, args) => {
    if ((message.channel.id == "724349410858893372") || (message.channel.id == "722436626248237076")) {
        let FaqAutoLogRu = new Discord.MessageEmbed()
        .setTitle("AutoLog")
        .setDescription("\n**Категория**: Combat\n**Описание**: Автоматически выходить при опасности или при низком уровне здоровья")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqAutoLogRu)
    } else {
        let FaqAutoLogEn = new Discord.MessageEmbed()
        .setTitle("AutoLog")
        .setDescription("\n**Category**: Combat\n**Description**: Automatically log when in danger or on low health")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqAutoLogEn)
    }
};

module.exports.config = {
    name: "faq/autolog",
    aliases: [],
    use: "faq/autolog",
    description: "What is AutoLog?",
    state: "gamma",
    page: 6
};