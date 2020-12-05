const Discord = require("discord.js");
const fs = require("graceful-fs");

module.exports.run = async (client, message, args) => {
    const embed = new Discord.MessageEmbed()
                .setTitle(`Jar fix for Windows`)
                .setDescription(`On Windows, jars can get associated with WinRar or similar programs. The JarFix program restores the `JAVA_HOME` variable and **sets jar files to be opened with Java.**`)
                .setColor(client.colors.kamiblue)
                .setTimestamp();
    message.channel.send(embed)
    message.channel.send({
        files: ['/home/mika/bot/jarfix.exe']
    });

    
}

module.exports.config = {
    name: "jarfix",
    aliases: [],
    use: "jarfix",
    description: "Fix jars on windows",
    state: "gamma",
    page: 2
};
