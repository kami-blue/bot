const Discord = require("discord.js");
const fs = require("graceful-fs");

module.exports.run = async (client, message, args) => {
    if ((message.channel.id == "724349410858893372") || (message.channel.id == "722436626248237076")) {
        let FaqArmourHUDRu = new Discord.MessageEmbed()
        .setTitle("ArmourHUD")
        .setDescription("\n**Категория**: Render\n**Описание**: Отображает вашу броню и ее прочность на экране")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqArmourHUDRu)
    } else {
        let FaqArmourHUDEn = new Discord.MessageEmbed()
        .setTitle("ArmourHUD")
        .setDescription("\n**Category**: Render\n**Description**: Displays your armour and it's durability on screen")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqArmourHUDEn)
    }
};

module.exports.config = {
    name: "faq/armourhud",
    aliases: [],
    use: "faq/armourhud",
    description: "What is ArmourHUD?",
    page: -1                                       
};