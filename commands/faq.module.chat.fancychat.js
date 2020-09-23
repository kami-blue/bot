const Discord = require("discord.js");
const fs = require("graceful-fs");

module.exports.run = async (client, message, args) => {
    if ((message.channel.id == "724349410858893372") || (message.channel.id == "722436626248237076")) {
        let FaqFancyChatRu = new Discord.MessageEmbed()
        .setTitle("FancyChat")
        .setDescription("\n**Категория**: Chat\n**Описание**: Делает сообщения, которые вы отправляете, красивыми")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqFancyChatRu)
    } else {
        let FaqFancyChatEn = new Discord.MessageEmbed()
        .setTitle("FancyChat")
        .setDescription("\n**Category**: Chat\n**Description**: Makes messages you send fancy")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqFancyChatEn)
    }
};

module.exports.config = {
    name: "faq/fancychat",
    aliases: [],
    use: "faq/fancychat",
    description: "What is FancyChat?",
    state: "gamma",
    page: 6
};