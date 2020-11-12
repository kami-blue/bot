const Discord = require("discord.js");
const fs = require("graceful-fs");

module.exports.run = async (client, message, args) => {
    if ((message.channel.id == "724349410858893372") || (message.channel.id == "722436626248237076")) {
        let FaqTabFriendsRu = new Discord.MessageEmbed()
        .setTitle("TabFriends")
        .setDescription("\n**Категория**: Render\n**Описание**: Подсвечивает ваших друзей в списке игроков")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqTabFriendsRu)
    } else {
        let FaqTabFriendsEn = new Discord.MessageEmbed()
        .setTitle("TabFriends")
        .setDescription("\n**Category**: Render\n**Description**: Highlights friends in the tab menu")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqTabFriendsEn)
    }
};

module.exports.config = {
    name: "faq/tabfriends",
    aliases: [],
    use: "faq/tabfriends",
    description: "What is TabFriends?",
    page: -1                                       
};