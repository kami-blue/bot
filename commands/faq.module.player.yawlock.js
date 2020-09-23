const Discord = require("discord.js");
const fs = require("graceful-fs");

module.exports.run = async (client, message, args) => {
    if ((message.channel.id == "724349410858893372") || (message.channel.id == "722436626248237076")) {
        let FaqYawLockRu = new Discord.MessageEmbed()
        .setTitle("YawLock")
        .setDescription("\n**Категория**: Player\n**Описание**: Блокирует yaw вашей камеры")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqYawLockRu)
    } else {
        let FaqYawLockEn = new Discord.MessageEmbed()
        .setTitle("YawLock")
        .setDescription("\n**Category**: Player\n**Description**: Locks your camera yaw")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqYawLockEn)
    }
};

module.exports.config = {
    name: "faq/yawlock",
    aliases: [],
    use: "faq/yawlock",
    description: "What is YawLock?",
    page: 6                                       
};