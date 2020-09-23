const Discord = require("discord.js");
const fs = require("graceful-fs");

module.exports.run = async (client, message, args) => {
    if ((message.channel.id == "724349410858893372") || (message.channel.id == "722436626248237076")) {
        let FaqSurroundRu = new Discord.MessageEmbed()
        .setTitle("Surround")
        .setDescription("\n**Категория**: Combat\n**Описание**: Окружает вас обсидианом, чтобы получать меньше урона")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqSurroundRu)
    } else {
        let FaqSurroundEn = new Discord.MessageEmbed()
        .setTitle("Surround")
        .setDescription("\n**Category**: Combat\n**Description**: Surrounds you with obsidian to take less damage")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqSurroundEn)
    }
};

module.exports.config = {
    name: "faq/surround",
    aliases: [],
    use: "faq/surround",
    description: "What is Surround?",
    state: "gamma",
    page: -1
};