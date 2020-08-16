const Discord = require("discord.js");
const fs = require("graceful-fs");

module.exports.run = async (client, message, args) => {

    message.channel.send(`I will eat you`);
    message.delete()
}

module.exports.config = {
    name: "historian",
    aliases: [],
    use: "historian [message]",
    description: "he will eat you",
    state: "gamma",
    page: -1
};
