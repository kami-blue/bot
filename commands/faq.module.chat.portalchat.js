const Discord = require("discord.js");
const fs = require("graceful-fs");

module.exports.run = async (client, message, args) => {
    if ((message.channel.id == "724349410858893372") || (message.channel.id == "722436626248237076")) {
        let FaqPortalChatRu = new Discord.MessageEmbed()
        .setTitle("PortalChat")
        .setDescription("\n**Категория**: Chat\n**Описание**: Позволяет вам открывать графические интерфейсы, находясь в портале")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqPortalChatRu)
    } else {
        let FaqPortalChatEn = new Discord.MessageEmbed()
        .setTitle("PortalChat")
        .setDescription("\n**Category**: Chat\n**Description**: Allows you to open GUIs in portals")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqPortalChatEn)
    }
};

module.exports.config = {
    name: "faq/portalchat",
    aliases: [],
    use: "faq/portalchat",
    description: "What is PortalChat?",
    state: "gamma",
    page: 6
};