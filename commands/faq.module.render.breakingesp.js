const Discord = require("discord.js");
const fs = require("graceful-fs");

module.exports.run = async (client, message, args) => {
    if ((message.channel.id == "724349410858893372") || (message.channel.id == "722436626248237076")) {
        let FaqBreakingESPRu = new Discord.MessageEmbed()
        .setTitle("BreakingESP")
        .setDescription("\n**Категория**: Render\n**Описание**: Выделяет блоки, которые ломаются рядом с вами")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqBreakingESPRu)
    } else {
        let FaqBreakingESPEn = new Discord.MessageEmbed()
        .setTitle("BreakingESP")
        .setDescription("\n**Category**: Render\n**Description**: Highlights blocks being breaking near you")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqBreakingESPEn)
    }
};

module.exports.config = {
    name: "faq/breakingesp",
    aliases: [],
    use: "faq/breakingesp",
    description: "What is BreakingESP?",
    page: 6                                       
};