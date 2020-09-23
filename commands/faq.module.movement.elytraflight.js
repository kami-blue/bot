const Discord = require("discord.js");
const fs = require("graceful-fs");

module.exports.run = async (client, message, args) => {
    if ((message.channel.id == "724349410858893372") || (message.channel.id == "722436626248237076")) {
        let FaqElytraFlightRu = new Discord.MessageEmbed()
        .setTitle("ElytraFlight")
        .setDescription("\n**Категория**: Movement\n**Описание**: Позволяет бесконечно и намного легче летать на элитрах")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqElytraFlightRu)
    } else {
        let FaqElytraFlightEn = new Discord.MessageEmbed()
        .setTitle("ElytraFlight")
        .setDescription("\n**Category**: Movement\n**Description**: Allows infinite and way easier Elytra flying")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqElytraFlightEn)
    }
};

module.exports.config = {
    name: "faq/elytraflight",
    aliases: [],
    use: "faq/elytraflight",
    description: "What is ElytraFlight?",
    page: 6                                       
};