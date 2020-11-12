const Discord = require("discord.js");
const fs = require("graceful-fs");

module.exports.run = async (client, message, args) => {
    if ((message.channel.id == "724349410858893372") || (message.channel.id == "722436626248237076")) {
        let FaqCameraClipRu = new Discord.MessageEmbed()
        .setTitle("CameraClip")
        .setDescription("\n**Категория**: Render\n**Описание**: Позволяет вашей камере в 3-ем лице проходить сквозь блоки")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqCameraClipRu)
    } else {
        let FaqCameraClipEn = new Discord.MessageEmbed()
        .setTitle("CameraClip")
        .setDescription("\n**Category**: Render\n**Description**: Allows your 3rd person camera to pass through blocks")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqCameraClipEn)
    }
};

module.exports.config = {
    name: "faq/cameraclip",
    aliases: [],
    use: "faq/cameraclip",
    description: "What is CameraClip?",
    page: -1                                       
};