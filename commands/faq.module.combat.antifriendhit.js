const Discord = require("discord.js");
const fs = require("graceful-fs");

module.exports.run = async (client, message, args) => {
    if ((message.channel.id == "724349410858893372") || (message.channel.id == "722436626248237076")) {
        let FaqAntiFriendHitRu = new Discord.MessageEmbed()
        .setTitle("AntiFriendHit")
        .setDescription("\n**Категория**: Combat\n**Описание**: Не ударять ваших друзей")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqAntiFriendHitRu)
    } else {
        let FaqAntiFriendHitEn = new Discord.MessageEmbed()
        .setTitle("AntiFriendHit")
        .setDescription("\n**Category**: Combat\n**Description**: Don't hit your friends")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqAntiFriendHitEn)
    }
};

module.exports.config = {
    name: "faq/antifriendhit",
    aliases: [],
    use: "faq/antifriendhit",
    description: "What is AntiFriendHit?",
    state: "gamma",
    page: 6
};