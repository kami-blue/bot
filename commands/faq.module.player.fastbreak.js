const Discord = require("discord.js");
const fs = require("graceful-fs");

module.exports.run = async (client, message, args) => {
    if ((message.channel.id == "724349410858893372") || (message.channel.id == "722436626248237076")) {
        let FaqFastBreakRu = new Discord.MessageEmbed()
        .setTitle("FastBreak")
        .setDescription("\n**Категория**: Player\n**Описание**: Ломает блок быстрее и сводит на нет задержку на ломание")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqFastBreakRu)
    } else {
        let FaqFastBreakEn = new Discord.MessageEmbed()
        .setTitle("FastBreak")
        .setDescription("\n**Category**: Player\n**Description**: Breaks block faster and nullifies the break delay")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqFastBreakEn)
    }
};

module.exports.config = {
    name: "faq/fastbreak",
    aliases: [],
    use: "faq/fastbreak",
    description: "What is FastBreak?",
    page: -1                                       
};