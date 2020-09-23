const Discord = require("discord.js");
const fs = require("graceful-fs");

module.exports.run = async (client, message, args) => {
    if ((message.channel.id == "724349410858893372") || (message.channel.id == "722436626248237076")) {
        let FaqCustomChatRu = new Discord.MessageEmbed()
        .setTitle("CustomChat")
        .setDescription("\n**Категория**: Chat\n**Описание**: Добавьте собственное окончание к своему сообщению!")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqCustomChatRu)
    } else {
        let FaqCustomChatEn = new Discord.MessageEmbed()
        .setTitle("CustomChat")
        .setDescription("\n**Category**: Chat\n**Description**: Add a custom ending to your message!")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqCustomChatEn)
    }
};

module.exports.config = {
    name: "faq/customchat",
    aliases: [],
    use: "faq/customchat",
    description: "What is CustomChat?",
    state: "gamma",
    page: 6
};