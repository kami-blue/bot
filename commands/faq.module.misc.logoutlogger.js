const Discord = require("discord.js");
const fs = require("graceful-fs");

module.exports.run = async (client, message, args) => {
    if ((message.channel.id == "724349410858893372") || (message.channel.id == "722436626248237076")) {
        let FaqLogoutLoggerRu = new Discord.MessageEmbed()
        .setTitle("LogoutLogger")
        .setDescription("\n**Категория**: Misc\n**Описание**: Регистрирует, когда игрок покидает игру")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqLogoutLoggerRu)
    } else {
        let FaqLogoutLoggerEn = new Discord.MessageEmbed()
        .setTitle("LogoutLogger")
        .setDescription("\n**Category**: Misc\n**Description**: Logs when a player leaves the game")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqLogoutLoggerEn)
    }
};

module.exports.config = {
    name: "faq/logoutlogger",
    aliases: [],
    use: "faq/logoutlogger",
    description: "What is LogoutLogger?",
    page: 6
};