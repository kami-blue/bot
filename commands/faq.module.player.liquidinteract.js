const Discord = require("discord.js");
const fs = require("graceful-fs");

module.exports.run = async (client, message, args) => {
    if ((message.channel.id == "724349410858893372") || (message.channel.id == "722436626248237076")) {
        let FaqLiquidInteractRu = new Discord.MessageEmbed()
        .setTitle("LiquidInteract")
        .setDescription("\n**Категория**: Player\n**Описание**: Позволяет вам ставить блоки на жидкость!")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqLiquidInteractRu)
    } else {
        let FaqLiquidInteractEn = new Discord.MessageEmbed()
        .setTitle("LiquidInteract")
        .setDescription("\n**Category**: Player\n**Description**: Place blocks on liquid!")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqLiquidInteractEn)
    }
};

module.exports.config = {
    name: "faq/liquidinteract",
    aliases: [],
    use: "faq/liquidinteract",
    description: "What is LiquidInteract?",
    page: 6                                       
};