const Discord = require("discord.js");
const fs = require("graceful-fs");

module.exports.run = async (client, message, args) => {
    if ((message.channel.id == "724349410858893372") || (message.channel.id == "722436626248237076")) {
        let FaqAntiHungerRu = new Discord.MessageEmbed()
        .setTitle("TeleportLogger")
        .setDescription("\n**Категория**: Movement\n**Описание**: Снижает чувство голода при движении")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqAntiHungerRu)
    } else {
        let FaqAntiHungerEn = new Discord.MessageEmbed()
        .setTitle("AntiHunger")
        .setDescription("\n**Category**: Movement\n**Description**: Reduces hunger lost when moving around")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqAntiHungerEn)
    }
};

module.exports.config = {
    name: "faq/antihunger",
    aliases: [],
    use: "faq/antihunger",
    description: "What is AntiHunger?",
    page: 6                                       
};