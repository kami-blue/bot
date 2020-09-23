const Discord = require("discord.js");
const fs = require("graceful-fs");

module.exports.run = async (client, message, args) => {
    if ((message.channel.id == "724349410858893372") || (message.channel.id == "722436626248237076")) {
        let FaqBaritoneRu = new Discord.MessageEmbed()
        .setTitle("Baritone")
        .setDescription("\n**Категория**: Client\n**Описание**: Конфигурирует настройки баритона")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqBaritoneRu)
    } else {
        let FaqBaritoneEn = new Discord.MessageEmbed()
        .setTitle("ActiveModules")
        .setDescription("\n**Category**: Client\n**Description**: Configures Baritone settings")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqBaritoneEn)
    }
};

module.exports.config = {
    name: "faq/baritone",
    aliases: [],
    use: "faq/baritone",
    description: "What is Baritone?",
    state: "gamma",
    page: -1
};