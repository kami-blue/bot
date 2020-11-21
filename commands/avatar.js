const Discord = require("discord.js");
const fs = require("graceful-fs");

module.exports.run = async (client, message, args) => {
    let user
    if (!args[0]) {
        user = client.users.cache.get(message.author.id);
    } else {
        user = client.users.cache.get(args[0].replace(/[@!<>]/g, ""));
    }
    if (!user) return message.channel.send("Please mention a valid user.");

    const embed = new Discord.MessageEmbed()
        .setImage(user.avatarURL({dynamic: true, size: 512, format: "png"}))
        .setFooter(user.username, user.avatarURL())
        .setColor(client.colors.kamiblue)
    message.channel.send(embed)
}

module.exports.config = {
    name: "avatar",
    aliases: ["av"],
    use: "avatar [@User]",
    description: "Sends the users profile picture as a larger image",
    state: "gamma",
    page: 1
};
