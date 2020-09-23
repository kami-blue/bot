const Discord = require("discord.js");
const fs = require("graceful-fs");

module.exports.run = async (client, message, args) => {
    if ((message.channel.id == "724349410858893372") || (message.channel.id == "722436626248237076")) {
        let FaqAntiForceLookRu = new Discord.MessageEmbed()
        .setTitle("AntiForceLook")
        .setDescription("\n**Категория**: Player\n**Описание**: Не позволяет пакетам сервера поворачивать вам голову")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqAntiForceLookRu)
    } else {
        let FaqAntiForceLookEn = new Discord.MessageEmbed()
        .setTitle("AntiForceLook")
        .setDescription("\n**Category**: Player\n**Description**: Stops server packets from turning your head")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqAntiForceLookEn)
    }
};

module.exports.config = {
    name: "faq/antiforcelook",
    aliases: [],
    use: "faq/antiforcelook",
    description: "What is AntiForceLook?",
    page: -1                                      
};