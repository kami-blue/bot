const Discord = require("discord.js");
const fs = require("graceful-fs");

module.exports.run = async (client, message, args) => {
    if ((message.channel.id == "724349410858893372") || (message.channel.id == "722436626248237076")) {
        let FaqAutoTpaRu = new Discord.MessageEmbed()
        .setTitle("AutoTPA")
        .setDescription("\n**Категория**: Chat\n**Описание**: Автоматически отклонять или принимать запросы на телепортацию")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqAutoTpaRu)
    } else {
        let FaqAutoTpaEn = new Discord.MessageEmbed()
        .setTitle("AutoTPA")
        .setDescription("\n**Category**: Chat\n**Description**: Automatically accept or decline /TPAs")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqAutoTpaEn)
    }
};

module.exports.config = {
    name: "faq/autotpa",
    aliases: [],
    use: "faq/autotpa",
    description: "What is AutoTPA?",
    state: "gamma",
    page: -1
};