const Discord = require("discord.js");
const fs = require("graceful-fs");

module.exports.run = async (client, message, args) => {
    if (message.channel.id == "722436626248237076") {
        message.channel.send("Используйте `;set module setting value` чтобы вручную поменять знание функции. Например `;set elytraflight speedc 2.3999999` или `;customchat \"ur ez\"`. Для одиночных аргументов с пробелами, поставьте вокруг аргумента \"\", \"вот так\"")
    } else {
        message.channel.send("Use `;set module setting value` to manually change the value of a setting. Eg `;set elytraflight speedc 2.3999999` or `;customchat \"ur ez\"`. For single arguments with spaces, put \"\" around the argument, \"like so\"")
    }
};

module.exports.config = {
    name: "set",
    aliases: [],
    use: "set",
    description: "Instructions for using ;set",
    state: "gamma",
    page: 2
};
