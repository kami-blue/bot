const Discord = require("discord.js");
const fs = require("graceful-fs");

module.exports.run = async (client, message, args) => {
    if ((message.channel.id == "724349410858893372") || (message.channel.id == "722436626248237076")) {
        let FaqAutoRespawnRu = new Discord.MessageEmbed()
        .setTitle("AutoRespawn")
        .setDescription("\n**Категория**: Misc\n**Описание**: Автоматически возрождается после смерти")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqAutoRespawnRu)
    } else {
        let FaqAutoRespawnEn = new Discord.MessageEmbed()
        .setTitle("AutoRespawn")
        .setDescription("\n**Category**: Misc\n**Description**: Automatically respawn after dying")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqAutoRespawnEn)
    }
};

module.exports.config = {
    name: "faq/autorespawn",
    aliases: [],
    use: "faq/autorespawn",
    description: "What is AutoRespawn?",
    state: "gamma",
    page: -1
};