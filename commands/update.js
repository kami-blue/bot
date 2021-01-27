const Discord = require("discord.js");
const fs = require("graceful-fs");
const exec = require('child_process').exec;

module.exports.run = async (client, message, args) => {
    if (!(message.author.id === "242462997530804225") && !(message.author.id === "297096161842429963") && !(message.author.id === "326039530971070474") && !(message.author.id === "688398900721352716")) return;
    message.reply("Updating...")
    const myShellScript = exec('sh update.sh ~/bot/');
    myShellScript.stdout.on('data', (data) => {
        console.log(data);
        // do whatever you want here with data
    });

    myShellScript.stderr.on('data', (data) => {
        console.error(data);
    });

}

module.exports.config = {
    name: "update",
    aliases: [],
    use: "update",
    description: "Update the bot",
    state: "gamma",
    page: 4
};
