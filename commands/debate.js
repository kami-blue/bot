const Discord = require("discord.js");
const fs = require("graceful-fs");

module.exports.run = async (client, message, args) => {

    message.channel.send("Nope, you are nitpicking and biased, i win, bye bye");

}

module.exports.config = {
    name: "debate",
    aliases: [],
    use: "debate",
    description: "Epic debate",
    state: "gamma",
    page: 3
};
