const fetch = require('node-fetch');
const Discord = require("discord.js");
const fs = require("graceful-fs");

module.exports.run = async (client, message, args) => {
    let result;
    try {
        //message.channel.send(`https://www.thecolorapi.com/id?${args[0]}=${args[1]}`);
        fetch(`https://www.thecolorapi.com/id?${args[0]}=${args[1]}`)
            .then(response => response.json())
            .then(data => {
                result = JSON.parse(JSON.stringify(data));
                let colorEmbed = new Discord.MessageEmbed()
                    .setTitle(`Color Value of ${args[0]} ${args[1]}`)
                    .setDescription(`Color name: ${result.name.value} \n Hex Value: ${result.hex.value} \n RGB Value: ${result.rgb.value} \n HSL Value: ${result.hsl.value} \n HSV Value: ${result.hsv.value} \n CMYK Value: ${result.cmyk.value}`)
                    .setThumbnail(result.image.named)
                    .setColor(result.hex.value)
                message.channel.send(colorEmbed)
            })
    } catch (err) {
        message.channel.send("Error parsing color! Use `;help color`")
        console.error(err);
    }
}

module.exports.config = {
    name: "color",
    aliases: [],
    use: "color [type] [value]",
    description: "Gets color",
    state: "gamma",
    page: 1
};