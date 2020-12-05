const Discord = require("discord.js");
const fs = require("graceful-fs");

module.exports.run = async (client, message, args) => {

    message.channel.send(`Bot is up! <:catsunglasses:759835844726620170>`);

}

module.exports.config = {
    name: "template",
    aliases: [],
    use: "template",
    description: "Temporary command to test if the bot is up!",
    state: "gamma",
    page: -1
};
