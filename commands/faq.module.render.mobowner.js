const Discord = require("discord.js");
const fs = require("graceful-fs");

module.exports.run = async (client, message, args) => {
    if ((message.channel.id == "724349410858893372") || (message.channel.id == "722436626248237076")) {
        let FaqMobOwnerRu = new Discord.MessageEmbed()
        .setTitle("MobOwner")
        .setDescription("\n**Категория**: Render\n**Описание**: Отображает владельца прирученных мобов")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqMobOwnerRu)
    } else {
        let FaqMobOwnerEn = new Discord.MessageEmbed()
        .setTitle("MobOwner")
        .setDescription("\n**Category**: Render\n**Description**: Displays the owner of tamed mobs")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqMobOwnerEn)
    }
};

module.exports.config = {
    name: "faq/mobowner",
    aliases: [],
    use: "faq/mobowner",
    description: "What is MobOwner?",
    page: -1                                       
};