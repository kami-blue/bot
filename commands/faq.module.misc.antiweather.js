const Discord = require("discord.js");
const fs = require("graceful-fs");

module.exports.run = async (client, message, args) => {
    if ((message.channel.id == "724349410858893372") || (message.channel.id == "722436626248237076")) {
        let FaqAntiWeatherRu = new Discord.MessageEmbed()
        .setTitle("AntiWeather")
        .setDescription("\n**Категория**: Misc\n**Описание**: Удаляет дождь из вашего мира")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqAntiWeatherRu)
    } else {
        let FaqAntiWeatherEn = new Discord.MessageEmbed()
        .setTitle("AntiWeather")
        .setDescription("\n**Category**: Misc\n**Description**: Removes rain from your world")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqAntiWeatherEn)
    }
};

module.exports.config = {
    name: "faq/antiweather",
    aliases: [],
    use: "faq/antiweather",
    description: "What is AntiWeather?",
    state: "gamma",
    page: 6
};