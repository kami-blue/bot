const Discord = require("discord.js");
const fs = require("graceful-fs");

module.exports.run = async (client, message, args) => {
    if ((message.channel.id == "724349410858893372") || (message.channel.id == "722436626248237076")) {
        let FaqAutoTotemRu = new Discord.MessageEmbed()
        .setTitle("AutoTotem")
        .setDescription("\n**Категория**: Combat\n**Описание**: Автоматически берет тотем или другой предмет в левую руку")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqAutoTotemRu)
    } else {
        let FaqAutoTotemEn = new Discord.MessageEmbed()
        .setTitle("AutoTotem")
        .setDescription("\n**Category**: Combat\n**Description**: Refills your offhand with totems or other items")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqAutoTotemEn)
    }
};

module.exports.config = {
    name: "faq/autototem",
    aliases: [],
    use: "faq/autototem",
    description: "What is AutoTotem?",
    state: "gamma",
    page: 6
};