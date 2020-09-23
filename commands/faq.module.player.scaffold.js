const Discord = require("discord.js");
const fs = require("graceful-fs");

module.exports.run = async (client, message, args) => {
    if ((message.channel.id == "724349410858893372") || (message.channel.id == "722436626248237076")) {
        let FaqScaffoldRu = new Discord.MessageEmbed()
        .setTitle("Scaffold")
        .setDescription("\n**Категория**: Player\n**Описание**: Автоматически ставить блоки под вами")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqScaffoldRu)
    } else {
        let FaqScaffoldEn = new Discord.MessageEmbed()
        .setTitle("Scaffold")
        .setDescription("\n**Category**: Player\n**Description**: Places blocks under you")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqScaffoldEn)
    }
};

module.exports.config = {
    name: "faq/scaffold",
    aliases: [],
    use: "faq/scaffold",
    description: "What is Scaffold?",
    page: -1                                       
};