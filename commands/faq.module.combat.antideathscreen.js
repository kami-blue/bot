const Discord = require("discord.js");
const fs = require("graceful-fs");

module.exports.run = async (client, message, args) => {
    if ((message.channel.id == "724349410858893372") || (message.channel.id == "722436626248237076")) {
        let FaqAntiDeathScreenRu = new Discord.MessageEmbed()
        .setTitle("AntiDeathScreen")
        .setDescription("\n**Категория**: Combat\n**Описание**: Исправляет случайные глюки экрана смерти")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqAntiDeathScreenRu)
    } else {
        let FaqAntiDeathScreenEn = new Discord.MessageEmbed()
        .setTitle("AntiDeathScreen")
        .setDescription("\n**Category**: Combat\n**Description**: Fixes random death screen glitches")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqAntiDeathScreenEn)
    }
};

module.exports.config = {
    name: "faq/antideathscreen",
    aliases: [],
    use: "faq/antideathscreen",
    description: "What is AntiDeathScreen?",
    state: "gamma",
    page: -1
};