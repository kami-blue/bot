const Discord = require("discord.js");
const fs = require("graceful-fs");

module.exports.run = async (client, message, args) => {
    if ((message.channel.id == "724349410858893372") || (message.channel.id == "722436626248237076")) {
        let FaqTooltipsRu = new Discord.MessageEmbed()
        .setTitle("Tooltips")
        .setDescription("\n**Категория**: Client\n**Описание**: Отображает удобные описания модулей в графическом интерфейсе")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqTooltipsRu)
    } else {
        let FaqTooltipsEn = new Discord.MessageEmbed()
        .setTitle("Tooltips")
        .setDescription("\n**Category**: Client\n**Description**: Displays handy module descriptions in the GUI")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqTooltipsEn)
    }
};

module.exports.config = {
    name: "faq/tooltips",
    aliases: [],
    use: "faq/tooltips",
    description: "What is Tooltips?",
    state: "gamma",
    page: 6
};