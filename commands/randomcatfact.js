const Discord = require("discord.js");
const fs = require("graceful-fs");
const cats = require('cat-ascii-faces')
const catFacts = require('cat-facts');

/**
 * @module randomcatfact
 * @author sourTaste000
 */

module.exports.run = async (client, message, args) => {
    let catEmbed = new Discord.MessageEmbed()
        .setColor(client.colors.kamiblue)
        .setTitle(catFacts.random())
        .setDescription(cats())
        .setImage(`https://cataas.com/cat`)

    message.channel.send(catEmbed);

}

module.exports.config = {
    name: "randomcatfact",
    aliases: ["cat"],
    use: "randomcatfact",
    description: "Shows a random cat fact!",
    state: "gamma",
    page: 4
};
