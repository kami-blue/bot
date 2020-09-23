const Discord = require("discord.js");
const fs = require("graceful-fs");

module.exports.run = async (client, message, args) => {
    if ((message.channel.id == "724349410858893372") || (message.channel.id == "722436626248237076")) {
        let FaqPlayerModelRu = new Discord.MessageEmbed()
        .setTitle("PlayerModel")
        .setDescription("\n**Категория**: Render\n**Описание**: Отображает модель вас или кого-то, на кого вы нападаете")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqPlayerModelRu)
    } else {
        let FaqPlayerModelEn = new Discord.MessageEmbed()
        .setTitle("PlayerModel")
        .setDescription("\n**Category**: Render\n**Description**: Renders a model of you, or someone you're attacking")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqPlayerModelEn)
    }
};

module.exports.config = {
    name: "faq/playermodel",
    aliases: [],
    use: "faq/playermodel",
    description: "What is PlayerModel?",
    page: 6                                       
};