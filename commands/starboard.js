const Discord = require("discord.js");
const fs = require("graceful-fs");

module.exports.run = async (client, message, args) => {
    const msg = client.channels.cache.messages.fetch(args[0]).toString();
    client.channels.get('634012886930423818').send(msg)
}

module.exports.config = {
    name: "starboard",
    aliases: ["star"],
    use: "starboard [msgid]",
    description: "posts the message in #starboard channel!",
    state: "gamma",
    page: 1
};
