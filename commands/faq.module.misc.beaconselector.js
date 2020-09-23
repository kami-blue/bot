const Discord = require("discord.js");
const fs = require("graceful-fs");

module.exports.run = async (client, message, args) => {
    if ((message.channel.id == "724349410858893372") || (message.channel.id == "722436626248237076")) {
        let FaqBeaconSelectorRu = new Discord.MessageEmbed()
        .setTitle("BeaconSelector")
        .setDescription("\n**Категория**: Misc\n**Описание**: Выберите любой из 5 эффектов маяка независимо от базовой высоты маяка.")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqBeaconSelectorRu)
    } else {
        let FaqBeaconSelectorEn = new Discord.MessageEmbed()
        .setTitle("BeaconSelector")
        .setDescription("\n**Category**: Misc\n**Description**: Choose any of the 5 beacon effects regardless of beacon base height")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqBeaconSelectorEn)
    }
};

module.exports.config = {
    name: "faq/beaconselector",
    aliases: [],
    use: "faq/beaconselector",
    description: "What is BeaconSelector?",
    state: "gamma",
    page: -1
};