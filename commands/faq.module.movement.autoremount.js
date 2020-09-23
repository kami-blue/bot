const Discord = require("discord.js");
const fs = require("graceful-fs");

module.exports.run = async (client, message, args) => {
    if ((message.channel.id == "724349410858893372") || (message.channel.id == "722436626248237076")) {
        let FaqAutoRemountRu = new Discord.MessageEmbed()
        .setTitle("AutoRemount")
        .setDescription("\n**Категория**: Movement\n**Описание**: Автоматически садится на лошадь")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqAutoRemountRu)
    } else {
        let FaqAutoRemountEn = new Discord.MessageEmbed()
        .setTitle("AutoRemount")
        .setDescription("\n**Category**: Movement\n**Description**: Automatically remounts your horse")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqAutoRemountEn)
    }
};

module.exports.config = {
    name: "faq/autoremount",
    aliases: [],
    use: "faq/autoremount",
    description: "What is AutoRemount?",
    page: -1                                       
};