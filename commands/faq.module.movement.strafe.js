const Discord = require("discord.js");
const fs = require("graceful-fs");

module.exports.run = async (client, message, args) => {
    if ((message.channel.id == "724349410858893372") || (message.channel.id == "722436626248237076")) {
        let FaqStrafeRu = new Discord.MessageEmbed()
        .setTitle("Strafe")
        .setDescription("\n**Категория**: Movement\n**Описание**: Улучшает контроль в воздухе")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqStrafeRu)
    } else {
        let FaqStrafeEn = new Discord.MessageEmbed()
        .setTitle("Strafe")
        .setDescription("\n**Category**: Movement\n**Description**: Improves control in air")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqStrafeEn)
    }
};

module.exports.config = {
    name: "faq/strafe",
    aliases: [],
    use: "faq/strafe",
    description: "What is Strafe?",
    page: -1                                       
};