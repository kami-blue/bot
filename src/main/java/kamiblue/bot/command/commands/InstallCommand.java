package kamiblue.bot.command.commands;

import kamiblue.bot.command.Command;
import kamiblue.bot.utils.EmbedType;
import kamiblue.bot.utils.KamiBotUtils;
import net.dv8tion.jda.api.entities.MessageChannel;

public class InstallCommand extends Command{
    public InstallCommand() { super("install", null, "Where to download ", Category.INFO, "fixgui", "bot"); }

    @Override
    public void call(String[] args, MessageChannel channel){
        channel.sendMessage(KamiBotUtils.generateEmbedResponse(EmbedType.RESPONSE, null, "Download this from #download or from the website at https://kamiblue.org/download\n" +
                "\n" +
                "This is a forge mod. Please install forge and drag it to the mods folder in .minecraft. An installer will be released in the future. (#271)\n"));
    }
}
