const Discord = require("discord.js");
const fs = require("graceful-fs");

module.exports.run = async (client, message, args) => {
    if ((message.channel.id == "724349410858893372") || (message.channel.id == "722436626248237076")) {
        let FaqBossStackRu = new Discord.MessageEmbed()
        .setTitle("BossStack")
        .setDescription("\n**Категория**: Misc\n**Описание**: Измените графический интерфейс здоровья босса, чтобы он занимал меньше места")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqBossStackRu)
    } else {
        let FaqBossStackEn = new Discord.MessageEmbed()
        .setTitle("BossStack")
        .setDescription("\n**Category**: Misc\n**Description**: Modify the boss health GUI to take up less space")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqBossStackEn)
    }
};

module.exports.config = {
    name: "faq/bossstack",
    aliases: [],
    use: "faq/bossstack",
    description: "What is BossStack?",
    page: 6
};