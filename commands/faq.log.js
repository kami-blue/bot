const Discord = require("discord.js");
const fs = require("graceful-fs");

module.exports.run = async (client, message, args) => {
    if (message.channel.id == "722436626248237076") {
        const embed = new Discord.MessageEmbed()
            .setColor(client.colors.kamiblue)
            .setDescription("Найдите файл `debug.log` в `~/.minecraft/logs` и вставьте содержимое на <https://paste.ee>, а затем отправьте ссылку.")
        message.channel.send(embed)
    } else {
        const embed = new Discord.MessageEmbed()
            .setColor(client.colors.kamiblue)
            .setDescription("Find the `debug.log` file inside `~/.minecraft/logs` and paste the contents to https://paste.ee/, and the send the link.")
        message.channel.send(embed)
    }
};

module.exports.config = {
    name: "log",
    aliases: [],
    use: "log",
    description: "How to get info for troubleshooting",
    state: "gamma",
    page: 2
};
