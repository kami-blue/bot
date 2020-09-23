const Discord = require("discord.js");
const fs = require("graceful-fs");

module.exports.run = async (client, message, args) => {
    if ((message.channel.id == "724349410858893372") || (message.channel.id == "722436626248237076")) {
        let FaqAntiLevitationRu = new Discord.MessageEmbed()
        .setTitle("AntiLevitation")
        .setDescription("\n**Категория**: Movement\n**Описание**: Снимает эффект зелья левитации")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqAntiLevitationRu)
    } else {
        let FaqAntiLevitationEn = new Discord.MessageEmbed()
        .setTitle("AntiLevitation")
        .setDescription("\n**Category**: Movement\n**Description**: Removes levitation potion effect")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqAntiLevitationEn)
    }
};

module.exports.config = {
    name: "faq/antilevitation",
    aliases: [],
    use: "faq/antilevitation",
    description: "What is AntiLevitation?",
    page: -1                                       
};