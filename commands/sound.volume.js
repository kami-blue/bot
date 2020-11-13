const Discord = require("discord.js");
const fs = require("graceful-fs");
const ytdl = require("ytdl-core-discord"),
    ytpl = require("ytpl"),
    ytsearch = require("yt-search"),
    { Util } = require("discord.js");

module.exports.run = async (client, message, args) => {
  config = client.config;  
  const voiceChannel = message.member.voice.channel;
  if (!message.member.voice.channel) return message.channel.send("You are not in a voice channel.")

  const serverQueue = client.queue.get(message.guild.id)
  if (!serverQueue || !serverQueue.songs) return message.channel.send("`❌` I am not currently playing music.")

  const { channel } = message.member.voice;
  if (serverQueue && channel !== message.guild.me.voice.channel) return message.channel.send(` \`❌\` You must be in the same voice channel as the bot to use this command!`).catch(console.error);
  if (!args[0]) return message.channel.send("`🔊` The volume is now " +  serverQueue.volume);
  const volume = parseInt(args[0])
  if (volume >= 200) {
      volume = 200
  }
  serverQueue.volume = volume;
  serverQueue.connection.dispatcher.setVolumeLogarithmic(volume / 250);
  return message.channel.send("`🔊` The volume is now " +  volume);
}



module.exports.config = {
  name: "volume",
  aliases: ["vol", "v"],
  use: "volume [Amount]",
  description: "Set the volume as a number from 0-100",
  state : "gamma",
  page: 5
};


