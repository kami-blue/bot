const Discord = require("discord.js");
const fs = require("graceful-fs");

module.exports.run = async (client, message, args) => {
    if ((message.channel.id == "724349410858893372") || (message.channel.id == "722436626248237076")) {
        let FaqEntitySpeedRu = new Discord.MessageEmbed()
        .setTitle("EntitySpeed")
        .setDescription("\n**Категория**: Movement\n**Описание**: Менять ваши ездовые качества со стороны сервера")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqEntitySpeedRu)
    } else {
        let FaqEntitySpeedEn = new Discord.MessageEmbed()
        .setTitle("EntitySpeed")
        .setDescription("\n**Category**: Movement\n**Description**: Abuse client-sided movement to shape sound barrier breaking rideables")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqEntitySpeedEn)
    }
};

module.exports.config = {
    name: "faq/entityspeed",
    aliases: [],
    use: "faq/entityspeed",
    description: "What is EntitySpeed?",
    page: -1                                       
};