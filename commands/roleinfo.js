const Discord = require("discord.js");
const fs = require("graceful-fs");


module.exports.run = async (client, message, args) => {
    let roleId = args[0];
    const roleEmbed = new Discord.MessageEmbed()
        .setTitle(message.guild.roles.cache.get(roleId).name)
        .setColor(message.guild.roles.cache.get(roleId).hexColor)
        .addField("View Audit Log?", message.guild.roles.cache.get(roleId).permissions.has("VIEW_AUDIT_LOG"), true)
        .addField("Manage Roles?", message.guild.roles.cache.get(roleId).permissions.has("MANAGE_ROLES"), true)
        .addField("Manage Server?", message.guild.roles.cache.get(roleId).permissions.has("MANAGE_GUILD"), true)
        .addField("Manage Channels?", message.guild.roles.cache.get(roleId).permissions.has("MANAGE_CHANNELS"), true)
        .addField("Manage Messages?", message.guild.roles.cache.get(roleId).permissions.has("MANAGE_MESSAGES"), true)
        .addField("Kick?", message.guild.roles.cache.get(roleId).permissions.has("KICK_MEMBERS"), true)
        .addField("Ban?", message.guild.roles.cache.get(roleId).permissions.has("BAN_MEMBERS"), true)
        .addField("Mentions Everyone?", message.guild.roles.cache.get(roleId).permissions.has("MENTION_EVERYONE"), true)
        .addField("AKA", message.guild.roles.cache.get(roleId).permissions.has("MANAGE_GUILD") ? "Upper Council" : message.guild.roles.cache.get(roleId).permissions.has("MANAGE_MESSAGES") ? "Lower Council" : "Citizen")
        message.channel.send(roleEmbed)
}

module.exports.config = {
    name: "roleinfo",
    aliases: ["rl"],
    use: "roleinfo [roleid]",
    description: "Prepend \`Trans rights~!\` :3 to your message",
    state: "gamma",
    page: 1
};
