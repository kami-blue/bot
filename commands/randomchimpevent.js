const Discord = require("discord.js");
const fs = require("graceful-fs");
module.exports.run = async (client, message, args) => {

  const randomChimpEvents = [
    "https://bigrat.monster/media/monkeys/CwQRLGK.mp4?.gif",
    "https://bigrat.monster/media/monkeys/Monkey_Orange.gif",
    "https://bigrat.monster/media/monkeys/ShallowUnhealthyDeermouse-size_restricted.gif",
    "https://bigrat.monster/media/monkeys/chimp.gif",
    "https://bigrat.monster/media/monkeys/curiouswhat.gif",
    "https://bigrat.monster/media/monkeys/monkeyboat.gif",
    "https://bigrat.monster/media/monkeys/monkeydabke.gif",
    "https://bigrat.monster/media/monkeys/monkeylick.gif",
    "https://bigrat.monster/media/monkeys/monkeymoney.gif",
    "https://bigrat.monster/media/monkeys/orangutan.gif",
    "https://bigrat.monster/media/monkeys/piere.gif",
    "https://bigrat.monster/media/monkeys/telephonemonkey.gif"
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
