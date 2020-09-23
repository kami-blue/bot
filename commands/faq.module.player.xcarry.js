const Discord = require("discord.js");
const fs = require("graceful-fs");

module.exports.run = async (client, message, args) => {
    if ((message.channel.id == "724349410858893372") || (message.channel.id == "722436626248237076")) {
        let FaqXCarryRu = new Discord.MessageEmbed()
        .setTitle("XCarry")
        .setDescription("\n**Категория**: Player\n**Описание**: Храните предметы в слотах для крафта")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqXCarryRu)
    } else {
        let FaqXCarryEn = new Discord.MessageEmbed()
        .setTitle("XCarry")
        .setDescription("\n**Category**: Player\n**Description**: Store items in crafting slots")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqXCarryEn)
    }
};

module.exports.config = {
    name: "faq/xcarry",
    aliases: [],
    use: "faq/xcarry",
    description: "What is XCarry?",
    page: 6                                       
};