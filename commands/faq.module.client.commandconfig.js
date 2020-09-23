const Discord = require("discord.js");
const fs = require("graceful-fs");

module.exports.run = async (client, message, args) => {
    if ((message.channel.id == "724349410858893372") || (message.channel.id == "722436626248237076")) {
        let FaqCommandConfigRu = new Discord.MessageEmbed()
        .setTitle("CommandConfig")
        .setDescription("\n**Категория**: Client\n**Описание**: Настраивает клиентский чат")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqCommandConfigRu)
    } else {
        let FaqCommandConfigEn = new Discord.MessageEmbed()
        .setTitle("CommandConfig")
        .setDescription("\n**Category**: Client\n**Description**: Configures client chat related stuff")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqCommandConfigEn)
    }
};

module.exports.config = {
    name: "faq/commandconfig",
    aliases: [],
    use: "faq/commandconfig",
    description: "What is CommandsConfig?",
    state: "gamma",
    page: -1
};