const Discord = require("discord.js");
const fs = require("graceful-fs");

module.exports.run = async (client, message, args) => {
    if ((message.channel.id == "724349410858893372") || (message.channel.id == "722436626248237076")) {
        let FaqTotemPopCounterRu = new Discord.MessageEmbed()
        .setTitle("TotemPopCounter")
        .setDescription("\n**Категория**: Combat\n**Описание**: Считает, сколько раз игроки теряют тотемы")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqTotemPopCounterRu)
    } else {
        let FaqTotemPopCounterEn = new Discord.MessageEmbed()
        .setTitle("TotemPopCounter")
        .setDescription("\n**Category**: Combat\n**Description**: Counts how many times players pop")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqTotemPopCounterEn)
    }
};

module.exports.config = {
    name: "faq/totempopcounter",
    aliases: [],
    use: "faq/totempopcounter",
    description: "What is TotemPopCounter?",
    state: "gamma",
    page: 6
};