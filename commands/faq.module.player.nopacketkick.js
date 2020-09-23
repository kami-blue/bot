const Discord = require("discord.js");
const fs = require("graceful-fs");

module.exports.run = async (client, message, args) => {
    if ((message.channel.id == "724349410858893372") || (message.channel.id == "722436626248237076")) {
        let FaqNoPacketKickRu = new Discord.MessageEmbed()
        .setTitle("NoPacketKick")
        .setDescription("\n**Категория**: Player\n**Описание**: Подавление сетевых ошибок и предотвращение кика")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqNoPacketKickRu)
    } else {
        let FaqNoPacketKickEn = new Discord.MessageEmbed()
        .setTitle("NoPacketKick")
        .setDescription("\n**Category**: Player\n**Description**: Suppress network exceptions and prevent getting kicked")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqNoPacketKickEn)
    }
};

module.exports.config = {
    name: "faq/nopacketkick",
    aliases: [],
    use: "faq/nopacketkick",
    description: "What is NoPacketKick?",
    page: 6                                       
};