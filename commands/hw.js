const Discord = require("discord.js");
const fs = require("graceful-fs");

module.exports.run = async (client, message, args) => {
        message.channel.send(`<@${message.mentions.users.first().id}>, please move to <#634010851128639508> or <#724349410858893372>`)
        return message.delete()
};

module.exports.config = {
    name: "hw",
    aliases: [""],
    use: "hw <@user>",
    description: "Directs user to help channel",
    state: "gamma",
    page: 2
};