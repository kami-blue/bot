const Discord = require("discord.js");
const fs = require("graceful-fs");

module.exports.run = async (client, message, args) => {
    if ((message.channel.id == "724349410858893372") || (message.channel.id == "722436626248237076")) {
        let FaqNoSwingRu = new Discord.MessageEmbed()
        .setTitle("NoSwing")
        .setDescription("\n**Категория**: Player\n**Описание**: Отменяет пакеты взмаха мечем сервера и клиента")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqNoSwingRu)
    } else {
        let FaqNoSwingEn = new Discord.MessageEmbed()
        .setTitle("NoSwing")
        .setDescription("\n**Category**: Player\n**Description**: Cancels server and client swinging packets")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqNoSwingEn)
    }
};

module.exports.config = {
    name: "faq/noswing",
    aliases: [],
    use: "faq/noswing",
    description: "What is NoSwing?",
    page: 6                                       
};