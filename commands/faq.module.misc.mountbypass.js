const Discord = require("discord.js");
const fs = require("graceful-fs");

module.exports.run = async (client, message, args) => {
    if ((message.channel.id == "724349410858893372") || (message.channel.id == "722436626248237076")) {
        let FaqMountBypassRu = new Discord.MessageEmbed()
        .setTitle("MountBypass")
        .setDescription("\n**Категория**: Misc\n**Описание**: Может позволить вам размещать сундуки на животных на серверах, которые блокируют это")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqMountBypassRu)
    } else {
        let FaqMountBypassEn = new Discord.MessageEmbed()
        .setTitle("MountBypass")
        .setDescription("\n**Category**: Misc\n**Description**: Might allow you to mount chested animals on servers that block it")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqMountBypassEn)
    }
};

module.exports.config = {
    name: "faq/mountbypass",
    aliases: [],
    use: "faq/mountbypass",
    description: "What is MountBypass?",
    page: -1
};