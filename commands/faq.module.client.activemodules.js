const Discord = require("discord.js");
const fs = require("graceful-fs");

module.exports.run = async (client, message, args) => {
    if ((message.channel.id == "724349410858893372") || (message.channel.id == "722436626248237076")) {
        let FaqActiveModulesRu = new Discord.MessageEmbed()
        .setTitle("ActiveModules")
        .setDescription("\n**Категория**: Client\n**Описание**: Настраивает цвета и режимы ActiveModules")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqActiveModulesRu)
    } else {
        let FaqActiveModulesEn = new Discord.MessageEmbed()
        .setTitle("ActiveModules")
        .setDescription("\n**Category**: Client\n**Description**: Configures ActiveModules colours and modes")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqActiveModulesEn)
    }
};

module.exports.config = {
    name: "faq/activemodules",
    aliases: [],
    use: "faq/activemodules",
    description: "What is ActiveModules?",
    state: "gamma",
    page: 6
};