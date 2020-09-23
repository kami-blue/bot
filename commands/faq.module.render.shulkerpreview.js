const Discord = require("discord.js");
const fs = require("graceful-fs");

module.exports.run = async (client, message, args) => {
    if ((message.channel.id == "724349410858893372") || (message.channel.id == "722436626248237076")) {
        let FaqShulkerPreviewRu = new Discord.MessageEmbed()
        .setTitle("ShulkerPreview")
        .setDescription("\n**Категория**: Render\n**Описание**: Предварительный просмотр шалкера в графическом интерфейсе")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqShulkerPreviewRu)
    } else {
        let FaqShulkerPreviewEn = new Discord.MessageEmbed()
        .setTitle("ShulkerPreview")
        .setDescription("\n**Category**: Render\n**Description**: Previews shulkers in the game GUI")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqShulkerPreviewEn)
    }
};

module.exports.config = {
    name: "faq/shulkerpreview",
    aliases: [],
    use: "faq/shulkerpreview",
    description: "What is ShulkerPreview?",
    page: 6                                       
};