const Discord = require("discord.js");
const fs = require("graceful-fs");

module.exports.run = async (client, message, args) => {
    if ((message.channel.id == "724349410858893372") || (message.channel.id == "722436626248237076")) {
        let FaqFastUseRu = new Discord.MessageEmbed()
        .setTitle("FastUse")
        .setDescription("\n**Категория**: Player\n**Описание**: Использовать предмет быстрее")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqFastUseRu)
    } else {
        let FaqFastUseEn = new Discord.MessageEmbed()
        .setTitle("FastUse")
        .setDescription("\n**Category**: Player\n**Description**: Use items faster")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqFastUseEn)
    }
};

module.exports.config = {
    name: "faq/fastuse",
    aliases: [],
    use: "faq/fastuse",
    description: "What is FastUse?",
    page: -1                                      
};