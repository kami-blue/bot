const Discord = require("discord.js");
const fs = require("graceful-fs");

module.exports.run = async (client, message, args) => {
    if ((message.channel.id == "724349410858893372") || (message.channel.id == "722436626248237076")) {
        let FaqCoordsLogRu = new Discord.MessageEmbed()
        .setTitle("CoordsLog")
        .setDescription("\n**Категория**: Misc\n**Описание**: Автоматически регистрирует ваши координаты на основе действий")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqCoordsLogRu)
    } else {
        let FaqCoordsLogEn = new Discord.MessageEmbed()
        .setTitle("CoordsLog")
        .setDescription("\n**Category**: Misc\n**Description**: Automatically logs your coords, based on actions")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqCoordsLogEn)
    }
};

module.exports.config = {
    name: "faq/cooordslog",
    aliases: [],
    use: "faq/cooordslog",
    description: "What is CoordsLog?",
    page: 6
};