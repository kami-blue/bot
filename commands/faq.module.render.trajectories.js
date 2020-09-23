const Discord = require("discord.js");
const fs = require("graceful-fs");

module.exports.run = async (client, message, args) => {
    if ((message.channel.id == "724349410858893372") || (message.channel.id == "722436626248237076")) {
        let FaqTrajectoriesRu = new Discord.MessageEmbed()
        .setTitle("Trajectories")
        .setDescription("\n**Категория**: Render\n**Описание**: Рисует линии туда, где траектории будут падать")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqTrajectoriesRu)
    } else {
        let FaqTrajectoriesEn = new Discord.MessageEmbed()
        .setTitle("Trajectories")
        .setDescription("\n**Category**: Render\n**Description**: Draws lines to where trajectories are going to fall")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqTrajectoriesEn)
    }
};

module.exports.config = {
    name: "faq/trajectories",
    aliases: [],
    use: "faq/trajectories",
    description: "What is Trajectories?",
    page: 6                                       
};