const Discord = require("discord.js");
const fs = require("graceful-fs");

module.exports.run = async (client, message, args) => {
    if ((message.channel.id == "724349410858893372") || (message.channel.id == "722436626248237076")) {
        let FaqFakeGamemodeRu = new Discord.MessageEmbed()
        .setTitle("FakeGamemode")
        .setDescription("\n**Категория**: Misc\n**Описание**: Меняет ваш режим игры со стороны клиента")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqFakeGamemodeRu)
    } else {
        let FaqFakeGamemodeEn = new Discord.MessageEmbed()
        .setTitle("FakeGamemode")
        .setDescription("\n**Category**: Misc\n**Description**: Fakes your current gamemode client side")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqFakeGamemodeEn)
    }
};

module.exports.config = {
    name: "faq/fakegamemode",
    aliases: [],
    use: "faq/fakegamemode",
    description: "What is FakeGamemode?",
    page: -1
};