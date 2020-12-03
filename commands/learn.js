const Discord = require("discord.js");
const fs = require("graceful-fs");

module.exports.run = async (client, message, args) => {
    const embed = new Discord.MessageEmbed()
                .setTitle(`Learning to make a Minecraft mod`)
                .setDescription(`You need to be able to walk before you can run.\nIn order to make a Minecraft mod, you should at least know the basics of Java or Kotlin first, these resources can help you learn the fundamentals of Java, Gradle, Forge and Kotlin.\n\nIf you don't take the time to learn the languages you're working on, you **will** get tripped up by the smallest problem that could have been resolved if you actually learned. **No one will help you if you don't make an effort to learn first.**\n\n<https://docs.gradle.org/current/samples/sample_building_java_applications.html>\n<https://kotlinlang.org/docs/tutorials/>\n<https://minecraft.gamepedia.com/Tutorials/Creating_Forge_mods>\n<https://www.codecademy.com/learn/learn-java>`)
                .setColor(client.colors.kamiblue)
                .setTimestamp();
    message.channel.send(embed)
}

module.exports.config = {
    name: "learn",
    aliases: [],
    use: "learn",
    description: "What to learn before making a Minecraft mod",
    state: "gamma",
    page: 2
};
