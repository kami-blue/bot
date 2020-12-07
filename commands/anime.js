const Discord = require("discord.js");
const fs = require("graceful-fs");
const fetch = require("node-fetch");

module.exports.run = async (client, message, args) => {
    if (message.channel.nsfw === true) {
        message.channel.send("https://i.redd.it/0j0rl4ndpeu11.jpg")
    } else {
        message.channel.send("Use this command in an nsfw channel!")
    }
}

module.exports.config = {
    name: "anime",
    aliases: [],
    use: "anime",
    description: "yo hol up no anime in this domain",
    state: "gamma",
    page: 1
};
