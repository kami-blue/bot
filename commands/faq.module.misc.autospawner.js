const Discord = require("discord.js");
const fs = require("graceful-fs");

module.exports.run = async (client, message, args) => {
    if ((message.channel.id == "724349410858893372") || (message.channel.id == "722436626248237076")) {
        let FaqAutoSpawnerRu = new Discord.MessageEmbed()
        .setTitle("AutoSpawner")
        .setDescription("\n**Категория**: Misc\n**Описание**: Автоматически создает визеров, железных големов и снеговиков.")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqAutoSpawnerRu)
    } else {
        let FaqAutoSpawnerEn = new Discord.MessageEmbed()
        .setTitle("AutoSpawner")
        .setDescription("\n**Category**: Misc\n**Description**: Automatically spawns Withers, Iron Golems and Snowmen")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqAutoSpawnerEn)
    }
};

module.exports.config = {
    name: "faq/autospawner",
    aliases: [],
    use: "faq/autospawner",
    description: "What is AutoSpawner?",
    state: "gamma",
    page: 6
};