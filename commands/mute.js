const Discord = require("discord.js");
const fs = require("graceful-fs");
const ms = require('ms');

module.exports.run = async (client, message, args) => {
    let requiredPermission = "MANAGE_ROLES";
    if (!message.member.hasPermission(requiredPermission)) return message.channel.send(client.msg["rejected_user_permission_"+requiredPermission]);
    if (!message.guild.me.hasPermission(requiredPermission)) return message.channel.send(client.msg["rejected_client_permission_"+requiredPermission]);
    requiredPermission = "EMBED_LINKS";
    if (!message.member.hasPermission(requiredPermission)) return message.channel.send(client.msg["rejected_user_permission_"+requiredPermission]);
    if (!message.guild.me.hasPermission(requiredPermission)) return message.channel.send(client.msg["rejected_client_permission_"+requiredPermission]);


    let reasonMute = message.content.split(" ").slice(3).join(" ");
    let timeMute = message.content.split(" ")[2];
    let guildMute = message.guild;
    let memberMute = message.guild.member;
    let userMute = message.mentions.users.first();
    let muteRoleMute = (message.guild.roles.cache.find(role => role.name === "Muted"));
    if (!muteRoleMute) muteRoleMute = (message.guild.roles.cache.find(role => role.name === "🤡 Muted"));
    if (!muteRoleMute) return message.channel.send(client.msg["mute_role_undefined"]);
    if (message.mentions.users.size < 1) return message.channel.send(client.msg["mute_user_undefined"])
    if (message.author.id === userMute.id) return message.channel.send(client.msg["mute_user_invalid"])
    if (!timeMute) return message.channel.send(client.msg["mute_time_undefined"])
    if (!timeMute.match(/[s,m,h,d,w]/g)) return message.channel.send(client.msg["mute_time_undefined"])
    if (!reasonMute) reasonMute = "No Reason Provided";
    if (reasonMute.length < 1) reasonMute = "No Reson Provided";

    try {
        message.guild.member(userMute).roles.add(muteRoleMute);
    } catch (err) {
        message.channel.send(client.msg["mute_rejected"])
        return err;
    }
    setTimeout(() => {
        message.guild.member(userMute).roles.remove(muteRoleMute);
    }, ms(timeMute));
    message.guild.channels.cache.filter(textchannel => textchannel.type === "text").forEach(channel => {
        channel.createOverwrite(muteRoleMute, {
            SEND_MESSAGES: false
        });
    });
    message.channel.send(client.msg["mute_success"]);
    let muteEmbed = new Discord.MessageEmbed()
        .setTitle("User Muted")
        .setColor(client.colors["discord"])
        .setAuthor(message.author.username, message.author.avatarURL({dynamic: true}))
        .addFields(
            {name: "Unsavory", value: `${userMute.username}#${userMute.discriminator}`, inline: true},
            {name: "Duration", value: `${ms(ms(timeMute), { long: true })}`, inline: true}
        )
        .setFooter("Reason: "  + reasonMute)
        .setTimestamp()

    message.channel.send(muteEmbed)
}

module.exports.config = {
    name: "mute",
    aliases: ["clown", "cringe"],
    use: "mute [@User] [Time] [Reason]",
    description: "Mute somebody",
    state : "gamma",
    page: 4
};
