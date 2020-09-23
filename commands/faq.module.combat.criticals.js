const Discord = require("discord.js");
const fs = require("graceful-fs");

module.exports.run = async (client, message, args) => {
    if ((message.channel.id == "724349410858893372") || (message.channel.id == "722436626248237076")) {
        let FaqCriticalsRu = new Discord.MessageEmbed()
        .setTitle("Criticals")
        .setDescription("\n**Категория**: Combat\n**Описание**: Всегда делает критические атаки")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqCriticalsRu)
    } else {
        let FaqCriticalsEn = new Discord.MessageEmbed()
        .setTitle("Criticals")
        .setDescription("\n**Category**: Combat\n**Description**: Always do critical attacks")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqCriticalsEn)
    }
};

module.exports.config = {
    name: "faq/criticals",
    aliases: [],
    use: "faq/criticals",
    description: "What is Criticals?",
    state: "gamma",
    page: -1
};