const Discord = require("discord.js");
const fs = require("graceful-fs");

module.exports.run = async (client, message, args) => {
    if ((message.channel.id == "724349410858893372") || (message.channel.id == "722436626248237076")) {
        let FaqBookCrashRu = new Discord.MessageEmbed()
        .setTitle("BookCrash")
        .setDescription("\n**Категория**: Misc\n**Описание**: Краш сервера при отправке больших пакетов")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqBookCrashRu)
    } else {
        let FaqBookCrashEn = new Discord.MessageEmbed()
        .setTitle("BookCrash")
        .setDescription("\n**Category**: Misc\n**Description**: Crashes servers by sending large packets")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqBookCrashEn)
    }
};

module.exports.config = {
    name: "faq/bookcrash",
    aliases: [],
    use: "faq/bookcrash",
    description: "What is BookCrash?",
    page: 6
};