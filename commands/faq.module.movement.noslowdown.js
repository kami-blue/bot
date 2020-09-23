const Discord = require("discord.js");
const fs = require("graceful-fs");

module.exports.run = async (client, message, args) => {
    if ((message.channel.id == "724349410858893372") || (message.channel.id == "722436626248237076")) {
        let FaqNoSlowDownRu = new Discord.MessageEmbed()
        .setTitle("NoSlowDown")
        .setDescription("\n**Категория**: Movement\n**Описание**: Предотвращает замедление при использовании предмета или прохождении паутины")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqNoSlowDownRu)
    } else {
        let FaqNoSlowDownEn = new Discord.MessageEmbed()
        .setTitle("NoSlowDown")
        .setDescription("\n**Category**: Movement\n**Description**: Prevents being slowed down when using an item or going through cobwebs")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqNoSlowDownEn)
    }
};

module.exports.config = {
    name: "faq/noslowdown",
    aliases: [],
    use: "faq/noslowdown",
    description: "What is NoSlowDown?",
    page: -1                                       
};