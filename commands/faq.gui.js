const Discord = require("discord.js");
const fs = require("graceful-fs");

module.exports.run = async (client, message, args) => {
    if (message.channel.id == "722436626248237076") {
        message.channel.send("Вы можете уменьшить графический интерфейс, перейдя в «Настройки» -> «Настройки графики» и изменив масштаб графического интерфейса на «Обычный» или «Маленький».\n\nИспользуйте команду ;fixgui в игре, если после это всё рaвно у вас маленькое меню, или можете включить язык English (US)")
    } else {
        message.channel.send("ClickGUI Settings -> Scale\nMake sure you're using the latest version if you don't see this option.")
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
