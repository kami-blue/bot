const Discord = require("discord.js");
const fs = require("graceful-fs");
const exec = require('child_process').exec;

module.exports.run = async (client, message, args) => { 
    const myShellScript = exec('uptime -p | cut -c 4-');
    myShellScript.stdout.on('data', (data) => { 
        message.channel.send(
		new Discord.MessageEmbed()
		.setTitle("Uptime")
		.setColor(client.colors.kamiblue)
		.setDescription(data)
	)	
    });

    myShellScript.stderr.on('data', (data) => {
        console.error(data);
    });

}

module.exports.config = {
    name: "uptime",
    aliases: ["up"],
    use: "uptime",
    description: "Shows server uptime",
    state: "gamma",
    page: 4
};