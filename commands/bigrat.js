const Discord = require("discord.js");
const fs = require("graceful-fs");

module.exports.run = async (client, message, args) => {
    
    message.channel.send("https://bigrat.monster/")
}

module.exports.config = {
    name: "bigrat",
    aliases: ["rat"],
    use: "bigrat",
    description: "BigRat",
    state: "gamma",
    page: 2
};
