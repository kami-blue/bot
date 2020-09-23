const Discord = require("discord.js");
const fs = require("graceful-fs");

module.exports.run = async (client, message, args) => {
    if ((message.channel.id == "724349410858893372") || (message.channel.id == "722436626248237076")) {
        let FaqNoHurtCamRu = new Discord.MessageEmbed()
        .setTitle("NohurtCam")
        .setDescription(`\n**Категория**: Render\n**Описание**: Отключает эффект "больно" камеры`)
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqNoHurtCamRu)
    } else {
        let FaqNoHurtCamEn = new Discord.MessageEmbed()
        .setTitle("NoHurtCam")
        .setDescription("\n**Category**: Render\n**Description**: Disables the 'hurt' camera effect")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqNoHurtCamEn)
    }
};

module.exports.config = {
    name: "faq/nohurtcam",
    aliases: [],
    use: "faq/nohurtcam",
    description: "What is NoHurtCam?",
    page: -1                                       
};