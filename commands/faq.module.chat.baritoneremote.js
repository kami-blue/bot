const Discord = require("discord.js");
const fs = require("graceful-fs");

module.exports.run = async (client, message, args) => {
    if ((message.channel.id == "724349410858893372") || (message.channel.id == "722436626248237076")) {
        let FaqBaritoneRemoteRu = new Discord.MessageEmbed()
        .setTitle("BaritoneRemote")
        .setDescription("\n**Категория**: Chat\n**Описание**: Удаленный контроль Baritone для другого игрока через /msg")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqBaritoneRemoteRu)
    } else {
        let FaqBaritoneRemoteEn = new Discord.MessageEmbed()
        .setTitle("BaritoneRemote")
        .setDescription("\n**Category**: Chat\n**Description**: Remotely control Baritone with /msg")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqBaritoneRemoteEn)
    }
};

module.exports.config = {
    name: "faq/baritoneremote",
    aliases: [],
    use: "faq/baritoneremote",
    description: "What is BaritoneRemote?",
    state: "gamma",
    page: -1
};