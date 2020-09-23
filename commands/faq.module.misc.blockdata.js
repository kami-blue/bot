const Discord = require("discord.js");
const fs = require("graceful-fs");

module.exports.run = async (client, message, args) => {
    if ((message.channel.id == "724349410858893372") || (message.channel.id == "722436626248237076")) {
        let FaqBlockDataRu = new Discord.MessageEmbed()
        .setTitle("BlockData")
        .setDescription("\n**Категория**: Misc\n**Описание**: Щелкните на блок правой кнопкой мыши, чтобы отобразить их данные")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqBlockDataRu)
    } else {
        let FaqBlockDataEn = new Discord.MessageEmbed()
        .setTitle("BlockData")
        .setDescription("\n**Category**: Misc\n**Description**: Right click blocks to display their data")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqBlockDataEn)
    }
};

module.exports.config = {
    name: "faq/blockdata",
    aliases: [],
    use: "faq/blockdata",
    description: "What is BlockData?",
    state: "gamma",
    page: 6
};