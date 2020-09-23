const Discord = require("discord.js");
const fs = require("graceful-fs");

module.exports.run = async (client, message, args) => {
    if ((message.channel.id == "724349410858893372") || (message.channel.id == "722436626248237076")) {
        let FaqEyeFinderRu = new Discord.MessageEmbed()
        .setTitle("EyeFinder")
        .setDescription("\n**Категория**: Render\n**Описание**: Проводит линии от голов сущностей туда, куда они смотрят")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqEyeFinderRu)
    } else {
        let FaqEyeFinderEn = new Discord.MessageEmbed()
        .setTitle("EyeFinder")
        .setDescription("\n**Category**: Render\n**Description**: Draw lines from entity's heads to where they are looking")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqEyeFinderEn)
    }
};

module.exports.config = {
    name: "faq/eyefinder",
    aliases: [],
    use: "faq/eyefinder",
    description: "What is EyeFinder?",
    page: 6                                       
};