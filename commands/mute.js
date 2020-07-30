const Discord = require("discord.js");
const fs = require("graceful-fs");

/**
 * @module mute
 * @author sourTaste000
 * @since 7/30/2020
 */

module.exports.run = async (client, message, args) => {
    let clown = [];

    clown[client.i] = message.guild.members.cache.get(args[0]);
    clown[client.i].roles.add('580409999185018891');

    setTimeout(() => {
        clown[client.i].roles.remove('580409999185018891');
    }, args[2]*60000)

    client.i++;
}

module.exports.config = {
    name: "mute",
    aliases: ["m"],
    use: "mute [userid] [time(by minutes)]",
    description: "Temporary command to test if the bot is up!",
    state: "gamma",
    page: 1
};
