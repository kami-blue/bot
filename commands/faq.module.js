const Discord = require("discord.js");
const fs = require("graceful-fs");
const moduleslist = require("./utils/moduleslist");

function sendFAQMessage(nameru, nameen, descru, descen) {
	let name = nameen;
	let desc = descen;
	if (message.channel.id == "722436626248237076") {
		name = nameru;
		desc = descru;
	}
	let ModuleFAQ = new Discord.MessageEmbed()
            .setTitle(name)
            .setDescription(desc)
            .setColor(client.colors.kamiblue)
            .setFooter("カミブルー！", client.user.avatarURL())
    message.channel.send(ModuleFAQ)
}

module.exports.run = async (client, message, args) => {
    try {
        const md = moduleslist.modules[args[0].toLowerCase()];
        const title = md.name;
        const descriptionru = md.descriptionru;
        const descriptionen = md.descriptionen;
        sendFAQMessage(title, title, descriptionru, descriptionen);
    } catch(e) {
    	sendFAQMessage("Ошибка", "Error", "\n**Модуль не найден!**", "\n**Module not found!**");
    }
};

module.exports.config = {
    name: "module",
    aliases: [],
    use: "module [Module]",
    description: "Information about modules",
    state: "gamma",
    page: 2
};
