package kamiblue.bot.command.commands;

import kamiblue.bot.command.Command;
import kamiblue.bot.utils.EmbedType;
import kamiblue.bot.utils.KamiBotUtils;
import net.dv8tion.jda.api.entities.MessageChannel;

public class ModulesCommand extends Command{
    public ModulesCommand() { super("modules", null, "Give people a list of modules", Category.INFO, "mod", "bot"); }

    @Override
    public void call(String[] args, MessageChannel channel){
        channel.sendMessage(KamiBotUtils.generateEmbedResponse(EmbedType.RESPONSE, null, "https://kamiblue.org/modules"));
    }
}
