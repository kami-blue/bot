const Discord = require("discord.js");
const fs = require("graceful-fs");

module.exports.run = async (client, message, args) => {
    if (message.channel.id == "722436626248237076") {
        message.channel.send("По умолчанию Windows скрывает расширения файлов. Создайте текстовый файл без .txt в конце, так как он автоматически добавляется и скрывается.")
    } else {
        message.channel.send("By default, Windows hides file extensions. Make a text file without the .txt at the end, as it's automatically added and hidden.")
    }
};

module.exports.config = {
    name: "file",
    aliases: [],
    use: "file",
    description: "Why you can't see .txt extensions",
    state: "gamma",
    page: 2
};
