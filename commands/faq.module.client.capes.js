const Discord = require("discord.js");
const fs = require("graceful-fs");

module.exports.run = async (client, message, args) => {
    if ((message.channel.id == "724349410858893372") || (message.channel.id == "722436626248237076")) {
        let FaqCapesRu = new Discord.MessageEmbed()
        .setTitle("Capes")
        .setDescription("\n**Категория**: Client\n**Описание**: Управляет отображением плащей KAMI Blue.\nЕсли вы хотите плащ KAMI Blue, вы можете задонатить тут ->\n__PayPal__: https://paypal.me/mik4a/5USD\n__BTC__: https://www.blockchain.com/btc/address/19pH4aNZZMPJkqQ2826BauRokyBs1NYon7\n__BCH__: https://www.blockchain.com/bch/address/19pH4aNZZMPJkqQ2826BauRokyBs1NYon7")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqCapesRu)
    } else {
        let FaqCapesEn = new Discord.MessageEmbed()
        .setTitle("Capes")
        .setDescription("\n**Category**: Client\n**Description**: Controls the display of KAMI Blue capes.\nIf you want a KAMI Blue cape, you can donate here ->\n__PayPal__: https://paypal.me/mik4a/5USD\n__BTC__: https://www.blockchain.com/btc/address/19pH4aNZZMPJkqQ2826BauRokyBs1NYon7\n__BCH__: https://www.blockchain.com/bch/address/19pH4aNZZMPJkqQ2826BauRokyBs1NYon7")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqCapesEn)
    }
};

module.exports.config = {
    name: "faq/capes",
    aliases: [],
    use: "faq/capes",
    description: "What is Capes?",
    state: "gamma",
    page: 6
};