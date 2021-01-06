const Discord = require("discord.js");
const fs = require("graceful-fs");

module.exports.run = async (client, message, args) => {
    if (message.channel.id == "722436626248237076") {
        const embed = new Discord.MessageEmbed()
                .setTitle("Установка")
                .setDescription("KAMI Blue можно скачать из <#634549110145286156> или с нашего [сайта](https://kamiblue.org/download)\n\nЭто Forge мод на версию `1.12.2`. Вы можете сделать двойной клик по `.jar` файлу чтобы открыть установщик.\nЕсли вы истользуете MultiMC, переместите `.jar` файл в папку с модами\n\nИспользуйте `;kami` для получения дополнительной информации о различных версиях.")
                .setColor(client.colors.kamiblue)
                .setTimestamp();
        message.channel.send(embed)
    } else {
        const embed = new Discord.MessageEmbed()
                .setTitle("Installation")
                .setDescription("Download this from <#634549110145286156> or from the [website](https://kamiblue.org/download).\n\nThis is a `1.12.2` Forge mod. You can double click the jar to open the installer.\nIf you use MultiMC or something, you can drag the jar file to your instance's mods folder.\n\nUse `;kami` for more information about different versions.")
                .setColor(client.colors.kamiblue)
                .setTimestamp();
        message.channel.send(embed)
    }
};

module.exports.config = {
    name: "install",
    aliases: [],
    use: "install",
    description: "How to install KAMI Blue",
    state: "gamma",
    page: 2
};
