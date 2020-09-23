const Discord = require("discord.js");
const fs = require("graceful-fs");

module.exports.run = async (client, message, args) => {
    if ((message.channel.id == "724349410858893372") || (message.channel.id == "722436626248237076")) {
        let FaqAntiChainPopRu = new Discord.MessageEmbed()
        .setTitle("AntiChainPop")
        .setDescription("\n**Категория**: Combat\n**Описание**: Включает Surround при потере тотема")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqAntiChainPopRu)
    } else {
        let FaqAntiChainPopEn = new Discord.MessageEmbed()
        .setTitle("AntiChainPop")
        .setDescription("\n**Category**: Combat\n**Description**: Enables Surround when popping a totem")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqAntiChainPopEn)
    }
};

module.exports.config = {
    name: "faq/antichainopop",
    aliases: [],
    use: "faq/antichainpop",
    description: "What is AntiChainPop?",
    state: "gamma",
    page: -1
};