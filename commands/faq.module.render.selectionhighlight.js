const Discord = require("discord.js");
const fs = require("graceful-fs");

module.exports.run = async (client, message, args) => {
    if ((message.channel.id == "724349410858893372") || (message.channel.id == "722436626248237076")) {
        let FaqSelectionHighlightRu = new Discord.MessageEmbed()
        .setTitle("SelectionHighlight")
        .setDescription("\n**Категория**: Render\n**Описание**: Подсвечивать объекты на которые вы смотрите")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqSelectionHighlightRu)
    } else {
        let FaqSelectionHighlightEn = new Discord.MessageEmbed()
        .setTitle("SelectionHighlight")
        .setDescription("\n**Category**: Render\n**Description**: Highlights object you are looking at")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqSelectionHighlightEn)
    }
};

module.exports.config = {
    name: "faq/selectionhighlight",
    aliases: [],
    use: "faq/selectionhighlight",
    description: "What is SelectionHighlight?",
    page: 6                                       
};