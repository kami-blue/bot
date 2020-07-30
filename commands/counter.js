const Discord = require("discord.js");
const fs = require("graceful-fs");

module.exports.run = async (client, message, args) => {
    let user;
    if (!args[0]) {
        user = client.users.cache.get(message.author.id);
    } else {
        user = client.users.cache.get(args[0].replace(/[@!<>]/g, ""));
    }
    if (!user) return message.channel.send("Please mention a valid user.");
    try {
    message.channel.send(`${user.username} has said uwu ${client.uwuCounter.get(`${user.id}`, "uwuTimes")} times!`);
    } catch (idgaf) {
        message.channel.send("that user hasnt said uwu :((((")
    }
}

module.exports.config = {
    name: "counter",
    aliases: [],
    use: "counter",
    description: "How many times did you say uwu???",
    state: "gamma",
    page: 1
};
