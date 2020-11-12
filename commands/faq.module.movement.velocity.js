const Discord = require("discord.js");
const fs = require("graceful-fs");

module.exports.run = async (client, message, args) => {
    if ((message.channel.id == "724349410858893372") || (message.channel.id == "722436626248237076")) {
        let FaqVelocityRu = new Discord.MessageEmbed()
        .setTitle("Velocity")
        .setDescription("\n**Категория**: Movement\n**Описание**: Изменяет влияние отталкивания")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqVelocityRu)
    } else {
        let FaqVelocityEn = new Discord.MessageEmbed()
        .setTitle("Velocity")
        .setDescription("\n**Category**: Movement\n**Description**: Modify knockback impact")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqVelocityEn)
    }
};

module.exports.config = {
    name: "faq/velocity",
    aliases: [],
    use: "faq/velocity",
    description: "What is Velocity?",
    page: -1                                      
};