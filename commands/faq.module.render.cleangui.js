const Discord = require("discord.js");
const fs = require("graceful-fs");

module.exports.run = async (client, message, args) => {
    if ((message.channel.id == "724349410858893372") || (message.channel.id == "722436626248237076")) {
        let FaqCleanGUIRu = new Discord.MessageEmbed()
        .setTitle("CleanGUI")
        .setDescription("\n**Категория**: Render\n**Описание**: Изменяет части графического интерфейса, чтобы они были прозрачными")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqCleanGUIRu)
    } else {
        let FaqCleanGUIEn = new Discord.MessageEmbed()
        .setTitle("CleanGUI")
        .setDescription("\n**Category**: Render\n**Description**: Modifies parts of the GUI to be transparent")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqCleanGUIEn)
    }
};

module.exports.config = {
    name: "faq/cleangui",
    aliases: [],
    use: "faq/cleangui",
    description: "What is CleanGUI?",
    page: 6                                       
};