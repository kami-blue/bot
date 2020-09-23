const Discord = require("discord.js");
const fs = require("graceful-fs");

module.exports.run = async (client, message, args) => {
    if ((message.channel.id == "724349410858893372") || (message.channel.id == "722436626248237076")) {
        let FaqFormatChatRu = new Discord.MessageEmbed()
        .setTitle("FriendHighlight")
        .setDescription("\n**Категория**: Chat\n**Описание**: Подсвечивает ники ваших друзей в чате")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqFriendHighlightRu)
    } else {
        let FaqFriendHighlightEn = new Discord.MessageEmbed()
        .setTitle("FriendHighlight")
        .setDescription("\n**Category**: Chat\n**Description**: Highlights your friends names in chat")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqFriendHighlightEn)
    }
};

module.exports.config = {
    name: "faq/friendhighlight",
    aliases: [],
    use: "faq/friendhighlight",
    description: "What is FriendHighlight?",
    state: "gamma",
    page: 6
};