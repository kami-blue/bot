const Discord = require("discord.js");
const fs = require("graceful-fs");

module.exports.run = async (client, message, args) => {
    if ((message.channel.id == "724349410858893372") || (message.channel.id == "722436626248237076")) {
        let FaqAutoTrapRu = new Discord.MessageEmbed()
        .setTitle("AutoTrap")
        .setDescription("\n**Категория**: Combat\n**Описание**: Захватывает врагов обсидианом")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqAutoTrapRu)
    } else {
        let FaqAutoTrapEn = new Discord.MessageEmbed()
        .setTitle("AutoTrap")
        .setDescription("\n**Category**: Combat\n**Description**: Traps your enemies in obsidian")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqAutoTrapEn)
    }
};

module.exports.config = {
    name: "faq/autotrap",
    aliases: [],
    use: "faq/autotrap",
    description: "What is AutoTrap?",
    state: "gamma",
    page: 6
};