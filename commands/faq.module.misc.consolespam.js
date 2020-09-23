const Discord = require("discord.js");
const fs = require("graceful-fs");

module.exports.run = async (client, message, args) => {
    if ((message.channel.id == "724349410858893372") || (message.channel.id == "722436626248237076")) {
        let FaqConsoleSpamRu = new Discord.MessageEmbed()
        .setTitle("ConsoleSpam")
        .setDescription("\n**Категория**: Misc\n**Описание**: Спамит консоли Spigot, отправляя недопустимые пакеты UpdateSign")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqConsoleSpamRu)
    } else {
        let FaqConsoleSpamEn = new Discord.MessageEmbed()
        .setTitle("ConsoleSpam")
        .setDescription("\n**Category**: Misc\n**Description**: Spams Spigot consoles by sending invalid UpdateSign packets")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqConsoleSpamEn)
    }
};

module.exports.config = {
    name: "faq/consolespam",
    aliases: [],
    use: "faq/consolespam",
    description: "What is ConsoleSpam?",
    page: -1
};