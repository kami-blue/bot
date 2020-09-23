const Discord = require("discord.js");
const fs = require("graceful-fs");

module.exports.run = async (client, message, args) => {
    if ((message.channel.id == "724349410858893372") || (message.channel.id == "722436626248237076")) {
        let FaqAutoMineRu = new Discord.MessageEmbed()
        .setTitle("AutoMine")
        .setDescription("\n**Категория**: Misc\n**Описание**: Автоматически добывать выбранную руду")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqAutoMineRu)
    } else {
        let FaqAutoMineEn = new Discord.MessageEmbed()
        .setTitle("AutoMine")
        .setDescription("\n**Category**: Misc\n**Description**: Automatically mines chosen ores")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqAutoMineEn)
    }
};

module.exports.config = {
    name: "faq/automine",
    aliases: [],
    use: "faq/automine",
    description: "What is AutoMine?",
    state: "gamma",
    page: -1
};