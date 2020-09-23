const Discord = require("discord.js");
const fs = require("graceful-fs");

module.exports.run = async (client, message, args) => {
    if ((message.channel.id == "724349410858893372") || (message.channel.id == "722436626248237076")) {
        let FaqFakeVanillaClientRu = new Discord.MessageEmbed()
        .setTitle("FakeVanillaClient")
        .setDescription("\n**Категория**: Misc\n**Описание**: Подделывает безмодовый клиент при подключении")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqFakeVanillaClientRu)
    } else {
        let FaqFakeVanillaClientEn = new Discord.MessageEmbed()
        .setTitle("FakeVanillaClient")
        .setDescription("\n**Category**: Misc\n**Description**: Fakes a modless client when connecting")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqFakeVanillaClientEn)
    }
};

module.exports.config = {
    name: "faq/fakevanillaclient",
    aliases: [],
    use: "faq/fakevanillaclient",
    description: "What is FakeVanillaClient?",
    page: 6
};