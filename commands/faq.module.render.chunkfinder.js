const Discord = require("discord.js");
const fs = require("graceful-fs");

module.exports.run = async (client, message, args) => {
    if ((message.channel.id == "724349410858893372") || (message.channel.id == "722436626248237076")) {
        let FaqChunkFinderRu = new Discord.MessageEmbed()
        .setTitle("ChunkFinder")
        .setDescription("\n**Категория**: Render\n**Описание**: Подсвечивает только что сгенерированные чанки")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqChunkFinderRu)
    } else {
        let FaqChunkFinderEn = new Discord.MessageEmbed()
        .setTitle("ChunkFinder")
        .setDescription("\n**Category**: Render\n**Description**: Highlights newly generated chunks")
        .setColor(client.colors.kamiblue)
        .setFooter("カミブルー！", client.user.avatarURL())
        message.channel.send(FaqChunkFinderEn)
    }
};

module.exports.config = {
    name: "faq/chunkfinder",
    aliases: [],
    use: "faq/chunkfinder",
    description: "What is ChunkFinder?",
    page: -1                                       
};