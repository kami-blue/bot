const Discord = require("discord.js");
const fs = require("graceful-fs");

module.exports.run = async (client, message, args) => {
    if (message.channel.id == "722436626248237076") {
        message.channel.send("Найдите файл `debug.log` в `~/.minecraft/logs` и вставьте содержимое на <https://pastebin.com>, а затем отправьте ссылку.")
    } else {
        message.channel.send("Find the `debug.log` file inside `~/.minecraft/logs` and paste the contents to <https://pastebin.com>, and the send the link.")
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
