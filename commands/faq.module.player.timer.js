const Discord = require("discord.js");
const fs = require("graceful-fs");

module.exports.run = async (client, message, args) => {
    if ((message.channel.id == "724349410858893372") || (message.channel.id == "722436626248237076")) {
        let FaqTimerRu = new Discord.MessageEmbed()
        .setTitle("Timer")
        .setDescription("\n**Категория**: Player\n**Описание**: Меняет скорость тика клиента")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqTimerRu)
    } else {
        let FaqTimerEn = new Discord.MessageEmbed()
        .setTitle("Timer")
        .setDescription("\n**Category**: Player\n**Description**: Changes your client tick speed")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqTimerEn)
    }
};

module.exports.config = {
    name: "faq/timer",
    aliases: [],
    use: "faq/timer",
    description: "What is Timer?",
    page: -1                                       
};