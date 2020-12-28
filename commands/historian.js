const Discord = require("discord.js");
const fs = require("graceful-fs");

module.exports.run = async (client, message, args) => {

    message.channel.send(`I will eat you`);
    return message.delete()
}

module.exports.config = {
    name: "historian",
    aliases: [],
    use: "historian",
    description: "he will eat you",
    state: "gamma",
    page: 3
};
