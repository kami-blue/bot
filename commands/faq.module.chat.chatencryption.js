const Discord = require("discord.js");
const fs = require("graceful-fs");

module.exports.run = async (client, message, args) => {
    if ((message.channel.id == "724349410858893372") || (message.channel.id == "722436626248237076")) {
        let FaqChatEncryptionRu = new Discord.MessageEmbed()
        .setTitle("ChatEncryption")
        .setDescription("\n**Категория**: Chat\n**Описание**: Шифрует и расшифровывает сообщения чата")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqChatEncryptionRu)
    } else {
        let FaqChatEncryptionEn = new Discord.MessageEmbed()
        .setTitle("ChatEncryption")
        .setDescription("\n**Category**: Chat\n**Description**: Encrypts and decrypts chat messages")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqChatEncryptionEn)
    }
};

module.exports.config = {
    name: "faq/chatencryption",
    aliases: [],
    use: "faq/chatencryption",
    description: "What is ChatEncryption?",
    state: "gamma",
    page: 6
};