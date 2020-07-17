const Discord = require('discord.js');
const fs = require("graceful-fs");


module.exports.run = async (client, message, args) => {
    const sender = message.sender;
    if(sender.hasPermission('BAN_MEMBERS')) {
        if (!args || !args[0]) return;
        const user = args[0];
        if (user) {
            const member = message.guild.member(user);
            if (member) {
                member
                    .ban({
                        reason: args[1].toString(),
                    })
                    .then(() => {
                        message.channel.send(`Successfully banned ${user.tag}`)
                    })
                    .catch(err => {
                        message.channel.send("I was unable to ban the member:");
                        message.channel.send(err);
                        console.error(err);
                    });
            } else {
                message.channel.send("That user isn't in this guild!");
            }
        } else {
            message.channel.send("You didn't mention the user to ban!")
        }
    }
}

module.exports.config = {
    name: "ban",
    aliases: [],
    use: "ban [username] [reason]",
    description: "Bans member",
    state: "gamma",
    page: 2
};