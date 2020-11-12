const Discord = require("discord.js");
const fs = require("graceful-fs");

module.exports.run = async (client, message, args) => {
    if ((message.channel.id == "724349410858893372") || (message.channel.id == "722436626248237076")) {
        let FaqLagNotifierRu = new Discord.MessageEmbed()
        .setTitle("LagNotifier")
        .setDescription("\n**Категория**: Player\n**Описание**: Предупреждает когда сервер лагет")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqLagNotifierRu)
    } else {
        let FaqLagNotifierEn = new Discord.MessageEmbed()
        .setTitle("LagNotifier")
        .setDescription("\n**Category**: Player\n**Description**: Displays a warning when the server is laggin")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqLagNotifierEn)
    }
};

module.exports.config = {
    name: "faq/lagnotifier",
    aliases: [],
    use: "faq/lagnotifier",
    description: "What is LagNotifier?",
    page: -1                                       
};