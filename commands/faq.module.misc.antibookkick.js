const Discord = require("discord.js");
const fs = require("graceful-fs");

module.exports.run = async (client, message, args) => {
    if ((message.channel.id == "724349410858893372") || (message.channel.id == "722436626248237076")) {
        let FaqAntiBookKickRu = new Discord.MessageEmbed()
        .setTitle("AntiBookKick")
        .setDescription("\n**Категория**: Misc\n**Описание**: Предотвращает кикание при нажатии на книги")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqAntiBookKickRu)
    } else {
        let FaqAntiBookKickEn = new Discord.MessageEmbed()
        .setTitle("AntiBookKick")
        .setDescription("\n**Category**: Misc\n**Description**: Prevents being kicked by clicking on books")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqAntiBookKickEn)
    }
};

module.exports.config = {
    name: "faq/antibookkick",
    aliases: [],
    use: "faq/antibookkick",
    description: "What is AntiBookKick?",
    state: "gamma",
    page: -1
};