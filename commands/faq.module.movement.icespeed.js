const Discord = require("discord.js");
const fs = require("graceful-fs");

module.exports.run = async (client, message, args) => {
    if ((message.channel.id == "724349410858893372") || (message.channel.id == "722436626248237076")) {
        let FaqIceSpeedRu = new Discord.MessageEmbed()
        .setTitle("IceSpeed")
        .setDescription("\n**Категория**: Movement\n**Описание**: Меняет показатель скользимости льда")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqIceSpeedRu)
    } else {
        let FaqIceSpeedEn = new Discord.MessageEmbed()
        .setTitle("IceSpeed")
        .setDescription("\n**Category**: Movement\n**Description**: Changes how slippery ice is")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqIceSpeedEn)
    }
};

module.exports.config = {
    name: "faq/icespeed",
    aliases: [],
    use: "faq/icespeed",
    description: "What is IceSpeed?",
    page: -1                                       
};