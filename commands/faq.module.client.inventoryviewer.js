const Discord = require("discord.js");
const fs = require("graceful-fs");

module.exports.run = async (client, message, args) => {
    if ((message.channel.id == "724349410858893372") || (message.channel.id == "722436626248237076")) {
        let FaqInventoryViewerRu = new Discord.MessageEmbed()
        .setTitle("InventoryViewer")
        .setDescription("\n**Категория**: Client\n**Описание**: Настраивает параметры Inventory Viewer")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqInventoryViewerRu)
    } else {
        let FaqInventoryViewerEn = new Discord.MessageEmbed()
        .setTitle("InventoryViewer")
        .setDescription("\n**Category**: Client\n**Description**: Configures Inventory Viewer's options")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqInventoryViewerEn)
    }
};

module.exports.config = {
    name: "faq/inventoryviewer",
    aliases: [],
    use: "faq/inventoryviewer",
    description: "What is InventoryViewer?",
    state: "gamma",
    page: -1
};