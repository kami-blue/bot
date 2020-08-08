const Discord = require("discord.js");
const fs = require("graceful-fs");
const fetch = require("node-fetch");

module.exports.run = async (client, message, args) => {
    fetch(`https://safebooru.org/index.php?page=dapi&s=post&q=index&pid=${Math.floor(Math.random() * 3006694)}&limit=1&json=1&rating=safe`)
        .then(response => response.json())
        .then(data => {
            if(message.channel.nsfw === true){
                const final = JSON.parse(JSON.stringify(data));
                message.channel.send(`https://safebooru.org/images/${final[0].directory}/${final[0].image}`)
            } else {
                message.channel.send("Use this command in an nsfw channel!")
            }
        })
}

module.exports.config = {
    name: "anime",
    aliases: [],
    use: "anime",
    description: "Gives you a random image form safebooru",
    state: "gamma",
    page: 1
};
