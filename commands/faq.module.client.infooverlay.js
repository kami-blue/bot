const Discord = require("discord.js");
const fs = require("graceful-fs");

module.exports.run = async (client, message, args) => {
    if ((message.channel.id == "724349410858893372") || (message.channel.id == "722436626248237076")) {
        let FaqInfoOverlayRu = new Discord.MessageEmbed()
        .setTitle("InfoOverlay")
        .setDescription("\n**Категория**: Client\n**Описание**: Настраивает наложение игровой информации")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqInfoOverlayRu)
    } else {
        let FaqInfoOverlayEn = new Discord.MessageEmbed()
        .setTitle("InfoOverlay")
        .setDescription("\n**Category**: Client\n**Description**: Configures the game information overlay")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqInfoOverlayEn)
    }
};

module.exports.config = {
    name: "faq/infooverlay",
    aliases: [],
    use: "faq/infooverlay",
    description: "What is InfoOverlay?",
    state: "gamma",
    page: -1
};