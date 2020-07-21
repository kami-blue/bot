const Discord = require("discord.js");
const fs = require("graceful-fs");

module.exports.run = async (client, message, args) => {
  if ((message.channel.id == "724349410858893372") || (message.channel.id == "722436626248237076")) {
      message.channel.send("Вы можете уменьшить графический интерфейс, перейдя в «Настройки» -> «Настройки графики» и изменив масштаб графического интерфейса на «Обычный» или «Маленький».\n\nИспользуйте команду ;fixgui в игре, если после это всё ровно у вас маленькое меню или можете включить язык English (US)")
  }
  else {
      message.channel.send("You can make your GUI smaller by going to Options -> Video Settings and changing GUI Scale to something like Normal or Small\n\nUse ;fixgui in game if you're missing any menus after this ")
  }
};

module.exports.config = {
  name: "gui",
  aliases: [],
  use: "gui",
  description: "How to change the GUI size",
  state: "gamma",
  page: 2
};
