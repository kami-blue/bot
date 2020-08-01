const Discord = require("discord.js");
const fs = require("graceful-fs");

module.exports.run = async (client, message, args) => {

    message.channel.send(`pog`);

}

module.exports.config = {
    name: "pog",
    aliases: [],
    use: "pog",
    description: "pog command",
    state: "gamma",
    page: -1
};
