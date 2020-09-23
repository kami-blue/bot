const Discord = require("discord.js");
const fs = require("graceful-fs");

module.exports.run = async (client, message, args) => {
    if ((message.channel.id == "724349410858893372") || (message.channel.id == "722436626248237076")) {
        let FaqNoRenderRu = new Discord.MessageEmbed()
        .setTitle("NoRender")
        .setDescription("\n**Категория**: Render\n**Описание**: Игнорировать пакеты появления сущностей")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqNoRenderRu)
    } else {
        let FaqNoRenderEn = new Discord.MessageEmbed()
        .setTitle("NoRender")
        .setDescription("\n**Category**: Render\n**Description**: Ignore entity spawn packets")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqNoRenderEn)
    }
};

module.exports.config = {
    name: "faq/norender",
    aliases: [],
    use: "faq/norender",
    description: "What is NoRender?",
    page: -1                                       
};