const Discord = require("discord.js");
const fs = require("graceful-fs");

module.exports.run = async (client, message, args) => {
    if ((message.channel.id == "724349410858893372") || (message.channel.id == "722436626248237076")) {
        let FaqNoSoundLagRu = new Discord.MessageEmbed()
        .setTitle("NoSoundLag")
        .setDescription("\n**Категория**: Misc\n**Описание**: Предотвращает лаги, вызванные звуковыми машинами")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqNoSoundLagRu)
    } else {
        let FaqNoSoundLagEn = new Discord.MessageEmbed()
        .setTitle("NoSoundLag")
        .setDescription("\n**Category**: Misc\n**Description**: Prevents lag caused by sound machines")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqNoSoundLagEn)
    }
};

module.exports.config = {
    name: "faq/nosoundlag",
    aliases: [],
    use: "faq/nosoundlag",
    description: "What is NoSoundLag?",
    page: -1
};