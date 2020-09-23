const Discord = require("discord.js");
const fs = require("graceful-fs");

module.exports.run = async (client, message, args) => {
    if ((message.channel.id == "724349410858893372") || (message.channel.id == "722436626248237076")) {
        let FaqInventoryManagerRu = new Discord.MessageEmbed()
        .setTitle("InventoryManager")
        .setDescription("\n**Категория**: Player\n**Описание**: Управляет вашим инвентарем автоматически")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqInventoryManagerRu)
    } else {
        let FaqInventoryManagerEn = new Discord.MessageEmbed()
        .setTitle("InventoryManager")
        .setDescription("\n**Category**: Player\n**Description**: Manages your inventory automatically")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqInventoryManagerEn)
    }
};

module.exports.config = {
    name: "faq/inventorymanager",
    aliases: [],
    use: "faq/inventorymanager",
    description: "What is InventoryManager?",
    page: -1                                       
};