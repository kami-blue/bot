const Discord = require("discord.js");
const fs = require("graceful-fs");

module.exports.run = async (client, message, args) => {
    if ((message.channel.id == "724349410858893372") || (message.channel.id == "722436626248237076")) {
        let FaqNoEntityTraceRu = new Discord.MessageEmbed()
        .setTitle("NoEntityTrace")
        .setDescription("\n**Категория**: Player\n**Описание**: Блокирует объекты, мешающие вам заниматься майнингом")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqNoEntityTraceRu)
    } else {
        let FaqNoEntityTraceEn = new Discord.MessageEmbed()
        .setTitle("NoEntityTrace")
        .setDescription("\n**Category**: Player\n**Description**: Blocks entities from stopping you from mining")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqNoEntityTraceEn)
    }
};

module.exports.config = {
    name: "faq/noentitytrace",
    aliases: [],
    use: "faq/noentitytrace",
    description: "What is NoEntityTrace?",
    page: 6                                       
};