const Discord = require("discord.js");
const fs = require("graceful-fs");

module.exports.run = async (client, message, args) => {
  if ((message.channel.id == "724349410858893372") || (message.channel.id == "722436626248237076")) {
      message.channel.send("2b2t полностью отключил пакеты shulker, если вы фактически не нажмете правой кнопкой мыши на shulker, то есть нет способа обойти это, и нет способа предварительного просмотра shulker на 2b.\nЭто относится ко всем клиентам, не только к KAMI Blue, потому что он также исправляет ванильный текст с `64х Обсидианом` в подсказке vanilla. Обхода нет.")
  }
  else {
      message.channel.send("2b2t completely disabled shulker packets unless you actually right click the shulker, meaning there is no way to bypass that, and no way to preview shulkers on 2b.\nThis is the case in all clients, not just KAMI Blue, because it also patches the vanilla text that has `64x - Obsidian` in the vanilla tooltip. **There is no bypass.**")
  }
};

module.exports.config = {
  name: "shulkerpreview",
  aliases: [],
  use: "shulkerpreview",
  description: "Why ShulkerPreview doesn't work on 2b2t",
  state: "gamma",
  page: 2
};
