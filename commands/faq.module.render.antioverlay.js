const Discord = require("discord.js");
const fs = require("graceful-fs");

module.exports.run = async (client, message, args) => {
    if ((message.channel.id == "724349410858893372") || (message.channel.id == "722436626248237076")) {
        let FaqAntiOverlayRu = new Discord.MessageEmbed()
        .setTitle("AntiOverlay")
        .setDescription("\n**Категория**: Render\n**Описание**: Предотвращает рендеринг наложения текстур огня, воды и блоков.")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqAntiOverlayRu)
    } else {
        let FaqAntiOverlayEn = new Discord.MessageEmbed()
        .setTitle("AntiOverlay")
        .setDescription("\n**Category**: Render\n**Description**: Prevents rendering of fire, water and block texture overlays.")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqAntiOverlayEn)
    }
};

module.exports.config = {
    name: "faq/antioverlay",
    aliases: [],
    use: "faq/antioverlay",
    description: "What is AntiOverlay?",
    page: 6                                       
};