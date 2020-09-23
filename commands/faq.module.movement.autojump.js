const Discord = require("discord.js");
const fs = require("graceful-fs");

module.exports.run = async (client, message, args) => {
    if ((message.channel.id == "724349410858893372") || (message.channel.id == "722436626248237076")) {
        let FaqAutoJumpRu = new Discord.MessageEmbed()
        .setTitle("AutoJump")
        .setDescription("\n**Категория**: Movement\n**Описание**: Автоматически прыгает, если возможно")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqAutoJumpRu)
    } else {
        let FaqAutoJumpEn = new Discord.MessageEmbed()
        .setTitle("AutoJump")
        .setDescription("\n**Category**: Movement\n**Description**: Automatically jumps if possible")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqAutoJumpEn)
    }
};

module.exports.config = {
    name: "faq/autojump",
    aliases: [],
    use: "faq/autojump",
    description: "What is AutoJump?",
    page: 6                                       
};