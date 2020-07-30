const Discord = require("discord.js");
const fs = require("graceful-fs");
const exec = require('child_process').exec;

module.exports.run = async (client, message, args) => {
    if(message.author.hasPermission('ADMINISTRATOR')){
    message.reply("ok")
    const myShellScript = exec('sh update.sh /home/mika/bot/');
    myShellScript.stdout.on('data', (data) => {
        console.log(data);
        // do whatever you want here with data
    });

    myShellScript.stderr.on('data', (data) => {
        console.error(data);
    });
    }
}

module.exports.config = {
    name: "update",
    aliases: [],
    use: "update",
    description: "update da bot!",
    state: "gamma",
    page: 4
};
