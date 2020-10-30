const Discord = require("discord.js");
const fs = require("graceful-fs");

module.exports.run = async (client, message, args) => {
    message.channel.send("**Is KAMI Blue safe?**\nTL:DR yes it is\nKAMI Blue is open source and publically auditable. You can view the full source code here: <https://github.com/kami-blue/client>\nYou can view instructions for verifying if the jar is official at <https://kamiblue.org/signing>\nCommits are signed by both l1ving and iBuyMountainDew, with releases being published by l1ving. Both members have full write access to the organization, with both members having **2fa** protection on their Github Account. Nobody else has push access to any kami-blue repository.\nIf a commit is not signed, it is **imperative** that you check the contents of the commit yourself, if you'd like to be sure it is safe (ie a pull request was merged without signed commits).\nIf the signature is invalid, do not trust that jar, that means it's possible one of our github accounts was hacked.\nKeep in mind, the likelyhood of having a Github account with **2fa** and proper password security being hacked is extremely low. Living uses a 12 word + special characters standard, which is virtually uncrackable in the heat death of the universe, along with Github hashing the password, and the commits being signed by **4096 bit RSA**, with iBuyMountainDew using similar security.")
};

module.exports.config = {
    name: "safe",
    aliases: [],
    use: "safe",
    description: "Is KAMI Blue safe?",
    state: "gamma",
    page: 2
};
