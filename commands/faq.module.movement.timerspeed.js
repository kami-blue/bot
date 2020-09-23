const Discord = require("discord.js");
const fs = require("graceful-fs");

module.exports.run = async (client, message, args) => {
    if ((message.channel.id == "724349410858893372") || (message.channel.id == "722436626248237076")) {
        let FaqTimerSpeedRu = new Discord.MessageEmbed()
        .setTitle("TimerSpeed")
        .setDescription("\n**Категория**: Movement\n**Описание**: Автоматически меняет тик клиента, чтобы вы двигались быстрее")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqTimerSpeedRu)
    } else {
        let FaqTimerSpeedEn = new Discord.MessageEmbed()
        .setTitle("TimerSpeed")
        .setDescription("\n**Category**: Movement\n**Description**: Automatically change your timer to go fast")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqTimerSpeedEn)
    }
};

module.exports.config = {
    name: "faq/timerspeed",
    aliases: [],
    use: "faq/timerspeed",
    description: "What is TimerSpeed?",
    page: -1                                       
};