const Discord = require("discord.js");
const fs = require("graceful-fs");

module.exports.run = async (client, message, args) => {
    
    if (message.channel.id == "722436626248237076") {
        const embed = new Discord.MessageEmbed()
                .setTitle("дарить")
                .setColor(client.colors.kamiblue)
                .setThumbnail('https://pngimg.com/uploads/donate/donate_PNG54.png')
                .setDescription('Вы можете поддержать разработчиков клиента задонатив небольшую сумму используя платежную систему PayPal.\nПри донате от $5 вы можете получить специальный плащ KAMI Blue, который будет виден всем кто использует KAMI Blue.\nСсылка на PayPal: https://kamiblue.org/donate')
        message.channel.send(embed)
    } else {
        const embed = new Discord.MessageEmbed()
                .setTitle("Donate")
                .setColor(client.colors.kamiblue)
                .setThumbnail('https://pngimg.com/uploads/donate/donate_PNG54.png')
                .setDescription('You can support developers of KAMI Blue for a small amount using PayPal.\nIf you donate from $5 you can get a special KAMI Blue cape that will be visible to everyone who uses the KAMI Blue client.\nPayPal donation link: https://kamiblue.org/donate')
        message.channel.send(embed)
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
