const Discord = require("discord.js");
const fs = require("graceful-fs");

module.exports.run = async (client, message, args) => {
    if ((message.channel.id == "724349410858893372") || (message.channel.id == "722436626248237076")) {
        let FaqFormatChatRu = new Discord.MessageEmbed()
        .setTitle("FormatChat")
        .setDescription("\n**Категория**: Chat\n**Описание**: Поддержка цвета и переноса строки в пакетах чата (другими словами вы можете использовать ENTER в чате)")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqFormatChatRu)
    } else {
        let FaqFormatChatEn = new Discord.MessageEmbed()
        .setTitle("FormatChat")
        .setDescription("\n**Category**: Chat\n**Description**: Add colour and linebreak support to upstream chat packets")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqFormatChatEn)
    }
};

module.exports.config = {
    name: "faq/formatchat",
    aliases: [],
    use: "faq/formatchat",
    description: "What is FormatChat?",
    state: "gamma",
    page: 6
};