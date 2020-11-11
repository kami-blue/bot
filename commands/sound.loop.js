const ytdl = require("ytdl-core-discord")

/**
 * @author vypr-ysl
 */

module.exports.run = async (client, message, args) => {

    config = client.config;
    if (!message.member.roles.cache.find(role => config["dj_role"] === role.name)) return message.channel.send("You do not have permissions to use music.");
    if (!message.member.voice.channel) return message.channel.send("You are not in a voice channel.")

        const serverQueue = client.queue.get(message.guild.id);
        if (!serverQueue) return message.channel.send('There is nothing playing!');

        const { channel } = message.member.voice;
        if (serverQueue && channel !== message.guild.me.voice.channel) return message.channel.send(` \`❌\` You must be in the same channel as the bot to use this command!`).catch(console.error);


    serverQueue.loop = !serverQueue.loop;
    client.queue.set(message.guild.id, serverQueue);

    message.channel.send(`\`🔄\` Loop is now ${serverQueue.loop ? "**on**!" : "**off**!"}`).catch(console.error);
}



module.exports.config = {
    name: "loop",
    aliases: ["repeat"],
    use: "loop",
    description: "Loop the currently playing song.",
    state: "gamma",
    page: 5
};