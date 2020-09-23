const Discord = require("discord.js");
const fs = require("graceful-fs");

module.exports.run = async (client, message, args) => {
    if ((message.channel.id == "724349410858893372") || (message.channel.id == "722436626248237076")) {
        let FaqHoleESPRu = new Discord.MessageEmbed()
        .setTitle("HoleESP")
        .setDescription("\n**Категория**: Render\n**Описание**: Показать безопасные места для crystal pvp")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqHoleESPRu)
    } else {
        let FaqHoleESPEn = new Discord.MessageEmbed()
        .setTitle("HoleESP")
        .setDescription("\n**Category**: Render\n**Description**: Show safe holes for crystal pvp")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqHoleESPEn)
    }
};

module.exports.config = {
    name: "faq/holeesp",
    aliases: [],
    use: "faq/holeesp",
    description: "What is HoleESP?",
    page: 6                                       
};