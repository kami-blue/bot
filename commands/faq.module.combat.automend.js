const Discord = require("discord.js");
const fs = require("graceful-fs");

module.exports.run = async (client, message, args) => {
    if ((message.channel.id == "724349410858893372") || (message.channel.id == "722436626248237076")) {
        let FaqAutoMendRu = new Discord.MessageEmbed()
        .setTitle("AutoMend")
        .setDescription("\n**Категория**: Combat\n**Описание**: Автоматически чинит броню с помощью бутылок опыта!")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqAutoMendRu)
    } else {
        let FaqAutoMendEn = new Discord.MessageEmbed()
        .setTitle("AutoMend")
        .setDescription("\n**Category**: Combat\n**Description**: Automatically mends armour with XP bottles!")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqAutoMendEn)
    }
};

module.exports.config = {
    name: "faq/automend",
    aliases: [],
    use: "faq/automend",
    description: "What is AutoMend?",
    state: "gamma",
    page: -1
};