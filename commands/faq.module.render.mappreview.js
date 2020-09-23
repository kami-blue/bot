const Discord = require("discord.js");
const fs = require("graceful-fs");

module.exports.run = async (client, message, args) => {
    if ((message.channel.id == "724349410858893372") || (message.channel.id == "722436626248237076")) {
        let FaqMapPreviewRu = new Discord.MessageEmbed()
        .setTitle("MapPreview")
        .setDescription("\n**Категория**: Render\n**Описание**: Предварительный просмотр карт при наведении на них курсора")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqMapPreviewRu)
    } else {
        let FaqMapPreviewEn = new Discord.MessageEmbed()
        .setTitle("MapPreview")
        .setDescription("\n**Category**: Render\n**Description**: Previews maps when hovering over them")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqMapPreviewEn)
    }
};

module.exports.config = {
    name: "faq/mappreview",
    aliases: [],
    use: "faq/mappreview",
    description: "What is MapPreview?",
    page: 6                                       
};