const Discord = require("discord.js");
const fs = require("graceful-fs");

module.exports.run = async (client, message, args) => {
    if ((message.channel.id == "724349410858893372") || (message.channel.id == "722436626248237076")) {
        let FaqBlinkRu = new Discord.MessageEmbed()
        .setTitle("Blink")
        .setDescription("\n**Категория**: Player\n**Описание**: Отклоняет пакеты от сервера")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqBlinkRu)
    } else {
        let FaqBlinkEn = new Discord.MessageEmbed()
        .setTitle("Blink")
        .setDescription("\n**Category**: Player\n**Description**: Cancels server side packets")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqBlinkEn)
    }
};

module.exports.config = {
    name: "faq/blink",
    aliases: [],
    use: "faq/blink",
    description: "What is Blink?",
    page: -1                                       
};