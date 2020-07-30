const Discord = require("discord.js");
const fs = require("graceful-fs");

/**
 * @module mute
 * @author sourTaste000
 * @since 7/30/2020
 */

module.exports.run = async (client, message, args) => {
    let i = 0;
    let clown = [];

    clown[i] = message.guild.members.cache.get(args[0]);
    clown[i].roles.add('580409999185018891');

    setTimeout(() => {
        clown[i].roles.remove('580409999185018891');
    }, args[2]*60000)

    i++;
}

module.exports.config = {
    name: "mute",
    aliases: ["m"],
    use: "mute [userid] [time(by minutes)]",
    description: "Temporary command to test if the bot is up!",
    state: "gamma",
    page: 1
};
