const Discord = require("discord.js");
const fs = require("graceful-fs");

module.exports.run = async (client, message, args) => {
    if ((message.channel.id == "724349410858893372") || (message.channel.id == "722436626248237076")) {
        let FaqSpammerRu = new Discord.MessageEmbed()
        .setTitle("Spammer")
        .setDescription("\n**Категория**: Chat\n**Описание**: Спамит текст из файла с заданной задержкой в ​​чат\nОткройте `.minecraft` и создайте там файл spammer.txt, затем редактируйте его, где новое каждое новое сообщение начинается с новой строки, учтите, что Windows по умолчанию скрывает тип файла, то есть вам нужно создать простой текстовый файл с названием spammer!")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqSpammerRu)
    } else {
        let FaqSpammerEn = new Discord.MessageEmbed()
        .setTitle("Spammer")
        .setDescription("\n**Category**: Chat\n**Description**: Spam text from a file with a specified delay into the chat \ nOpen `.minecraft` and create a spammer.txt file there, then edit it, where each new message starts on a new line, note that Windows hides the file type by default, then there you have to create a simple text file called spammer!")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqSpammerEn)
    }
};

module.exports.config = {
    name: "faq/spammer",
    aliases: [],
    use: "faq/spammer",
    description: "What is Spammer?",
    state: "gamma",
    page: 6
};