const Discord = require("discord.js");
const fs = require("graceful-fs");
const errors = require("./utils/httperrors");

module.exports.run = async (client, message, args) => {
    if(errors.codes.includes(args[0].toLowerCase())) {
        message.channel.send("https://http.cat/" + errors.codes[args[0]]);
    } else message.channel.send("Not a valid http error code!");
}

module.exports.config = {
    name: "http",
    aliases: [],
    use: "http [Error code]",
    description: "Sends funny cat picture with http error",
    state: "gamma",
    page: 3
};
