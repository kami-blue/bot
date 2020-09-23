const Discord = require("discord.js");
const fs = require("graceful-fs");

module.exports.run = async (client, message, args) => {
    if ((message.channel.id == "724349410858893372") || (message.channel.id == "722436626248237076")) {
        let FaqAntiAFKRu = new Discord.MessageEmbed()
        .setTitle("AntiAFK")
        .setDescription("\n**Категория**: Misc\n**Описание**: Защищает ок кика за AFK")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqAntiAFKRu)
    } else {
        let FaqAntiAFKEn = new Discord.MessageEmbed()
        .setTitle("AntiAFK")
        .setDescription("\n**Category**: Misc\n**Description**: Prevents being kicked for AFK")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqAntiAFKEn)
    }
};

module.exports.config = {
    name: "faq/antiafk",
    aliases: [],
    use: "faq/antiafk",
    description: "What is AntiAFK?",
    state: "gamma",
    page: -1
};