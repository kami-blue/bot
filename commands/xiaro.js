const Discord = require("discord.js");
const fs = require("graceful-fs");

module.exports.run = async (client, message, args) => {
    if (/<@.*>/.test(message)) return;
    message.channel.send(`Trans rights~! :3, ${message.content.slice(7)}`)
}

module.exports.config = {
    name: "xiaro",
    aliases: [],
    use: "xiaro",
    description: "Prepend \`Trans rights~!\` :3 to your message",
    state: "gamma",
    page: 3
};
