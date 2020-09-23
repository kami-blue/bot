const Discord = require("discord.js");
const fs = require("graceful-fs");

module.exports.run = async (client, message, args) => {
    if ((message.channel.id == "724349410858893372") || (message.channel.id == "722436626248237076")) {
        let FaqDiscordNotifsRu = new Discord.MessageEmbed()
        .setTitle("DiscordNotifs")
        .setDescription("\n**Категория**: Chat\n**Описание**: Отправляет ваш чат на установленный канал Discord")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqDiscordNotifsRu)
    } else {
        let FaqDiscordNotifsEn = new Discord.MessageEmbed()
        .setTitle("DiscordNotifs")
        .setDescription("\n**Category**: Chat\n**Description**: Sends your chat to a set Discord channel")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqDiscordNotifsEn)
    }
};

module.exports.config = {
    name: "faq/discordnotifs",
    aliases: [],
    use: "faq/discordnotifs",
    description: "What is DiscordNotifs?",
    state: "gamma",
    page: 6
};