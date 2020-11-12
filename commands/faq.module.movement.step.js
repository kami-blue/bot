const Discord = require("discord.js");
const fs = require("graceful-fs");

module.exports.run = async (client, message, args) => {
    if ((message.channel.id == "724349410858893372") || (message.channel.id == "722436626248237076")) {
        let FaqStepRu = new Discord.MessageEmbed()
        .setTitle("Step")
        .setDescription("\n**Категория**: Movement\n**Описание**: Изменяет ванильную механику вставания на блок")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqStepRu)
    } else {
        let FaqStepEn = new Discord.MessageEmbed()
        .setTitle("Step")
        .setDescription("\n**Category**: Movement\n**Description**: Changes the vanilla behavior for stepping up blocks")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqStepEn)
    }
};

module.exports.config = {
    name: "faq/step",
    aliases: [],
    use: "faq/step",
    description: "What is Step?",
    page: -1                                       
};