const Discord = require("discord.js");
const fs = require("graceful-fs");

module.exports.run = async (client, message, args) => {
    if ((message.channel.id == "724349410858893372") || (message.channel.id == "722436626248237076")) {
        let FaqPortalGodModeRu = new Discord.MessageEmbed()
        .setTitle("PortalGodMode")
        .setDescription("\n**Категория**: Player\n**Описание**: Не получайте урон, находясь в портале")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqPortalGodModeRu)
    } else {
        let FaqPortalGodModeEn = new Discord.MessageEmbed()
        .setTitle("PortalGodMode")
        .setDescription("\n**Category**: Player\n**Description**: Don't take damage in portals")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqPortalGodModeEn)
    }
};

module.exports.config = {
    name: "faq/portalgodmode",
    aliases: [],
    use: "faq/portalgodmode",
    description: "What is PortalGodMode?",
    page: -1                                       
};