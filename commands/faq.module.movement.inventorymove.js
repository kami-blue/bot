const Discord = require("discord.js");
const fs = require("graceful-fs");

module.exports.run = async (client, message, args) => {
    if ((message.channel.id == "724349410858893372") || (message.channel.id == "722436626248237076")) {
        let FaqInventoryMoveRu = new Discord.MessageEmbed()
        .setTitle("InventoryMove")
        .setDescription("\n**Категория**: Movement\n**Описание**: Позволяет вам ходить с открытыми графическими интерфейсами")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqInventoryMoveRu)
    } else {
        let FaqInventoryMoveEn = new Discord.MessageEmbed()
        .setTitle("InventoryMove")
        .setDescription("\n**Category**: Movement\n**Description**: Allows you to walk around with GUIs opened")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqInventoryMoveEn)
    }
};

module.exports.config = {
    name: "faq/inventorymove",
    aliases: [],
    use: "faq/inventorymove",
    description: "What is InventoryMove?",
    page: 6                                       
};