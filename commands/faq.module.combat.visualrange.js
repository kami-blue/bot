const Discord = require("discord.js");
const fs = require("graceful-fs");

module.exports.run = async (client, message, args) => {
    if ((message.channel.id == "724349410858893372") || (message.channel.id == "722436626248237076")) {
        let FaqVisualRangeRu = new Discord.MessageEmbed()
        .setTitle("VisualRange")
        .setDescription("\n**Категория**: Combat\n**Описание**: Показывает игроков, которые входят в диапазон и выходят из него в чате")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqVisualRangeRu)
    } else {
        let FaqVisualRangeEn = new Discord.MessageEmbed()
        .setTitle("VisualRange")
        .setDescription("\n**Category**: Combat\n**Description**: Shows players who enter and leave range in chat")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqVisualRangeEn)
    }
};

module.exports.config = {
    name: "faq/visualrange",
    aliases: [],
    use: "faq/visualrange",
    description: "What is VisualRange?",
    state: "gamma",
    page: -1
};