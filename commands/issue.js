const Discord = require("discord.js");
const fs = require("graceful-fs");
const fetch = require("node-fetch");


module.exports.run = async (client, message, args) => {
    if (!args || !args[0]) return;
    try {
        let result;
        let milestone;
        fetch(`https://api.github.com/repos/kami-blue/${args[0]}/issues/${args[1]}`)
            .then(response => response.json())
            .then(data => {
                result = JSON.parse(JSON.stringify(data));
                try{if(!result.milestone.title == null){milestone = result.milestone.title}}catch (err){milestone = "None"}
                let issueEmbed = new Discord.MessageEmbed()
                    .setAuthor("カミブルー！", "https://cdn.discordapp.com/avatars/638403216278683661/1e8bed04cb18e1cb1239e208a01893a1.png", "https://kamiblue.org")
                    .setTitle(result.title)
                    .setURL(result.html_url)
                    .setThumbnail(result.user.avatar_url)
                    .setDescription(result.body)
                    .addField("Assignee", `${result.assignee.login}`)
                    //someone fix these
                    .addField("Labels", result.labels.forEach(length => length))
                    .addField("Assignee", result.assignees.forEach(assignees => assignees))

                    .addField("Milestone", milestone)
                    .setColor(client.colors.kamiblue)
                message.channel.send(issueEmbed)
            })
    } catch (e) {
        message.channel.send("*Here's the issue!*\nCould not confirm validity of issue\nhttps://github.com/kami-blue/" + args[0] + "/issues/" + args[1]);
    }

};

module.exports.config = {
    name: "issue",
    aliases: ["issues"],
    use: "issue [repoName] [issueNumber]",
    description: "Fetches github link of issue",
    state: "gamma",
    page: 3
};
