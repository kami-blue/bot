const Discord = require("discord.js");
const fs = require("graceful-fs");

module.exports.run = async (client, message, args) => {
    if ((message.channel.id == "724349410858893372") || (message.channel.id == "722436626248237076")) {
        let FaqHungerOverlayRu = new Discord.MessageEmbed()
        .setTitle("HungerOverlay")
        .setDescription("\n**Категория**: Player\n**Описание**: Отображает полезную накладку над полосой голода.")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqHungerOverlayRu)
    } else {
        let FaqHungerOverlayEn = new Discord.MessageEmbed()
        .setTitle("HungerOverlay")
        .setDescription("\n**Category**: Player\n**Description**: Displays a helpful overlay over your hunger bar.")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqHungerOverlayEn)
    }
};

module.exports.config = {
    name: "faq/hungeroverlay",
    aliases: [],
    use: "faq/hungeroverlay",
    description: "What is HungerOverlay?",
    page: 6                                       
};