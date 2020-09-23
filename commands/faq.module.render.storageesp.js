const Discord = require("discord.js");
const fs = require("graceful-fs");

module.exports.run = async (client, message, args) => {
    if ((message.channel.id == "724349410858893372") || (message.channel.id == "722436626248237076")) {
        let FaqStorageESPRu = new Discord.MessageEmbed()
        .setTitle("StorageESP")
        .setDescription("\n**Категория**: Render\n**Описание**: Подсвечивает единицы хранения в мире")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqStorageESPRu)
    } else {
        let FaqStorageESPEn = new Discord.MessageEmbed()
        .setTitle("StorageESP")
        .setDescription("\n**Category**: Render\n**Description**: Draws an ESP on top of storage units")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqStorageESPEn)
    }
};

module.exports.config = {
    name: "faq/storageesp",
    aliases: [],
    use: "faq/storageesp",
    description: "What is StorageESP?",
    page: -1                                       
};