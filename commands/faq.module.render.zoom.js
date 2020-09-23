const Discord = require("discord.js");
const fs = require("graceful-fs");

module.exports.run = async (client, message, args) => {
    if ((message.channel.id == "724349410858893372") || (message.channel.id == "722436626248237076")) {
        let FaqZoomRu = new Discord.MessageEmbed()
        .setTitle("Zoom")
        .setDescription("\n**Категория**: Render\n**Описание**: Настройки FOV")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqZoomRu)
    } else {
        let FaqZoomEn = new Discord.MessageEmbed()
        .setTitle("Zoom")
        .setDescription("\n**Category**: Render\n**Description**: Configures FOV")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqZoomEn)
    }
};

module.exports.config = {
    name: "faq/zoom",
    aliases: [],
    use: "faq/zoom",
    description: "What is Zoom?",
    page: 6                                       
};