const Discord = require("discord.js");
const fs = require("graceful-fs");

module.exports.run = async (client, message, args) => {
    
    message.channel.send("http://mfw.tfw.wtf")
}

module.exports.config = {
    name: "smallrat",
    aliases: ["tinyrat"],
    use: "smallrat",
    description: "SmallRat",
    state: "gamma",
    page: 2
};
