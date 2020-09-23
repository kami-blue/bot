const Discord = require("discord.js");
const fs = require("graceful-fs");

module.exports.run = async (client, message, args) => {
    if ((message.channel.id == "724349410858893372") || (message.channel.id == "722436626248237076")) {
        let FaqAimBotRu = new Discord.MessageEmbed()
        .setTitle("AimBot")
        .setDescription("\n**Категория**: Combat\n**Описание**: Автоматически нацеливается на объекты за вас.")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqAimBotRu)
    } else {
        let FaqAimBotEn = new Discord.MessageEmbed()
        .setTitle("AimBot")
        .setDescription("\n**Category**: Combat\n**Description**: Automatically aims at entities for you.")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqAimBotEn)
    }
};

module.exports.config = {
    name: "faq/aimbot",
    aliases: [],
    use: "faq/aimbot",
    description: "What is AimBot?",
    state: "gamma",
    page: -1
};