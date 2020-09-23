const Discord = require("discord.js");
const fs = require("graceful-fs");

module.exports.run = async (client, message, args) => {
    if ((message.channel.id == "724349410858893372") || (message.channel.id == "722436626248237076")) {
        let FaqNoBreakAnimationRu = new Discord.MessageEmbed()
        .setTitle("NoBreakAnimation")
        .setDescription("\n**Категория**: Player\n**Описание**: Предотвращает анимацию ломания блока на стороне сервера")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqNoBreakAnimationRu)
    } else {
        let FaqNoBreakAnimationEn = new Discord.MessageEmbed()
        .setTitle("NoBreakAnimation")
        .setDescription("\n**Category**: Player\n**Description**: Prevents block break animation server side")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqNoBreakAnimationEn)
    }
};

module.exports.config = {
    name: "faq/nobreakanimation",
    aliases: [],
    use: "faq/nobreakanimation",
    description: "What is NoBreakAnimation?",
    page: 6                                       
};