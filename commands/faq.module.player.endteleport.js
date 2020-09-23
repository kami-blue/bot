const Discord = require("discord.js");
const fs = require("graceful-fs");

module.exports.run = async (client, message, args) => {
    if ((message.channel.id == "724349410858893372") || (message.channel.id == "722436626248237076")) {
        let FaqEndTeleportRu = new Discord.MessageEmbed()
        .setTitle("EndTeleport")
        .setDescription("\n**Категория**: Player\n**Описание**: Позволяет телепортироваться при прохождении через порталы энда")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqEndTeleportRu)
    } else {
        let FaqEndTeleportEn = new Discord.MessageEmbed()
        .setTitle("EndTeleport")
        .setDescription("\n**Category**: Player\n**Description**: Allows for teleportation when going through end portals")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqEndTeleportEn)
    }
};

module.exports.config = {
    name: "faq/endteleport",
    aliases: [],
    use: "faq/endteleport",
    description: "What is EndTeleport?",
    page: 6                                       
};