const Discord = require("discord.js");
const fs = require("graceful-fs");
const fetch = require("node-fetch");
const auth = require("../auth.json")

module.exports.run = async (client, message, args) => {
    if (!args || !args[0]) return;
    try {
        let result;
        let milestone;
        let assignee;
        fetch(`https://api.github.com/repos/kami-blue/${args[0]}/issues/${args[1]}`, {headers: {Authorization: `token ${auth.githubtoken}`}})
            .then(response => response.json())
            .then(data => {
                result = JSON.parse(JSON.stringify(data));
                try{if(!result.milestone.title == null){milestone = result.milestone.title}}catch (err){milestone = "None"}
                try{if(!result.assignee.login == null){assignee = result.assignee.login}}catch (err){assignee = "None"}
                try {
                    let issueEmbed = new Discord.MessageEmbed()
                        .setAuthor("カミブルー！", "https://cdn.discordapp.com/avatars/638403216278683661/1e8bed04cb18e1cb1239e208a01893a1.png", "https://kamiblue.org")
                        .setTitle(result.title)
                        .setURL(result.html_url)
                        .setThumbnail(result.user.avatar_url)
                        .setDescription(result.body)
                        .addField("Labels", result.labels[0].name)
                        .addField("Assignee", assignee)
                        .addField("Milestone", milestone)
                        .setColor(client.colors.kamiblue)

                    message.channel.send(issueEmbed)
                }catch (e) {
                    message.channel.send("Bad issue number or repository!");
                }
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
