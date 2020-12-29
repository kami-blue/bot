const Discord = require("discord.js");
const fs = require("graceful-fs");
const fetch = require("node-fetch");

module.exports.run = async (client, message, args) => {
    let cat = await fetch("https://http.cat/" + args[0].toLowerCase());
    if (cat.ok) message.channel.send("https://http.cat/" + args[0].toLowerCase());
    else message.channel.send("https://http.cat/404");
}

module.exports.config = {
    name: "http",
    aliases: [],
    use: "http [Error code]",
    description: "Sends funny cat picture with http error",
    state: "gamma",
    page: 3
};
