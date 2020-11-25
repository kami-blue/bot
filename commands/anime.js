const Discord = require("discord.js");
const fs = require("graceful-fs");
const fetch = require("node-fetch");

module.exports.run = async (client, message, args) => {
    if (message.channel.nsfw === true) {
        const m = await message.channel.send("Fetching image...");
        fetch(`https://safebooru.org/index.php?page=dapi&s=post&q=index&pid=${Math.floor(Math.random() * 3006694)}&limit=1&json=1&rating=safe`)
            .then(response => response.json())
            .then(data => {
                const final = JSON.parse(JSON.stringify(data));
                m.edit(`https://safebooru.org/images/${final[0].directory}/${final[0].image}`)
            })
    } else {
        message.channel.send("Use this command in an nsfw channel!")
    }

}

module.exports.config = {
    name: "anime",
    aliases: [],
    use: "anime",
    description: "Gives you a random image from safebooru",
    state: "gamma",
    page: 1
};
