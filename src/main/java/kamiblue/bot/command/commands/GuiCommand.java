package kamiblue.bot.command.commands;

import kamiblue.bot.command.Command;
import kamiblue.bot.utils.EmbedType;
import kamiblue.bot.utils.KamiBotUtils;
import net.dv8tion.jda.api.entities.MessageChannel;

public class GuiCommand extends Command{
    public GuiCommand() { super("gui", null, "How to fix your GUI", Category.INFO, "fixgui", "bot"); }

    @Override
    public void call(String[] args, MessageChannel channel){
        channel.sendMessage(KamiBotUtils.generateEmbedResponse(EmbedType.RESPONSE, null, "If running `.fixgui` doesn't fix it, make your GUI Scale smaller through the Minecraft settings and move your stuff back on screen."));
    }
}
