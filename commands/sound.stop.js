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

  const serverQueue = client.queue.get(message.guild.id);
  if (!serverQueue || !serverQueue.songs) return message.channel.send("`❌` I am not currently playing music.");

  const { channel } = message.member.voice;
  if (serverQueue && channel !== message.guild.me.voice.channel) return message.channel.send(` \`❌\` You must be in the same voice channel as the bot to use this command!`).catch(console.error);
  serverQueue.songs = [];
  if (serverQueue.connection.dispatcher == null) return serverQueue.songs = [];
  serverQueue.connection.dispatcher.end();
  return message.channel.send("`⏹` Song stopped.");
  
} 



module.exports.config = {
  name: "stop",
  aliases: [],
  use: "stop",
  description: "Stop the music currently playing.",
  state : "gamma",
  page: 5
};

