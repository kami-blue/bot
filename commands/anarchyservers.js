const Discord = require("discord.js");
const fs = require("graceful-fs");

module.exports.run = async (client, message, args) => {
    message.channel.send(`Google: https://www.google.com/search?&q=anarchy+servers \n
                          DuckDuckGo: https://duckduckgo.com/?q=anarchy+servers`);
}

module.exports.config = {
    name: "anarchyservers",
    aliases: [serverlists],
    use: "anarchyservers",
    description: "Googles for anarchy servers",
    state: "gamma",
    page: 1
};
