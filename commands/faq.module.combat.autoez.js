const Discord = require("discord.js");
const fs = require("graceful-fs");

module.exports.run = async (client, message, args) => {
    if ((message.channel.id == "724349410858893372") || (message.channel.id == "722436626248237076")) {
        let FaqAutoEZRu = new Discord.MessageEmbed()
        .setTitle("AutoEZ")
        .setDescription("\n**Категория**: Combat\n**Описание**: Отправляет оскорбление в чат после убийства")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqAutoEZRu)
    } else {
        let FaqAutoEZEn = new Discord.MessageEmbed()
        .setTitle("AutoEZ")
        .setDescription("\n**Category**: Combat\n**Description**: Sends an insult in chat after killing someone")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqAutoEZEn)
    }
};

module.exports.config = {
    name: "faq/autoez",
    aliases: [],
    use: "faq/autoez",
    description: "What is AutoEZ?",
    state: "gamma",
    page: 6
};