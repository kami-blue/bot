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
            "name": "Fun Commands",
            "emoji": "🎉"
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

        let versionEmbed = new Discord.MessageEmbed()
            .setTitle(title)
            .setColor(client.colors.kamiblue)
            .setDescription("Direct link to paste", "https://" + paste)
        message.channel.send(versionEmbed);
    }
});

function extractPastebinLinks(link) {
    return /(pastebin.com\/(?![^A-z0-9]).{8})/g.exec(link)[1];
}

client.login(auth.token);
