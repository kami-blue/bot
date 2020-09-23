const Discord = require("discord.js");
const fs = require("graceful-fs");

module.exports.run = async (client, message, args) => {
    if ((message.channel.id == "724349410858893372") || (message.channel.id == "722436626248237076")) {
        let FaqNametagsRu = new Discord.MessageEmbed()
        .setTitle("Nametags")
        .setDescription("\n**Категория**: Render\n**Описание**: Отображает описательные теги над объектами")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqNametagsRu)
    } else {
        let FaqNametagsEn = new Discord.MessageEmbed()
        .setTitle("Nametags")
        .setDescription("\n**Category**: Render\n**Description**: Draws descriptive nametags above entities")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqNametagsEn)
    }
};

module.exports.config = {
    name: "faq/nametags",
    aliases: [],
    use: "faq/nametags",
    description: "What is Nametags?",
    page: -1                                       
};