const Discord = require("discord.js");
const fs = require("graceful-fs");

module.exports.run = async (client, message, args) => {
    if ((message.channel.id == "724349410858893372") || (message.channel.id == "722436626248237076")) {
        let FaqOffHandGapRu = new Discord.MessageEmbed()
        .setTitle("OffHandGap")
        .setDescription("\n**Категория**: Combat\n**Описание**: Удерживает яблоко бога при щелчке правой кнопкой мыши по мечу!")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqOffHandGapRu)
    } else {
        let FaqOffHandGapEn = new Discord.MessageEmbed()
        .setTitle("OffHandGap")
        .setDescription("\n**Category**: Combat\n**Description**: Holds a God apple when right clicking your sword!")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqOffHandGapEn)
    }
};

module.exports.config = {
    name: "faq/offhandgap",
    aliases: [],
    use: "faq/offhandgap",
    description: "What is OffHandGap?",
    state: "gamma",
    page: 6
};