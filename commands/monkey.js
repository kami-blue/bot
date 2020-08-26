const Discord = require("discord.js");
const fs = require("graceful-fs");

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

module.exports.run = async (client, message, args) => {

    var Monkeys = ["🐵", "🐒", "🦧", "🙈", "🙊", "🙉", "🙊🙈🙉", "<:smug_orangutan:734782865119772673>", "<:pensive_orangutan:734782865036017747>", "<:crying_orangutan:734782864515923998>", "<:crying_gorilla:734782864498884634>", "<:pensive_gorilla:734782866457886750>", "<:sleepy_orangutan:734782865421893693>", "<:skidder_orangutan:734782865094475890>", "<:neutral_orangutan:734782865450991636>", "<:cowboy_orangutan:734782864511729721>", "<:neutral_gorilla:734782865161715803>", "<:shocked_orangutan:734782865660837948>", "<:raised_eyebrows_orangutan:734782865258184746>", "<:monke:734782864687890432>", "<:lick_orangutan:734782865447059586>", "<:rage_orangutan:734782865409179768>", "<:rage_gorilla:734782865388208128>", "<:kiss_orangutan:734782865073766421>", "<:flushed_orangutan:734782864851206165>", "<:pog_orangutan:734782865254121534>", "<:pog_gorilla:734782865463705711>", "<:curled_smile_orangutan:734782864742416435>"];

    var local = ""
    local += Monkeys[Math.floor(Math.random() * Monkeys.length)]
    var rand = getRandomInt(3)
    for (i = 0; i <= rand; i++) {
        local += Monkeys[Math.floor(Math.random() * Monkeys.length)]
    }
    message.channel.send(local)

}

module.exports.config = {
    name: "monkey",
    aliases: ["m", "skid", "pvp", "summit", "future", "leee", "windows", "salhack"],
    use: "monkey",
    description: "funny monkey",
    state: "gamma",
    page: 1
};
