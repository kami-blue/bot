const Discord = require("discord.js");
const fs = require("graceful-fs");

module.exports.run = async (client, message, args) => {
    if (message.channel.id == "722436626248237076") {
        message.channel.send("Удалите файл `KAMIBlueMacros` в `.minecraft`, Эта ошибка уже исправлена ​​в последней бета-версии, но вам все равно нужно удалить файл после обновления")
    } else {
        message.channel.send("Delete the `KAMIBlueMacros` file in `.minecraft`. This bug is already fixed in the latest beta, but you still need to delete the file after updating")
    }
};

module.exports.config = {
    name: "macrocrash",
    aliases: ["mcrash"],
    use: "macrocrash",
    description: "Crash help",
    state: "gamma",
    page: 2
};
