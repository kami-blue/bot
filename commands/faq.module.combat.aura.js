const Discord = require("discord.js");
const fs = require("graceful-fs");

module.exports.run = async (client, message, args) => {
    if ((message.channel.id == "724349410858893372") || (message.channel.id == "722436626248237076")) {
        let FaqAuraRu = new Discord.MessageEmbed()
        .setTitle("Aura")
        .setDescription("\n**Категория**: Combat\n**Описание**: Бьет по сущностям вокруг вас")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqAuraRu)
    } else {
        let FaqAuraEn = new Discord.MessageEmbed()
        .setTitle("Aura")
        .setDescription("\n**Category**: Combat\n**Description**: Hits entities around you")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqAuraEn)
    }
};

module.exports.config = {
    name: "faq/aura",
    aliases: [],
    use: "faq/aura",
    description: "What is Aura?",
    state: "gamma",
    page: -1
};