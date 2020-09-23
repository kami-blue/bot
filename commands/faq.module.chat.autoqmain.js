const Discord = require("discord.js");
const fs = require("graceful-fs");

module.exports.run = async (client, message, args) => {
    if ((message.channel.id == "724349410858893372") || (message.channel.id == "722436626248237076")) {
        let FaqAutoQMainRu = new Discord.MessageEmbed()
        .setTitle("AutoQMain")
        .setDescription("\n**Категория**: Chat\n**Описание**: Автоматически делает '/ queue main' на серверах")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqAutoQMainRu)
    } else {
        let FaqAutoQMainEn = new Discord.MessageEmbed()
        .setTitle("AutoQMain")
        .setDescription("\n**Category**: Chat\n**Description**: Automatically does '/queue main' on servers")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqAutoQMainEn)
    }
};

module.exports.config = {
    name: "faq/autoqmain",
    aliases: [],
    use: "faq/autoqmain",
    description: "What is AutoQMain?",
    state: "gamma",
    page: 6
};