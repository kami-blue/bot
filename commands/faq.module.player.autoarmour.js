const Discord = require("discord.js");
const fs = require("graceful-fs");

module.exports.run = async (client, message, args) => {
    if ((message.channel.id == "724349410858893372") || (message.channel.id == "722436626248237076")) {
        let FaqAutoArmourRu = new Discord.MessageEmbed()
        .setTitle("AutoArmour")
        .setDescription("\n**Категория**: Player\n**Описание**: Автоматически надевать броню")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqAutoArmourRu)
    } else {
        let FaqAutoArmourEn = new Discord.MessageEmbed()
        .setTitle("AutoArmour")
        .setDescription("\n**Category**: Player\n**Description**: Automatically equips armour")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqAutoArmourEn)
    }
};

module.exports.config = {
    name: "faq/autoarmour",
    aliases: [],
    use: "faq/autoarmour",
    description: "What is AutoArmour?",
    page: 6                                       
};