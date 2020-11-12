const Discord = require("discord.js");
const fs = require("graceful-fs");

module.exports.run = async (client, message, args) => {
    if ((message.channel.id == "724349410858893372") || (message.channel.id == "722436626248237076")) {
        let FaqMidClickFriendsRu = new Discord.MessageEmbed()
        .setTitle("MidClickFriends")
        .setDescription("\n**Категория**: Misc\n**Описание**: Кликайте средней кнопкой мыши на игроков, чтобы добавить в друзья или удалить из друзей")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqMidClickFriendsRu)
    } else {
        let FaqMidClickFriendsEn = new Discord.MessageEmbed()
        .setTitle("MidClickFriends")
        .setDescription("\n**Category**: Misc\n**Description**: Middle click players to friend or unfriend them")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqMidClickFriendsEn)
    }
};

module.exports.config = {
    name: "faq/midclickfriends",
    aliases: [],
    use: "faq/midclickfriends",
    description: "What is MidClickFriends?",
    page: -1
};