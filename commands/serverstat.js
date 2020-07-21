const ms = require("../minestat/JavaScript");
const Discord = require("discord.js");
const fs = require("graceful-fs");

module.exports.run = async (client, message, args) => {
    ms.init(args[0], 25565, function(result){
        message.channel.send("One moment...");
        if(ms.online){
            message.channel.delete();
            message.channel.send(`Server is running version ${ms.version} with ${ms.current_players} out of ${ms.max_players} players.`);
            message.channel.send(`Message of the day: ${ms.motd}`);
            message.channel.send(`Latency: ${ms.latency} ms.`)
        } else {
            message.channel.delete();
            message.channel.send(`Server is offline!`);
        }
    });
}

module.exports.config = {
    name: "serverstat",
    aliases: ["stat"],
    use: "stat [server ip]",
    description: "Gets status of server",
    state: "gamma",
    page: 1
};
