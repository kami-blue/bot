const Discord = require("discord.js");
const fs = require("graceful-fs");

module.exports.run = async (client, message, args) => {
    if ((message.channel.id == "724349410858893372") || (message.channel.id == "722436626248237076")) {
        let FaqWaypointRenderRu = new Discord.MessageEmbed()
        .setTitle("WaypointRender")
        .setDescription("\n**Категория**: Render\n**Описание**: Показывает направление к сохраненным точкам")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqWaypointRenderRu)
    } else {
        let FaqWaypointRenderEn = new Discord.MessageEmbed()
        .setTitle("WaypointRender")
        .setDescription("\n**Category**: Render\n**Description**: Render saved waypoints")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqWaypointRenderEn)
    }
};

module.exports.config = {
    name: "faq/waypointrender",
    aliases: [],
    use: "faq/waypointrender",
    description: "What is WaypointRender?",
    page: -1                                       
};