const Discord = require("discord.js");
const fs = require("graceful-fs");
module.exports.run = async (client, message, args) => {

    const randomChimpEvents = [
        "https://i.imgur.com/CwQRLGK.mp4",
        "https://tenor.com/view/monkey-boat-driving-speed-gif-16514438",
        "https://tenor.com/view/monkey-lick-yum-delicious-hot-gif-9727684",
        "https://tenor.com/view/monkey-dabke-gif-3523468",
        "https://tenor.com/view/monkey-gif-7222281",
        "https://tenor.com/view/monkey-callme-gif-4577639",
        "https://tenor.com/view/monkey-haircut-gif-9838558",
        "https://tenor.com/view/curious-what-monkey-chimp-walking-gif-10714369",
        "https://tenor.com/view/funny-gif-10879973",
        "https://media.discordapp.net/attachments/696038770558107679/700191886681309214/ShallowUnhealthyDeermouse-size_restricted.gif",
        "https://tenor.com/view/monkey-with-money-happy-withmoney-swag-dollars-more-money-gif-14116367",
        "https://cdn.discordapp.com/attachments/537457343622021131/736039744206798928/Monkey_Orange.gif"
    ];

    message.channel.send(randomChimpEvents[Math.floor(Math.random() * randomChimpEvents.length)]);

}

module.exports.config = {
    name: "randomchimpevent",
    aliases: ["funnymonkey"],
    use: "randomchimpevent",
    description: "Truly, a random chimp event.",
    state: "gamma",
    page: 1
};
