const Discord = require("discord.js");
const fs = require("graceful-fs");

module.exports.run = async (client, message, args) => {
    if ((message.channel.id == "724349410858893372") || (message.channel.id == "722436626248237076")) {
        let FaqDiscordRPCRu = new Discord.MessageEmbed()
        .setTitle("DiscordRPC")
        .setDescription("\n**Категория**: Misc\n**Описание**: Щелкните правой кнопкой мыши объекты, чтобы выполнить с ними действия")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqEntityToolRu)
    } else {
        let FaqEntityToolEn = new Discord.MessageEmbed()
        .setTitle("EntityTool")
        .setDescription("\n**Category**: Misc\n**Description**: Right click entities to perform actions on them")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqEntityToolEn)
    }
};

module.exports.config = {
    name: "faq/entitytool",
    aliases: [],
    use: "faq/entitytool",
    description: "What is EntityTool?",
    page: -1
};