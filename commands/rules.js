//someone rewrite this shit
const fetch = require('node-fetch');
const Discord = require("discord.js");
const fs = require("graceful-fs");
const rules = require("../rules.json");

module.exports.run = async (client, message, args) => {
    switch (args[0]) {
        case "0":
            message.channel.send(rules["0"]);
            break;
        case "1":
            message.channel.send(rules["1"].a);
            break;
        case "1a":
            message.channel.send(rules["1"].b);
            break;
        case "1b":
            message.channel.send(rules["1"].c);
            break;
        case "1c":
            message.channel.send(rules["1"].d);
            break;
        case "1d":
            message.channel.send(rules["1"].e);
            break;
        case "2":
            message.channel.send(rules["2"]);
            break;
        case "3":
            message.channel.send(rules["3"].a);
            break;
        case "3a":
            message.channel.send(rules["3"].b);
            break;
        case "3b":
            message.channel.send(rules["3"].c);
            break;
        case "3c":
            message.channel.send(rules["3"].d);
            break;
        case "3d":
            message.channel.send(rules["3"].e);
            break;
        case "3e":
            message.channel.send(rules["3"].f);
            break;
        case "4":
            message.channel.send(rules["4"]);
            break;
        case "5":
            message.channel.send(rules["5"]);
            break;
        case "6":
            message.channel.send(rules["6"].a);
            break;
        case "6a":
            message.channel.send(rules["6"].b);
            break;
        case "6b":
            message.channel.send(rules["6"].c);
            break;
        case "7":
            message.channel.send(rules["7"]);
            break;
        case "8":
            message.channel.send(rules["8"]);
            break;
        case "9":
            message.channel.send(rules["9"]);
            break;
        case "10":
            message.channel.send(rules["10"]);
            break;
        case "secret":
            message.channel.send(rules["message-from-sasha"]);
            break;
        default:
            message.channel.send("Provide an input dumbass")
    }
}

module.exports.config = {
    name: "rules",
    aliases: ["rule"],
    use: "rules [rule]",
    description: "Get rule",
    state: "gamma",
    page: 1
};
