const Discord = require("discord.js");
const fs = require("graceful-fs");

module.exports.run = async (client, message, args) => {
    if ((message.channel.id == "724349410858893372") || (message.channel.id == "722436626248237076")) {
        let FaqSprintRu = new Discord.MessageEmbed()
        .setTitle("Sprint")
        .setDescription("\n**Категория**: Movement\n**Описание**: Автоматически заставляет игрока бежать")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqSprintRu)
    } else {
        let FaqSprintEn = new Discord.MessageEmbed()
        .setTitle("Sprint")
        .setDescription("\n**Category**: Movement\n**Description**: Automatically makes the player sprint")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqSprintEn)
    }
};

module.exports.config = {
    name: "faq/sprint",
    aliases: [],
    use: "faq/sprint",
    description: "What is Sprint?",
    page: -1                                       
};