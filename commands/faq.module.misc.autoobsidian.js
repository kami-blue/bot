const Discord = require("discord.js");
const fs = require("graceful-fs");

module.exports.run = async (client, message, args) => {
    if ((message.channel.id == "724349410858893372") || (message.channel.id == "722436626248237076")) {
        let FaqAutoObsidianRu = new Discord.MessageEmbed()
        .setTitle("AutoObsidian")
        .setDescription("\n**Категория**: Misc\n**Описание**: Автоматически добывать эндерчесты для получения обсидиана.")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqAutoObsidianRu)
    } else {
        let FaqAutoObsidianEn = new Discord.MessageEmbed()
        .setTitle("AutoObsidian")
        .setDescription("\n**Category**: Misc\n**Description**: Mines ender chest automatically to fill inventory with obsidian")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqAutoObsidianEn)
    }
};

module.exports.config = {
    name: "faq/autoobsidian",
    aliases: [],
    use: "faq/autoobsidian",
    description: "What is AutoObsidian?",
    state: "gamma",
    page: 6
};