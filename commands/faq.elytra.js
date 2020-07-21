const Discord = require("discord.js");
const fs = require("graceful-fs");

module.exports.run = async (client, message, args) => {
  if ((message.channel.id == "724349410858893372") || (message.channel.id == "722436626248237076")) {
      message.channel.send("Убедитесь, что вы используете последнюю бета-версию. Запустите дефолтные настройки ElytrFlight после обновления!\n\nControl режим работает на каждом сервере, включая 2b2t.\nPacket режим работает практически на каждом сервере (включая oldfag), кроме 2b2t.\n\nAntiForceLook теперь исправлен на 2b2t. Теперь вас не будет телепортировать назад, в, оглядываясь, в отличии от любого другого клиента\n\n**Чтобы использовать ElytraFlight:**\nВключите ElytraFlight, пригните один раз и вы начнете лететь.\n\nControl / Packet режим видео: <https://youtu.be/8sTnuD0YWiM>\n\nНастройки: <https://imgur.com/q58CzhW.png> (но вы можете просто кликнуть на кнопку defaults на последней версии и это исправит настройки для вас)\n\nОсновные туториалы:\n<https://youtu.be/8sTnuD0YWiM>\n<https://youtu.be/i1yi2mOSswU>\n\nЕсли вы хотите бесконечную прочность элитр, используйте Packet режим. Заметка: вы не можете подниматься вверх на этом режиме, поэтому просто поменяйте режим на Control и взлетите вверх.")
  }
  else {
      message.channel.send("Make sure you're using the latest beta. **Run the ElytraFlight defaults after updating!**\n\nControl works on every server, including 2b2t.\nPacket works on virtually any server (including oldfag) except 2b2t.\n\nAntiforcelook is now patched on 2b2t. You will *not* rubberband, in the latest version, from looking around, unlike any other client.\n\n**To use ElytraFlight:**\n**Turn ElytraFlight on, jump once and you start flying.**\n\nControl / Packet Video: <https://youtu.be/8sTnuD0YWiM>\n\nSettings: <https://imgur.com/q58CzhW.png> (but you can just **click the defaults button** on the latest version and it'll fix them for you)\n\nBasic tutorials:\n<https://youtu.be/8sTnuD0YWiM>\n<https://youtu.be/i1yi2mOSswU>\n\nIf you want to use infinite durability, use Packet mode. Note: you cannot go up in this mode, so just switch to Control to go up.")
  }
}; 

module.exports.config = {
  name: "elytra",
  aliases: [],
  use: "elytra",
  description: "How to use ElytraFlight on KAMI Blue",
  state: "gamma",
  page: 2
};
