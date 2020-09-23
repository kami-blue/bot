const Discord = require("discord.js");
const fs = require("graceful-fs");

module.exports.run = async (client, message, args) => {
    if ((message.channel.id == "724349410858893372") || (message.channel.id == "722436626248237076")) {
        let FaqAutoWalkRu = new Discord.MessageEmbed()
        .setTitle("AutoWalk")
        .setDescription("\n**Категория**: Movement\n**Описание**: Автоматически ходит куда-нибудь")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqAutoWalkRu)
    } else {
        let FaqAutoWalkEn = new Discord.MessageEmbed()
        .setTitle("AutoWalk")
        .setDescription("\n**Category**: Movement\n**Description**: Automatically walks somewhere")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqAutoWalkEn)
    }
};

module.exports.config = {
    name: "faq/autowalk",
    aliases: [],
    use: "faq/autowalk",
    description: "What is AutoWalk?",
    page: 6                                       
};