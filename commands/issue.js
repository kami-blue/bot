const Discord = require("discord.js");
const fs = require("graceful-fs");
const fetch = require("node-fetch");
const auth = require("../auth.json");

/**
 * @author humboldt123
 * Edited by sourTaste000
 * Fixed by humboldt123
 * Updated by sourTaste000 on 8/2/2020
 */

module.exports.run = async (client, message, args) => {
    if (!args || !args[0]) return; 
    try { // declare let below not here, thats now how the let scope works :/
        fetch(`https://api.github.com/repos/kami-blue/${args[0]}/issues/${args[1]}`, {headers: {Authorization: `token ${auth.githubtoken}`}})
            .then(response => response.json())
            .then(data => {
                result = JSON.parse(JSON.stringify(data));
                try {
                    let i = 0;
                    let j = 0;
                    let milestone = result.milestone || {"title":"No Milestone"};
                    let assignee = result.assignee || {"login":"None"};
                    let labels = result.labels || [{"name":"None"}]; // Such a fucking hack but it looks fancy
                    let labels1 = [];
                    for(i in labels){labels1.push(labels[i].name)}
                    let issueEmbed = new Discord.MessageEmbed()
                        .setAuthor("カミブルー！", "https://cdn.discordapp.com/avatars/638403216278683661/1e8bed04cb18e1cb1239e208a01893a1.png", "https://kamiblue.org")
                        .setTitle(result.title)
                        .setURL(result.html_url)
                        .setThumbnail(result.user.avatar_url)
                        .setDescription(result.body)
                        .addField("Labels", labels1)
                        .addField("Assignee", assignee.login)
                        .addField("Milestone", milestone.title)
                        .setColor(client.colors.kamiblue)

                    message.channel.send(issueEmbed)
                } catch (e) {
                    console.log(e);
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
