const Discord = require("discord.js");
const fs = require("graceful-fs");

module.exports.run = async (client, message, args) => {

    const itemTypeKey = client.config.helpPages;

    if (!args[0]) args[0] = 1;

    if (isNaN(args[0])) {
        let command = client.commands.filter(c => c.config.name === args[0].toLowerCase());
        if (command.map(c => c.config).length == false) command = client.commands.filter(c => c.config.aliases.indexOf(args[0].toLowerCase()) >= 0);
        command = command.map(c => c.config)[0];
        if (command === undefined) return message.channel.send("There exists nothing at that page.");
        let commandEmbed = new Discord.MessageEmbed()
            .setColor(client.colors.kamiblue)
            .setTitle(command.name)
            .setDescription((`**Description: **${command.description}\n**Use:** \`${client.config.prefix + command.use}\`\n**Aliases:** \`${(command.aliases).join(", ")}\``).replace("**Aliases:** ``", ""))
            .setFooter(`State: ${command.state}`);

        return message.channel.send(commandEmbed)
    }

    if (itemTypeKey[args[0]] === undefined) return message.channel.send("There exists nothing at that page.");
    const helpEmbed = new Discord.MessageEmbed()
        .setColor(client.colors.kamiblue)
        .setTitle(`${(itemTypeKey[args[0]].emoji)} __${itemTypeKey[args[0]].name}__ (Page ${args[0]}/${itemTypeKey.length - 1})`)
        .setDescription(client.commands.filter(c => c.config.page == args[0]).map(c => `\`${client.config.prefix + c.config.name}\`: ${c.config.description}`).join("\n"))
        .setFooter(itemTypeKey[args[0]].footer || " ");

    message.channel.send(helpEmbed);
}

module.exports.config = {
    name: "h",
    aliases: [],
    use: "h [Command]",
    description: "A list of commands.",
    state: "gamma",
    page: 1
};
