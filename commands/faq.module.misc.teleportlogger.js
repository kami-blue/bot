const Discord = require("discord.js");
const fs = require("graceful-fs");

module.exports.run = async (client, message, args) => {
    if ((message.channel.id == "724349410858893372") || (message.channel.id == "722436626248237076")) {
        let FaqTeleportLoggerRu = new Discord.MessageEmbed()
        .setTitle("TeleportLogger")
        .setDescription("\n**Категория**: Misc\n**Описание**: Регистрирует, когда игрок куда-то телепортируется")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqTeleportLoggerRu)
    } else {
        let FaqTeleportLoggerEn = new Discord.MessageEmbed()
        .setTitle("TeleportLogger")
        .setDescription("\n**Category**: Misc\n**Description**: Logs when a player teleports somewhere")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqTeleportLoggerEn)
    }
};

module.exports.config = {
    name: "faq/teleportlogger",
    aliases: [],
    use: "faq/teleportlogger",
    description: "What is TeleportLogger?",
    page: -1                                       
};