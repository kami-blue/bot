const Discord = require("discord.js");
const fs = require("graceful-fs");
const cats = require('cat-ascii-faces');
const catFacts = require('cat-facts');
const symbols = 'qwertyuiopasdfghjk';
const symbolarray = symbols.split('');
function randomsymbols() {
    let temp = ''
    for (i = 0; i <= 5; i++) {
        temp += symbolarray[Math.floor(Math.random() * symbolarray.length)]
    }
    return temp
}
/**
 * @module randomcatfact
 * @author sourTaste000
 */

 
module.exports.run = async (client, message, args) => {
    let catEmbed = new Discord.MessageEmbed()
        .setColor(client.colors.kamiblue)
        .setTitle(catFacts.random())
        .setDescription(cats())
        .setImage(`http://www.randomkittengenerator.com/cats/rotator.php`+"?"+`${randomsymbols()}`)

    message.channel.send(catEmbed);

}

module.exports.config = {
    name: "randomcatfact",
    aliases: ["cat"],
    use: "randomcatfact",
    description: "Shows a random cat fact!",
    state: "gamma",
    page: 3
};
