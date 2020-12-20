// Import AuthFile
const auth = require("./auth.json");

const config = {
    prefix: ";",
    helpPages: [
        {
            "name": "Developer Commands",
            "emoji": "☕"
        },
        {
            "name": "Basic Commands",
            "emoji": "📜"
        },
        {
            "name": "FAQ Commands",
            "emoji": "<:kamiblue:759835844781277257>"
        },
        {
            "name": "Github Commands",
            "emoji": "<:jarfix:759835845157978152>"
        },
        {
            "name": "Moderation & Utility Commands",
            "emoji": "🔧"
        },
        {
            "name": "Music Commands",
            "emoji": "🎵"
        }
    ],
    "dj_role": "music"
}

// Import Modules (for this file)
const Discord = require("discord.js");
const fs = require("graceful-fs");
const convert = require("ms")
const fetch = require("node-fetch")


// Regexes
/* bad websites */
const grabbifyLoggers = new RegExp("(kekma.{1,3}|tobidy.{0,3}|thefuncoolstuff|grabify.{0,3}link|leancoding.{0,3}co|leancoding.{0,3}co|leancoding.{0,3}co|freegiftcards.{0,3}co|joinmy.{0,3}site|curiouscat.{0,3}club|catsnthings.{0,3}fun|catsnthing.{0,3}com|iplogger.{0,3}org|iplogger.{0,3}com|2nc.{0,3}.co|iplogger.{0,3}ru|yip.{0,3}su|iplogger.{0,3}co|iplogger.{0,3}info|ipgrabber.{0,3}ru}ipgraber.{0,3}ru|iplis.{0,3}ru|02ip.{0,3}ru|ezstat.{0,3}ru)");
const shorteners = new RegExp("(linkify.{0,3}me|raboninco.{0,3}com|bit.{0,3}ly|tinyurl.{0,3}com|bit.{0,2}do|iplogger.{0,3}org/logger|ps3cfw.{0,3}com/cool.php|rb.{0,3}gy|blasze.{0,3}tk)")

/* bad messages regexes */
const discordInviteRegex = new RegExp("(d.{0,3}.{0,3}s.{0,3}c.{0,3}.{0,3}r.{0,3}d).{0,7}(gg|com.{0,3}invite)");
const zoomInviteRegex = new RegExp("(zoom.{0,2}\\..{0,2}us.{0,5}[^0-9].{11})");
const hacksRegex = new RegExp("(hack|hacks|cheat|cheats|hacking)");
const slursRegex = new RegExp("([nN]{1,}[ ]?[iI1]{1,}[ ]?([gGbB][ ]?){1,}[ ]?([aA4]{1,}|[eE3]{1,}[ ]?[rR]{1,})|nigg(?! ).{1,2}|tran(?![spfqcg]).{1,2}|fag.{1,2}t|r[ea]{1,}tar.)");

/* help regexes */
const elytraRegex1 = new RegExp("(elytra|elytra.{0,2}light|elytra.{0,2}\\+|elytra.{0,2}fly)");
const elytraRegex2 = new RegExp("(settings|config|configure)");

const doesNotRegex = new RegExp("(does.{0,5}t)");
const howWorkRegex = new RegExp("(what|work|how|how to)");
const crashRegex = new RegExp("(crash)");
const installRegex = new RegExp("(install|download)")
const guiRegex = new RegExp("(gui|menu|hud|click.?gui)")
const forgeRegex = new RegExp("(f.{1,2}ge)")

const versionRegex1 = new RegExp("(1.{0,1}(14|15|16))") /* (1.?(14|15|16)) */
const versionRegex2 = new RegExp("(update|port|version)")

const baritoneCrashRegex = new RegExp("(Incompatible.{0,2}Class.{0,2}Change.{0,2}Error|non.{0,2}static.{0,2}field.{0,2}Baritone)")

// Client Definitions
const client = new Discord.Client();
client.queue = new Map();
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
client.colors = {
    kamiblue: "9b90ff", // mfw magenta
    red: "de413c",
    green: "3cde5a",
    yellow: "deb63c"
}
client.config = config;

client.on("ready", () => {
    console.log("Bot loaded!");
    client.user.setPresence({
        activity: {
            name: "us hit 100k downloads",
            type: "WATCHING"
        }
    });
    try {
        client.channels.cache.get("699982782515904603").send("Bot has started up!!");
    } catch (error) {
        (`${error}\nThis is a developmental version of the bot; as such some commands more integrated with the KAMI Blue Discord will **not** function as intended.`)
    }
});

fs.readdir("./commands/", (err, files) => {
    let jsFiles = files.filter(f => f.split(".").pop() === "js");
    if (jsFiles.length <= 0)
        return console.log(" \"./commands\" has no commandFiles. Are they in the right directory?");
    jsFiles.forEach((f, i) => {
        // it will log all the file names with extension .js
        let pull = require(`./commands/${f}`);
        console.log(`	- Searching ${f} \x1b[36m [Pending] \x1b[0m`); // Should be in colour
        if (pull.config) {
            client.commands.set(pull.config.name, pull);
            pull.config.aliases.forEach(alias => {
                client.aliases.set(alias, pull.config.name);
            });
            console.log(`	- Fetched command ${pull.config.name} from ${f} \x1b[32m [Resolved]\x1b[0m\n`);
        } else {
            console.log(`	- Does ${f} have no command? \x1b[31m[Rejected]\x1b[0m\n`)
        }
    });
    console.log("\n\n\x1b[1mCommands Loaded\x1b[22m\n\n")
});

client.on('message', async message => {
    let messageArray = message.content.split(" ")
    let prefix = config.prefix;
    let cmd = messageArray[0].toLowerCase();
    let args = messageArray.slice(1);
  
    
    if (message.author.bot) return; // Prevent botception loop
    autoResponder(message);

    /* Command handler */
    if (message.content.startsWith(prefix)) {
        let commandFile = client.commands.get(cmd.slice(prefix.length)) || client.commands.get(client.aliases.get(cmd.slice(prefix.length)));
        if (commandFile) commandFile.run(client, message, args);
    }

    /**
     * @module rawPastebin
     * @author sourTaste000
     * @author l1ving
     */
    if (message.content.includes("pastebin.com") && !message.content.includes("pastebin.com/raw")) {
        if (message.author.bot) return;
        const paste = (extractPastebinLinks(message.content)).replace("pastebin.com/", "pastebin.com/raw/")

        let versionEmbed = replyMsgT(message, "Direct link to paste", "https://" + paste)
        message.channel.send(versionEmbed);
    }
    
    if (message.content.includes("b4fRukmrBuc")) {
        message.delete();
        message.channel.send("https://cdn.discordapp.com/attachments/634010583527587840/756220420658823304/video.mp4");
    }

    if (/cursedballs/.test(message.content)) message.delete()

    if (/ٴ/.test(message.content)) message.delete()
    
    if(message.author.id === "557228771141353511" && /b.{0,3}l.{0,3}l.{0,3}/.test(message.content.toLowercase())) message.delete()
});

/* when message is edited */
client.on('messageUpdate', (oldMessage, newMessage) => {
    if (newMessage.author.bot) return;
    autoResponder(newMessage);
});
/* @author okk */
client.on("messageDelete", (msg) => {
    if(msg.content.startsWith(config.prefix)) {
        if (!msg.member.hasPermission("CHANGE_NICKNAME")) {
            const deleteEmbed = new Discord.MessageEmbed()
                .setAuthor("カミブルー！", "https://cdn.discordapp.com/avatars/638403216278683661/1e8bed04cb18e1cb1239e208a01893a1.png", "https://kamiblue.org")
                .setDescription(`Message "${msg.content}" by <@${msg.author.id}> was deleted.`)
                .setColor(client.colors.red)
                .setTimestamp();
            msg.channel.send(deleteEmbed);
        }
    }
});
/*
     ___        _         ______
   / _ \      | |        |  ___|
  / /_\ \_   _| |_ ___   | |_ __ _  __ _
  |  _  | | | | __/ _ \  |  _/ _` |/ _` |
  | | | | |_| | || (_) | | || (_| | (_| |
  \_| |_/\__,_|\__\___/  \_| \__,_|\__, |
                                      | |
                                      |_|
*/
async function autoResponder(message) {
    let zeroWidthPattern = new RegExp("[\u200B\u200C\u200E\u200F\uFEFF]", "g")
    let cleanedMessage = message.content.toLowerCase().replace(zeroWidthPattern, "")
    
    /* only moderators bypass */
    if (!message.member.hasPermission("MANAGE_MESSAGES")) {
        /*ip logger regex */
        if (!cleanedMessage.length && !message.attachments) return message.delete();

        if (grabbifyLoggers.test(cleanedMessage)) {
            message.reply(warnRule(message, "3, 9", "you're not allowed to post IP grabbers dumbass"))
            return message.delete()
        }

        /* zoom link regex */
        if (zoomInviteRegex.test(cleanedMessage)) {
            message.reply(warnRule(message, 9, "zoom meeting links are not allowed as you're likely infringing on the privacy of unconsenting individuals"))
            return message.delete()
        }

        /* slurs regex */
        if (slursRegex.test(cleanedMessage.replace(/mini.{0,2}game/, "").replace("nigeria", "").replace("son i", ""))) {
            message.reply(warnRule(message, "1a, 1b, 1c, 1d", "slurs are not allowed in this Discord server"));
            return message.delete()
        }
    }

    /* any members with roles bypass the filter */
    if (!message.member.hasPermission("CHANGE_NICKNAME")) {
        /* current ongoing raid ban */
        if (new RegExp("(nSwtv89|adpxqbC|kxRQ5cd)").test(message.content) || new RegExp("ddos attack from hydra corporation").test(cleanedMessage)) {
            let embed = warnRule(message, "5, 9", "Automated ban for raiding and advertising. Contact a moderator (living#0076) if you think this was a mistake")
            let r = await message.author.send(embed);
            message.reply(embed);
            await message.guild.members.ban(message.author.id)
            return message.delete()
        }
        if (/trannies deserve to die jajaja/.test(cleanedMessage)) {
            let embed = warnRule(message, "1, 9", "Automated ban for raiding and using slurs. Contact a moderator (living#0076) if you think this was a mistake")
            let r = await message.author.send(embed);
            message.reply(embed);
            await message.guild.members.ban(message.author.id)
            return message.delete()
        }
        
        if (/1[., -]1[., -][67]/.test(cleanedMessage)) {
            message.reply(replyMsg("Download the latest nightly from <#634549110145286156>, v1.1.6 / v1.1.7 is not the latest version"))
        }

        if (shorteners.test(cleanedMessage)) {
            message.reply(warnRule(message, 6, "you're not allowed to use url shortners here, please use the full url"))
            return message.delete()
        }

        /* hacks / cheats regex */
        if (hacksRegex.test(cleanedMessage.replace(/salhack/g, "").replace(/anti.{0,2}cheat/g, ""))) {
            message.reply(warnRule(message, "3, 9", "hacks / cheats are against Discord TOS"));
        }

        /* discord invite link regex */
        if (discordInviteRegex.test(cleanedMessage)) {
            message.reply(warnRule(message, 5, "lmfao stop advertising your discord server"));
            return message.delete();
        }

        /* elytra help regex */
        let elytraRegexMatches = 0;
        let elytraMatch = false;
        if (elytraRegex1.test(cleanedMessage)) {
            elytraMatch = true;
            elytraRegexMatches++;
        }
        if (doesNotRegex.test(cleanedMessage)) elytraRegexMatches++;
        if (howWorkRegex.test(cleanedMessage)) elytraRegexMatches++;
        if (elytraRegex2.test(cleanedMessage)) elytraRegexMatches++;

        if (elytraRegexMatches > 1 && elytraMatch) {
            //return message.reply(replyMsg("Make sure you're using default settings in the latest beta. Run the defaults button in ElytraFlight's settings if you updated KAMI Blue before.\n\nIf it still doesn't help, make sure you're not using NoFall, AntiHunger or any other movement related mods from **other** clients, such as Sprint in Rage mode, as they make you go over the speed limit and rubberband.\n\nIf you're having issues taking off at higher ping on 2b2t, enable HighPingOptimize"));
            return message.reply(replyMsg("On 2b2t, Elytraflight is patched in *every* client, there is currently **no** bypass.\n\nOn non-2b2t servers, use Control mode with default settings\nIf it's still not working, make sure you're not using NoFall, AntiHunger or any other movement related mods from **other** clients, such as Sprint in Rage mode."))
        }

        /* game crash regex */
        if (crashRegex.test(cleanedMessage)) {
            message.reply(replyMsg("Find the `latest.log` file inside `~/.minecraft/logs` and paste the contents to https://pastebin.com/, and the send the link."));
        }

        /* new version regex */
        if (versionRegex1.test(cleanedMessage) && versionRegex2.test(cleanedMessage)) {
            message.reply(replyMsg("No, KAMI Blue's codebase is too big and relies on Forge events way too much to port to a newer version. Instead, you can use [KAMI](https://kamiclient.com), a 1.16.x client."))
        }

        /* how to install kami blue and forge regex */
        if (howWorkRegex.test(cleanedMessage) && installRegex.test(cleanedMessage)) {
            if (forgeRegex.test(cleanedMessage)) {
                message.reply(replyMsg("Download Forge from this link (<\https://files.minecraftforge.net/maven/net/minecraftforge/forge/index_1.12.2.html>)\nand select Installer. Open the file that it downloads and follow the instructions it gives you."))
            } else {
                message.reply(replyMsg("KAMI Blue is a 1.12.2 Forge mod.\nDownload KAMI Blue from <#634549110145286156> or the website at https://kamiblue.org/download, then open the file. \n\nThis should open an installer where you can choose which version you want.\nTo find out more, please read the <More Info> at: https://kamiblue.org/download"))
            }
        }

        /* how to open gui regex */
        if (howWorkRegex.test(cleanedMessage) && guiRegex.test(cleanedMessage)) {
            message.reply(replyMsg("Use `Y` to open the GUI. Use `;bind clickgui rshift` to change it.\nRead more at https://kamiblue.org/faq"))
        }

        /* -noverify crash Baritone */
        if (baritoneCrashRegex.test(cleanedMessage)) {
            message.reply(replyMsg("Disable `-noverify` in your JVM arguments, this is a Baritone bug and won't be fixed"))
        }
    }
}

/**
 * @author l1ving
 */
function warnRule(message, ruleNumber, reason) {
    function getS() {
        if (ruleNumber.length > 1) {
            return "s"
        }
        return ""
    }
    return new Discord.MessageEmbed()
        .setTitle(`Rule${getS()} ${ruleNumber}`)
        .setColor(client.colors.red)
        .setDescription(`<@${message.author.id}>, ${reason}`)
}

function replyMsg(description) {
    return new Discord.MessageEmbed()
        .setColor(client.colors.kamiblue)
        .setDescription(description)
}

function replyMsgT(message, title, description) {
    return new Discord.MessageEmbed()
        .setTitle(title)
        .setColor(client.colors.kamiblue)
        .setDescription(description)
}

function extractPastebinLinks(link) {
    return /(pastebin.com\/(?![^A-z0-9]).{8})/g.exec(link)[1];
}

client.login(auth.token);
