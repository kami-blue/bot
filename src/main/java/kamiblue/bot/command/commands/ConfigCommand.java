package kamiblue.bot.command.commands;

import kamiblue.bot.command.Command;
import kamiblue.bot.utils.EmbedType;
import kamiblue.bot.utils.KamiBotUtils;
import net.dv8tion.jda.api.entities.MessageChannel;

public class ConfigCommand extends Command{
    public ConfigCommand() { super("config", null, "Why do people keep asking for the config???", Category.INFO, "conf", "bot"); }

    @Override
    public void call(String[] args, MessageChannel channel) {
        channel.sendMessage(KamiBotUtils.generateEmbedResponse(EmbedType.RESPONSE, null, "Why the hell do people keep asking for settings. Literally just configure it on your own. \n" +
                "\n" +
                "I guarantee you that my binds and macros won't make any sense. Do you have baritone stop bound to `o`? probably not. \n" +
                "Do you have crystalaura bound to `f8`? You honestly probably don't and it probably wouldn't make sense to you. \n" +
                "\n" +
                "Just configure it to your personal preferences."));
    }
}
