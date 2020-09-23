const Discord = require("discord.js");
const fs = require("graceful-fs");

module.exports.run = async (client, message, args) => {
    if ((message.channel.id == "724349410858893372") || (message.channel.id == "722436626248237076")) {
        let FaqAutoExcuseRu = new Discord.MessageEmbed()
        .setTitle("AutoExcuse")
        .setDescription("\n**Категория**: Chat\n**Описание**: Оправдывает вас, когда вы умираете")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqAutoExcuseRu)       
    } else {
        let FaqAutoExcuseEn = new Discord.MessageEmbed()
        .setTitle("AutoExcuse")
        .setDescription("\n**Category**: Chat\n**Description**: Makes an excuse for you when you die")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqAutoExcuseEn)
    }
};

module.exports.config = {
    name: "faq/autoexcuse",
    aliases: [],
    use: "faq/autoexcuse",
    description: "What is AutoExcuse?",
    state: "gamma",
    page: -1
};