const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    const botUptime = {
        seconds: Math.round(client.uptime / 1000),
        minutes: Math.round(client.uptime / 60000),
        hours: Math.round(client.uptime / 3600000),
        days: Math.round(client.uptime / 86400000),
        months: Math.round(client.uptime / 2628000000),
        years: Math.round(client.uptime / 31536000000),
    }
    let trueUptime = '0'
    const botServer = client.guilds.cache.size
    if (botUptime.seconds < 60) {
        trueUptime = botUptime.seconds + ' seconds'
    } else if (botUptime.minutes < 60) {
        trueUptime = botUptime.minutes + ' minutes'
    } else if (botUptime.hours < 24) {
        trueUptime = botUptime.hours + ' hours'
    } else if (botUptime.days < 30) {
        trueUptime = botUptime.days + ' days'
    } else {
        trueUptime = botUptime.years + ' years'
    }

    message.channel.send(`Uptime: ${trueUptime}`);
}


module.exports.config = {
    name: "uptime",
    aliases: ["up"],
    use: "uptime",
    description: "Find out the bot uptime.",
    state: "gamma",
    page: 4
};