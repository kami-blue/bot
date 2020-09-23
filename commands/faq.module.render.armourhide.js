const Discord = require("discord.js");
const fs = require("graceful-fs");

module.exports.run = async (client, message, args) => {
    if ((message.channel.id == "724349410858893372") || (message.channel.id == "722436626248237076")) {
        let FaqArmourHideRu = new Discord.MessageEmbed()
        .setTitle("ArmourHide")
        .setDescription("\n**Категория**: Render\n**Описание**: Скрывает броню на выбранных объектах")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqArmourHideRu)
    } else {
        let FaqArmourHideEn = new Discord.MessageEmbed()
        .setTitle("ArmourHide")
        .setDescription("\n**Category**: Render\n**Description**: Hides the armour on selected entities")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqArmourHideEn)
    }
};

module.exports.config = {
    name: "faq/armourhide",
    aliases: [],
    use: "faq/armourhide",
    description: "What is ArmourHide?",
    page: -1                                     
};