const Discord = require("discord.js");
const fs = require("graceful-fs");

module.exports.run = async (client, message, args) => {
    if ((message.channel.id == "724349410858893372") || (message.channel.id == "722436626248237076")) {
        let FaqNoFallRu = new Discord.MessageEmbed()
        .setTitle("NoFall")
        .setDescription("\n**Категория**: Player\n**Описание**: Защищает вас от получения урона от падения")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqNoFallRu)
    } else {
        let FaqNoFallEn = new Discord.MessageEmbed()
        .setTitle("NoFall")
        .setDescription("\n**Category**: Player\n**Description**: Prevents fall damage")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqNoFallEn)
    }
};

module.exports.config = {
    name: "faq/nofall",
    aliases: [],
    use: "faq/nofall",
    description: "What is NoFall?",
    page: -1                                     
};