const Discord = require("discord.js");
const fs = require("graceful-fs");
const moduleslist = require("./util.moduleslist");

module.exports.run = async (client, message, args) => {
    try {
        const arg = moduleslist.modules[args[0].toLowerCase()]
        const title = arg.name
        const descriptionru = arg.descriptionru
        const descriptionen = arg.descriptionen
        if ((message.channel.id == "724349410858893372") || (message.channel.id == "722436626248237076")) {
            let FaqModuleRu = new Discord.MessageEmbed()
            .setTitle(title)
            .setDescription(descriptionru)
            .setColor(client.colors.kamiblue)
            .setFooter("カミブルー！", client.user.avatarURL())
            message.channel.send(FaqModuleRu)
        } else {
            let FaqModuleEn = new Discord.MessageEmbed()
            .setTitle(title)
            .setDescription(descriptionen)
            .setColor(client.colors.kamiblue)
            .setFooter("カミブルー！", client.user.avatarURL())
            message.channel.send(FaqModuleEn)
        }
    } catch(e) {
        if ((message.channel.id == "724349410858893372") || (message.channel.id == "722436626248237076")) {
            let FaqModuleErrorRu = new Discord.MessageEmbed()
            .setTitle("Ошибка")
            .setDescription("\n**Модуль не найден!**")
            .setColor(client.colors.kamiblue)
            .setFooter("カミブルー！", client.user.avatarURL())
            message.channel.send(FaqModuleErrorRu)
        } else {
            let FaqModuleErrorEn = new Discord.MessageEmbed()
            .setTitle("Error")
            .setDescription("\n**Module not found!**")
            .setColor(client.colors.kamiblue)
            .setFooter("カミブルー！", client.user.avatarURL())
            message.channel.send(FaqModuleErrorEn)
    }
};

module.exports.config = {
    name: "module",
    aliases: [],
    use: "module",
    description: "Information about modules",
    state: "gamma",
    page: -1
};
