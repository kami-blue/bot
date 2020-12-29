const Discord = require("discord.js");
const fs = require("graceful-fs");

module.exports.run = async (client, message, args) => {
    message.channel.send("https://http.cat/" + args[0].toLowerCase());
}

module.exports.config = {
    name: "http",
    aliases: [],
    use: "http [Error code]",
    description: "Sends funny cat picture with http error",
    state: "gamma",
    page: 3
};
