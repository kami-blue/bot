const Discord = require("discord.js");
const fs = require("graceful-fs");

module.exports.run = async (client, message, args) => {
    if ((message.channel.id == "724349410858893372") || (message.channel.id == "722436626248237076")) {
        let FaqChatFilterRu = new Discord.MessageEmbed()
        .setTitle("ChatFilter")
        .setDescription("\n**Категория**: Chat\n**Описание**: Убирает выбранные слова или фразы из чата")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqChatFilterRu)
    } else {
        let FaqChatFilterEn = new Discord.MessageEmbed()
        .setTitle("ChatFilter")
        .setDescription("\n**Category**: Chat\n**Description**: Filters custom words or phrases from the chat")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqChatFilterEn)
    }
};

module.exports.config = {
    name: "faq/chatfilter",
    aliases: [],
    use: "faq/chatfilter",
    description: "What is ChatFilter?",
    state: "gamma",
    page: -1
};