const Discord = require("discord.js");
const fs = require("graceful-fs");

module.exports.run = async (client, message, args) => {
    const DonateFaqEmbedRu = new Discord.MessageEmbed()
    .setColor(client.colors.kamiblue)
    .setThumbnail('https://pngimg.com/uploads/donate/donate_PNG54.png')
    .setDescription('You can support developers of KAMI Blue for a small amount using the PayPal payment system.\nIf you donate from $5 you can get a special KAMI Blue cape that will be visible to everyone who uses the KAMI Blue client.\nPayPal donation link: https://kamiblue.org/donate')
    const DonateFaqEmbedEn = new Discord.MessageEmbed()
    .setColor(client.colors.kamiblue)
    .setThumbnail('https://pngimg.com/uploads/donate/donate_PNG54.png')
    .setDescription('Вы можете поддержать разработчиков клиента задонатив небольшую сумму используя платежную систему PayPal.\nПри донате от $5 вы можете получить специальный плащ KAMI Blue, который будет виден всем кто использует KAMI Blue.\nСсылка на PayPal: https://kamiblue.org/donate')
    if ((message.channel.id == "724349410858893372") || (message.channel.id == "722436626248237076")) {
        message.channel.send(DonateFaqEmbedRu)
    } else {
        message.channel.send(DonateFaqEmbedEn)
    }
};

module.exports.config = {
    name: "donate",
    aliases: [],
    use: "donate",
    description: "Donate information",
    state: "gamma",
    page: 2
};
