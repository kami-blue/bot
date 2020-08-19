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
 * Updated by sourTaste000(...again) on 8/18/2020
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
                    message.channel.send(createEmbed(false, result))
                    msg.delete()
                } else {
                    message.channel.send(createEmbed(true, result))
                    msg.delete()
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
                const final = JSON.parse(JSON.stringify(data));
                if (final.items[0].html_url.includes("pull")) {
                    message.channel.send(createEmbed(false, final))
                } else {
                    message.channel.send(createEmbed(true, final))
                }
                msg.edit("If this is not the issue/pull you want, try use more specific words. \n ex. `KamiMoji should be large in chat if it's the only characters in the message` instead of `KamiMoji`.")
            })
            .catch((err) => {message.channel.send("Cannot find the issue!"); console.error(err)})
    }

    /**
     * Creates an embed so my ide stops complaining about duplicated code fragment
     * @param issue Boolean
     * @param result parsed JSON
     */
    function createEmbed(issue, result){
        try {
            if (issue === true) {
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
                } else {labels1 = "No Labels"}
                return new Discord.MessageEmbed()
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
            } else if (issue === false) {
                return new Discord.MessageEmbed()
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
                    .setColor(client.colors.kamiblue);
            }
        } catch(err) {
            console.error("Error while creating embed!")
            console.error(err)
        }
    }
};

module.exports.config = {
    name: "issue",
    aliases: ["issues"],
    use: "issue [mode] [repoName] [issueNumber]",
    description: "Fetches github link of issue",
    state: "gamma",
    page: 3
};
