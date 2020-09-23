const Discord = require("discord.js");
const fs = require("graceful-fs");

module.exports.run = async (client, message, args) => {
    if ((message.channel.id == "724349410858893372") || (message.channel.id == "722436626248237076")) {
        let FaqLoginMessageRu = new Discord.MessageEmbed()
        .setTitle("LoginMessage")
        .setDescription("\n**Категория**: Chat\n**Описание**: Отправляет заданное сообщение в публичный чат при входе на сервер.")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqLoginMessageRu)
    } else {
        let FaqLoginMessageEn = new Discord.MessageEmbed()
        .setTitle("LoginMessage")
        .setDescription("\n**Category**: Chat\n**Description**: Sends a given message to public chat on login.")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqLoginMessageEn)
    }
};

module.exports.config = {
    name: "faq/loginmessage",
    aliases: [],
    use: "faq/loginmessage",
    description: "What is LoginMessage?",
    state: "gamma",
    page: 6
};