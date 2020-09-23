const Discord = require("discord.js");
const fs = require("graceful-fs");

module.exports.run = async (client, message, args) => {
    if ((message.channel.id == "724349410858893372") || (message.channel.id == "722436626248237076")) {
        let FaqFreecamRu = new Discord.MessageEmbed()
        .setTitle("Freecam")
        .setDescription("\n**Категория**: Player\n**Описание**: Покинь свое тело и войди в царство богов!")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqFreecamRu)
    } else {
        let FaqFreecamEn = new Discord.MessageEmbed()
        .setTitle("Freecam")
        .setDescription("\n**Category**: Player\n**Description**: Leave your body and transcend into the realm of the gods")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqFreecamEn)
    }
};

module.exports.config = {
    name: "faq/freecam",
    aliases: [],
    use: "faq/freecam",
    description: "What is Freecam?",
    page: 6                                       
};