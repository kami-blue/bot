package kamiblue.bot.command.commands;

import kamiblue.bot.command.Command;
import kamiblue.bot.utils.EmbedType;
import kamiblue.bot.utils.KamiBotUtils;
import net.dv8tion.jda.api.entities.MessageChannel;

public class ElytraCommand extends Command{
    public ElytraCommand() { super("elytra", null, "Gives info about the ElytraFlight feature", Category.INFO, "ely", "bot"); }

        @Override
        public void call(String[] args, MessageChannel channel){
        channel.sendMessage(KamiBotUtils.generateEmbedResponse(EmbedType.RESPONSE, null, "Make sure you're using any beta released after June 4th, 2020\n" +
                "\n" +
                "Note: Use Control mode on 2b2t\n" +
                "\n" +
                "Antiforcelook is now patched on 2b2t. When standing still and turning your head, your view will rubberband sometimes, this happens in all clients. \n" +
                "\n" +
                "To use Control mode enable easy takeoff and takeoff timer and jump in the air to start flying. Use defaults but disable hover for 2b2t. \n" +
                "Video: https://youtu.be/54oQ5POK3-M\n" +
                "Settings: https://imgur.com/wcBjT2j.png (but you can just click the defaults button on the latest version and it'll fix them for you)\n" +
                "\n" +
                "If you want to go up in control mode on 2b2t, enable Look Boost, and while going forward look at least slightly up. Auto Boost does not work on 2b2t but it's still helpful to have, as long as you manually look down at the top of your boost.\n" +
                "Video: https://youtu.be/i1yi2mOSswU\n" +
                "\n" +
                "To use Creative (formerly called Highway) mode, start flying and then enable it. Easy takeoff does work on 2b2t. \n" +
                "Video: https://youtu.be/VVb1Sf6fDXA"));
        }
}
