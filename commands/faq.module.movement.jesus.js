const Discord = require("discord.js");
const fs = require("graceful-fs");

module.exports.run = async (client, message, args) => {
    if ((message.channel.id == "724349410858893372") || (message.channel.id == "722436626248237076")) {
        let FaqJesusRu = new Discord.MessageEmbed()
        .setTitle("Jesus")
        .setDescription("\n**Категория**: Movement\n**Описание**: Позволяет вам ходить по воде")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqJesusRu)
    } else {
        let FaqJesusEn = new Discord.MessageEmbed()
        .setTitle("Jesus")
        .setDescription("\n**Category**: Movement\n**Description**: Allows you to walk on water")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqJesusEn)
    }
};

module.exports.config = {
    name: "faq/jesus",
    aliases: [],
    use: "faq/jesus",
    description: "What is Jesus?",
    page: -1                                       
};