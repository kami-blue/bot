const Discord = require("discord.js");
const fs = require("graceful-fs");

module.exports.run = async (client, message, args) => {
        if ((message.channel.id == "724349410858893372") || (message.channel.id == "722436626248237076")) {
        const embed = new Discord.MessageEmbed()
                .setTitle("KAMI против KAMI Blue")
                .setDescription("KAMI (версия для Fabric) и KAMI Blue сильно отличаются.\n\nДля пользователей основными отличиями являются:\nKAMI - для версий `1.16.x` ** Fabric **, а KAMI Blue - для `1.12.2` ** Forge **\nГрафические интерфейсы совершенно разные, как функционально, так и эстетически.\nKAMI и KAMI Blue имеют некоторые одинаковые модули, но есть много различий.\nВы можете получить техническую поддержку по использованию KAMI на их [Discord сервере](https://discord.gg/9hvwgeg).")
                .setColor(client.colors.kamiblue)
                .setTimestamp();
        message.channel.send(embed)
    } else {
        const embed = new Discord.MessageEmbed()
                .setTitle(`KAMI vs KAMI Blue`)
                .setDescription("KAMI (the Fabric version) and KAMI Blue are vastly different.\n\nFor users, the main differences are:\n- KAMI is `1.16.x` **Fabric** and KAMI Blue is `1.12.2` **Forge**.\n- The GUI's are entirely different, both functionally and aesthetically.\n- KAMI and KAMI Blue, while sharing some, have a lot of different features.\n\nYou can get support for using KAMI in their [Discord](https://discord.gg/9hvwgeg).")
                .setColor(client.colors.kamiblue)
                .setTimestamp();
        message.channel.send(embed)
    }
}

module.exports.config = {
    name: "kami",
    aliases: ["kami"],
    use: "kami",
    description: "Differences between KAMI and KAMI Blue",
    state: "gamma",
    page: 2
};
