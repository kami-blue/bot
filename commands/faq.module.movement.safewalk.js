const Discord = require("discord.js");
const fs = require("graceful-fs");

module.exports.run = async (client, message, args) => {
    if ((message.channel.id == "724349410858893372") || (message.channel.id == "722436626248237076")) {
        let FaqSafeWalkRu = new Discord.MessageEmbed()
        .setTitle("SafeWalk")
        .setDescription("\n**Категория**: Movement\n**Описание**: Не дает вам сходить с краев")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqSafeWalkRu)
    } else {
        let FaqSafeWalkEn = new Discord.MessageEmbed()
        .setTitle("SafeWalk")
        .setDescription("\n**Category**: Movement\n**Description**: Keeps you from walking off edges")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqSafeWalkEn)
    }
};

module.exports.config = {
    name: "faq/safewalk",
    aliases: [],
    use: "faq/safewalk",
    description: "What is SafeWalk?",
    page: 6                                       
};