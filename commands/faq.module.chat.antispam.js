const Discord = require("discord.js");
const fs = require("graceful-fs");

module.exports.run = async (client, message, args) => {
    if ((message.channel.id == "724349410858893372") || (message.channel.id == "722436626248237076")) {
        let FaqAntiSpamEmbedRu = new Discord.MessageEmbed()
        .setTitle("AntiSpam")
        .setDescription("\n**Категория**: Chat\n**Описание**: Удаляет рекламу и спам из чата")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqAntiSpamEmbedRu)
    } else {
        let FaqAntiSpamEmbedEn = new Discord.MessageEmbed()
        .setTitle("AntiSpam")
        .setDescription("\n**Category**: Chat\n**Description**: Removes spam and advertising from the chat.")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqAntiSpamEmbedEn)
    }
};

module.exports.config = {
    name: "faq/*module_name*",
    aliases: [],
    use: "faq/*module_name*",
    description: "FAQ about modules",
    state: "gamma",
    page: 2
};