const Discord = require("discord.js");
const fs = require("graceful-fs");

module.exports.run = async (client, message, args) => {
    if ((message.channel.id == "724349410858893372") || (message.channel.id == "722436626248237076")) {
        let FaqPitchLockRu = new Discord.MessageEmbed()
        .setTitle("Pitchlock")
        .setDescription("\n**Категория**: Player\n**Описание**: Блокирует вашу камеру на ровном углу")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqPitchLockRu)
    } else {
        let FaqPitchLockEn = new Discord.MessageEmbed()
        .setTitle("PitchLock")
        .setDescription("\n**Category**: Player\n**Description**: Locks your camera pitch")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqPitchLockEn)
    }
};

module.exports.config = {
    name: "faq/pitchlock",
    aliases: [],
    use: "faq/pitchlock",
    description: "What is PitchLock?",
    page: 6                                       
};