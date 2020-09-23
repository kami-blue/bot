const Discord = require("discord.js");
const fs = require("graceful-fs");

module.exports.run = async (client, message, args) => {
    if ((message.channel.id == "724349410858893372") || (message.channel.id == "722436626248237076")) {
        let FaqPacketCancelRu = new Discord.MessageEmbed()
        .setTitle("PacketCancel")
        .setDescription("\n**Категория**: Player\n**Описание**: Отменяет определенные пакеты, используемые для различных действий")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqPacketCancelRu)
    } else {
        let FaqPacketCancelEn = new Discord.MessageEmbed()
        .setTitle("PacketCancel")
        .setDescription("\n**Category**: Player\n**Description**: Cancels specific packets used for various actions")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqPacketCancelEn)
    }
};

module.exports.config = {
    name: "faq/packetcancel",
    aliases: [],
    use: "faq/packetcancel",
    description: "What is PacketCancel?",
    page: 6                                       
};