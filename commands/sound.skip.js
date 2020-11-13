const Discord = require("discord.js");
const fs = require("graceful-fs");
const ytdl = require("ytdl-core-discord"),
    ytpl = require("ytpl"),
    ytsearch = require("yt-search"),
    { Util } = require("discord.js");

let usedVote = false;
module.exports.run = async (client, message, args) => {
    config = client.config;
    const voiceChannel = message.member.voice.channel;
    if (!message.member.voice.channel) return message.channel.send("You are not in a voice channel.")

    const serverQueue = client.queue.get(message.guild.id)
    if (!serverQueue || !serverQueue.songs) return message.channel.send("`❌` I am not currently playing music.")

    const { channel } = message.member.voice;
    if (serverQueue && channel !== message.guild.me.voice.channel) return message.channel.send(` \`❌\` You must be in the same voice channel as the bot to use this command!`).catch(console.error);

    if (serverQueue && channel) {
        const members = channel.members.filter(m => !m.user.bot);
        if (members.size === 1) {
            message.channel.send(`\`⏩\` Skipping ${serverQueue.queue[0].title}`)
        } else {
            if (!usedVote) {
                usedVote = true;
                const votesRequired = Math.ceil(members.size * .6 - 1);
                const embed = new Discord.MessageEmbed()
                    .setDescription(`Total Votes Required to Skip: ${votesRequired}`)
                    .setFooter("You can ask someone with the Music role to force skip this song!")
                    .setColor(0x9b90ff)
                const msg = await message.channel.send(embed)
                await msg.react("⏩")


                const filter = (reaction, user) => {
                    if (user.bot) return false;

                    const { channel } = message.guild.members.cache.get(user.id).voice;
                    if (channel) {
                        if (channel.id === serverQueue.voiceChannel.id) {
                            return ['👍'].includes(reaction.emoji.name);
                        }
                        return false;
                    } else {
                        return false;
                    }
                }
                try {
                    const reactions = await msg.awaitReactions(filter, { max: votesRequired, time: 10000, errors: ['time'] });
                    const totalVotes = reactions.get('👍').users.cache.filter(u => !u.bot);
                    if (totalVotes.size >= votesRequired) {
                        usedVote = false;
                    }
                } catch (err) {
                    console.log(err)
                    usedVote = false;
                }
            } else {
                message.channel.send(' `❌` A vote skip has already been triggered previously!')
            }
        }
    }






    serverQueue.playing = false
    await message.channel.send("`⏩`Song skipped.")
    serverQueue.connection.dispatcher.end();

}



module.exports.config = {
    name: "skip",
    aliases: [],
    use: "skip",
    description: "Skips the song currently playing.",
    state : "gamma",
    page: 5
};


