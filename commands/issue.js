const Discord = require("discord.js");
const fs = require("graceful-fs");
const fetch = require("node-fetch");
const auth = require("../auth.json");
/**
 * @author humboldt123
 * Edited by sourTaste000
 * Fixed by humboldt123
 * Updated by sourTaste000 on 8/2/2020
 * Updated by sourTaste000(again) on 8/10/2020
 * Updated by sourTaste000(bruh...again) on 8/18/2020
 */

module.exports.run = async (client, message, args) => {
    if (!args || !args[0]) return;
    if(args[0] === "number") {
        const msg = await message.channel.send("Fetching issues...")
        fetch(`https://api.github.com/repos/kami-blue/${args[1]}/issues/${args[2]}`, {headers: {Authorization: `token ${auth.githubtoken}`}})
            .then(response => response.json())
            .then(data => {
                let result = JSON.parse(JSON.stringify(data));
                if (result.html_url.includes("pull")) {
                    let result = JSON.parse(JSON.stringify(data));
                    fetch(result.pull_request.url)
                        .then(response => response.json())
                        .then(data => {
                            let result = JSON.parse(JSON.stringify(data));
                            let pullEmbed = new Discord.MessageEmbed()
                                .setAuthor("カミブルー！", "https://cdn.discordapp.com/avatars/638403216278683661/1e8bed04cb18e1cb1239e208a01893a1.png", "https://kamiblue.org")
                                .setTitle(result.title)
                                .setURL(result.html_url)
                                .setDescription(result.body)
                                .setThumbnail(result.user.avatar_url)
                                .addField("Additions: ", result.additions, true)
                                .addField("Deletions: ", result.deletions, true)
                                .addField("Commits:", result.commits, true)
                                .addField("Changed Files", result.changed_files, true)
                                .addField("Comments", result.comments, true)
                                .setColor(client.colors.kamiblue)
                            msg.delete()
                            message.channel.send(pullEmbed)
                        })
                        .catch((error) => {
                            message.channel.send("Bad issue number or repository!")
                            console.error('Error:', error)
                        })
                } else {
                    let result = JSON.parse(JSON.stringify(data));
                    let i = 0;
                    let milestone = result.milestone || {"title": "No Milestone"};
                    let assignee = result.assignee || {"login": "None"};
                    let labels = result.labels || {"login": "None"};
                    let status = result.state;
                    let labels1 = [];
                    if (labels === undefined || isNaN(labels)) {
                        for (i in labels) {
                            labels1.push(labels[i].name)
                        }
                    } else {
                        labels1 = "No Labels"
                    }
                    let issueEmbed = new Discord.MessageEmbed()
                        .setAuthor("カミブルー！", "https://cdn.discordapp.com/avatars/638403216278683661/1e8bed04cb18e1cb1239e208a01893a1.png", "https://kamiblue.org")
                        .setTitle(result.title)
                        .setURL(result.html_url)
                        .setThumbnail(result.user.avatar_url)
                        .setDescription(result.body)
                        .addField("Labels", labels1)
                        .addField("Assignee", assignee.login)
                        .addField("Status", status)
                        .addField("Milestone", milestone.title)
                        .setColor(client.colors.kamiblue)
                    msg.delete()
                    message.channel.send(issueEmbed)
                }
            })
            .catch((error) => {
                message.channel.send("Bad issue number or repository!");
                console.error('Error:', error);
            })
    } else if(args[0] === "keyword"){
        const msg = await message.channel.send("Fetching issues...")
        fetch(`https://api.github.com/search/issues?q=${args[2]}+repo:kami-blue/${args[1]}`, {headers: {Authorization: `token ${auth.githubtoken}`}})
            .then(response => response.json())
            .then(data => {
                //trash code lmao
                const final = JSON.parse(JSON.stringify(data));
                msg.edit(`DM'ed you the results!`)
                for(let i = 0; i <= final.total_count - 1; i++){
                    message.author.send(`Issue Number: ${final.items[i].number}, Title: ${final.items[i].title}`)
                }
            })
            .catch((err) => {message.channel.send("Cannot find the issue!"); console.error(err)})
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
