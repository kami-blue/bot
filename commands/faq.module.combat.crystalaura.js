const Discord = require("discord.js");
const fs = require("graceful-fs");

module.exports.run = async (client, message, args) => {
    if ((message.channel.id == "724349410858893372") || (message.channel.id == "722436626248237076")) {
        let FaqCrystalAuraRu = new Discord.MessageEmbed()
        .setTitle("CrystalAura")
        .setDescription("\n**Категория**: Combat\n**Описание**: Помещает Кристаллы Края, чтобы убивать врагов")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqCrystalAuraRu)
    } else {
        let FaqCrystalAuraEn = new Discord.MessageEmbed()
        .setTitle("CrystalAura")
        .setDescription("\n**Category**: Combat\n**Description**: Places End Crystals to kill enemies")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqCrystalAuraEn)
    }
};

module.exports.config = {
    name: "faq/crystalaura",
    aliases: [],
    use: "faq/crystalaura",
    description: "What is CrystalAura?",
    state: "gamma",
    page: 6
};