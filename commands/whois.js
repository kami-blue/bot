const Discord = require("discord.js");
const fs = require("graceful-fs");

function timeConverter(unixTimestamp) {
    var timestampDateObject = new Date(unixTimestamp);
    var months = ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var year = timestampDateObject.getFullYear();
    var month = months[timestampDateObject.getMonth()];
    var date = timestampDateObject.getDate();
    var hour = timestampDateObject.getHours();
    let afternoon;
    if (hour > 12) ((afternoon = "PM") && (hour -= 12))
    var minute = timestampDateObject.getMinutes();
    var second = timestampDateObject.getSeconds();
    var time = `${month} ${date} ${year} ${hour}:${minute}:${second} ${afternoon || "AM"}`; //uses american datetime because B)))))
    return time;
}


module.exports.run = async (client, message, args) => {


    let user
    if (!args[0]) {
        user = client.users.cache.get(message.author.id);
    } else {
        user = client.users.cache.get(args[0].replace(/[@!<>]/g, ""));
    }
    if (!user) return message.channel.send("Please mention a valid user.");


    let devices = " ";
    let guildNickname;
    let guildJoinDate = "User is not in guild";
    //<:widecatflushed:736408162521055242>
    //<:ping:736408161942110269>
    //<:bot:736408162088910849>
    const userJoinDate = timeConverter(user.createdTimestamp);
    if (message.guild.member(user)) (guildJoinDate = timeConverter(message.guild.member(user).joinedTimestamp)) && (guildNickname = message.guild.member(user).nickname || user.username);


    let game = user.presence.activities;
    if (user.presence.clientStatus) {
        if (user.presence.clientStatus["desktop"]) devices += `Desktop<:desktop:736408162114207834>\n`;
        if (user.presence.clientStatus["mobile"]) devices += `Mobile <:mobile:736408161627406459>\n`;
        if (user.presence.clientStatus["web"]) devices += `Web <:web:736408162487238716>\n`;
    } else devices += "Not Online";
    if (user.bot) devices = "<:bot:736408162088910849>"; // BOT tag now displays regardless

    let status;
    if (user.presence.status === "online") status = (`Online <:online:736408163405791282>`);
    else if (user.presence.status === "idle") status = (`Idle <:idle:736408162051162162>`);
    else if (user.presence.status === "dnd") status = (`Do Not Disturb <:dnd:736408161573142571>`);
    else if (user.presence.status === "offline") status = (`Offline <:offline:736408161698840660>`);
        else { 
        status = (`Offline <:offline:736408161698840660>`);
    }
    if (user.presence.activities[0] && user.presence.activities[0].type === "STREAMING") status = `Streaming <:streaming:736408161849835541>`;

    let statusBlock = [];
    let thumbnail = user.avatarURL({dynamic: true});

    if (user.presence.activities) {
        for (const activityIndex in user.presence.activities) {
            const activity = user.presence.activities[activityIndex];
            let presenceName;
            let presenceDetails;
            let emoji;
            presenceName = (activity.name).replace("Listening", "Listening To");

            if (activity.details) presenceDetails = activity.detais;
            if (presenceName === "Custom Status") {
                if (activity.emoji) {
                    emoji = `${activity.emoji.name}`;
                    if (activity.emoji.id) emoji = `<${(activity.emoji.animated).toString().replace(true, "a").replace("false", "")}:${activity.emoji.name}:${activity.emoji.id}>`;
                }
                presenceDetails = (emoji || "") + " " + (activity.state || "");
            } else if (presenceName === "Spotify") {
                thumbnail = `${activity.assets.largeImage}`.replace("spotify:", "https://i.scdn.co/image/");
                presenceDetails = `${activity.details} by ${activity.state} on ${activity.assets.largeText}`;
            } else (presenceName = (activity.type).toLowerCase().charAt(0).toUpperCase() + (activity.type).toLowerCase().slice(1)) && (presenceDetails = activity.name);

            if (activity.assets && activity.type === "PLAYING" && activity.assets.largeImage) thumbnail = `https://cdn.discordapp.com/app-assets/${activity.applicationID}/${activity.assets.largeImage}.png`;
            statusBlock.push({name: "​", value: "​", inline: true});

            (statusBlock[activityIndex]["name"] = presenceName) && (statusBlock[activityIndex]["value"] = presenceDetails);
        }
    } else (statusBlock[0]["name"] = "Activity") && (statusBlock[0]["value"] = "Nothing");
    let userinfoEmbed = new Discord.MessageEmbed()
        .setAuthor(`${user.username}`, user.avatarURL({dynamic: true}))
        .setTitle("User Info")

        .addFields(
            {name: "Joined Discord", value: userJoinDate, inline: true},
            {name: "Joined Server", value: guildJoinDate, inline: true},
            {name: "Username", value: user.username, inline: true},
            {name: "Nickname", value: guildNickname, inline: true},
            {name: "Tag", value: user.discriminator, inline: true},
            {name: "Mention", value: `<@!${user.id}>`, inline: true},
            {name: "Discord Id", value: user.id, inline: true},
            {name: "Status", value: status, inline: true},
            {name: "Devices Online", value: devices, inline: true},

            statusBlock,
        )
        .setThumbnail(thumbnail)
        .setFooter("カミブルー！", client.user.avatarURL())
        .setColor(client.colors["kamiblue"]);

    message.channel.send(userinfoEmbed);
}

module.exports.config = {
    name: "whois",
    aliases: ["info", "about"],
    use: "whois [@User]",
    description: "Find out more about a user",
    state: "gamma",
    page: 1
};
