const Discord = require("discord.js");
const fs = require("graceful-fs");

module.exports.run = async (client, message, args) => {
    if ((message.channel.id == "724349410858893372") || (message.channel.id == "722436626248237076")) {
        let FaqPacketLoggerRu = new Discord.MessageEmbed()
        .setTitle("PacketLogger")
        .setDescription("\n**Категория**: Player\n**Описание**: Записывать отправленные пакеты в файл")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqPacketLoggerRu)
    } else {
        let FaqPacketLoggerEn = new Discord.MessageEmbed()
        .setTitle("PacketLogger")
        .setDescription("\n**Category**: Player\n**Description**: Logs sent packets to a file")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqPacketLoggerEn)
    }
};

module.exports.config = {
    name: "faq/packetlogger",
    aliases: [],
    use: "faq/packetlogger",
    description: "What is PacketLogger?",
    page: -1                                       
};