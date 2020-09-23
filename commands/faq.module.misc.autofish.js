const Discord = require("discord.js");
const fs = require("graceful-fs");

module.exports.run = async (client, message, args) => {
    if ((message.channel.id == "724349410858893372") || (message.channel.id == "722436626248237076")) {
        let FaqAutoFishRu = new Discord.MessageEmbed()
        .setTitle("AutoFish")
        .setDescription("\n**Категория**: Misc\n**Описание**: Автоматически ловит рыбу")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqAutoFishRu)
    } else {
        let FaqAutoFishEn = new Discord.MessageEmbed()
        .setTitle("AutoFish")
        .setDescription("\n**Category**: Misc\n**Description**: Automatically catch fish")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqAutoFishEn)
    }
};

module.exports.config = {
    name: "faq/autofish",
    aliases: [],
    use: "faq/autofish",
    description: "What is AutoFish?",
    state: "gamma",
    page: 6
};