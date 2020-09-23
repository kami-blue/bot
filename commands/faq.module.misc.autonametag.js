const Discord = require("discord.js");
const fs = require("graceful-fs");

module.exports.run = async (client, message, args) => {
    if ((message.channel.id == "724349410858893372") || (message.channel.id == "722436626248237076")) {
        let FaqAutoNameTagRu = new Discord.MessageEmbed()
        .setTitle("AutoNameTag")
        .setDescription("\n**Категория**: Misc\n**Описание**: Автоматически включать NameTag для объектов")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqAutoNameTagRu)
    } else {
        let FaqAutoNameTagEn = new Discord.MessageEmbed()
        .setTitle("AutoNameTag")
        .setDescription("\n**Category**: Misc\n**Description**: Automatically nametags entities")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqAutoNameTagEn)
    }
};

module.exports.config = {
    name: "faq/autonametag",
    aliases: [],
    use: "faq/autonametag",
    description: "What is AutoNameTag?",
    state: "gamma",
    page: 6
};