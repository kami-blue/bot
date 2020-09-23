const Discord = require("discord.js");
const fs = require("graceful-fs");

module.exports.run = async (client, message, args) => {
    if ((message.channel.id == "724349410858893372") || (message.channel.id == "722436626248237076")) {
        let FaqSkinFlickerRu = new Discord.MessageEmbed()
        .setTitle("SkinFlicker")
        .setDescription("\n**Категория**: Misc\n**Описание**: Единицы хранения бревен на расстоянии отрисовки")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqSkinFlickerRu)
    } else {
        let FaqSkinFlickerEn = new Discord.MessageEmbed()
        .setTitle("SkinFlicker")
        .setDescription("\n**Category**: Misc\n**Description**: Toggle your skin layers rapidly for a cool skin effect")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqSkinFlickerEn)
    }
};

module.exports.config = {
    name: "faq/skinFlicker",
    aliases: [],
    use: "faq/skinFlicker",
    description: "What is SkinFlicker?",
    page: -1
};