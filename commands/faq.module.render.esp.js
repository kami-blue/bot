const Discord = require("discord.js");
const fs = require("graceful-fs");

module.exports.run = async (client, message, args) => {
    if ((message.channel.id == "724349410858893372") || (message.channel.id == "722436626248237076")) {
        let FaqESPRu = new Discord.MessageEmbed()
        .setTitle("ESP")
        .setDescription("\n**Категория**: Render\n**Описание**: Подсвечивает объекты")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqESPRu)
    } else {
        let FaqESPEn = new Discord.MessageEmbed()
        .setTitle("ESP")
        .setDescription("\n**Category**: Render\n**Description**: Highlights entities")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqESPEn)
    }
};

module.exports.config = {
    name: "faq/esp",
    aliases: [],
    use: "faq/esp",
    description: "What is ESP?",
    page: 6                                       
};