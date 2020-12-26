const Discord = require("discord.js");
const fs = require("graceful-fs");
const fetch = require("node-fetch");
const lib = require("../util/AnimeLibrary/lib.js");

module.exports.run = async (client, message, args) => {
    if (message.channel.nsfw === true) {
        message.channel.send(lib())
    } else {
        message.channel.send("Use this command in an nsfw channel!")
    }

}

module.exports.config = {
    name: "anime",
    aliases: [],
    use: "anime",
    description: "Gives you a random anime image",
    state: "gamma",
    page: 1
};
