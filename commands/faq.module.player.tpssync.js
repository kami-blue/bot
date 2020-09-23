const Discord = require("discord.js");
const fs = require("graceful-fs");

module.exports.run = async (client, message, args) => {
    if ((message.channel.id == "724349410858893372") || (message.channel.id == "722436626248237076")) {
        let FaqTpsSyncRu = new Discord.MessageEmbed()
        .setTitle("TpsSync")
        .setDescription("\n**Категория**: Player\n**Описание**: Синхронизирует состояния блоков с сервером TPS")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqTpsSyncRu)
    } else {
        let FaqTpsSyncEn = new Discord.MessageEmbed()
        .setTitle("TpsSync")
        .setDescription("\n**Category**: Player\n**Description**: Synchronizes block states with the server TPS")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqTpsSyncEn)
    }
};

module.exports.config = {
    name: "faq/tpssync",
    aliases: [],
    use: "faq/tpssync",
    description: "What is TpsSync?",
    page: 6                                       
};