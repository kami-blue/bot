const Discord = require("discord.js");
const fs = require("graceful-fs");

module.exports.run = async (client, message, args) => {

    if ((message.channel.id == "724349410858893372") || (message.channel.id == "722436626248237076")) {
        message.channel.send("Мы используем kotlin по некоторым причинам:\n• Лучшее управление неверными значениями\n• Явные ошибки, очень полезно при работе с таким мусором, как код Minecraft, также помогает увидеть такие баги, которые мы бы не смогли увидеть в Java\n• Лучшее управление экземплярами\n• Одиночные члены классов, буквально в каждом языке есть это, но не в Java\n• Smart casts, встроенные функции и другое помогают сделать код более кратким и читабельным\n• Полностью совместим с Java\n• Массивы инвариантны, опять же, лучшая производительность и читабельность\n• Более чистый синтаксис, мы превартили 14 тысяч строк кода в 10\n• Более чистый и эффективный код с меньшими усилиями к разработке\n• Работа с большой кодовой базой как наша *и* код Minecraft делает использование Kotlin обязательным, для предотвращения ошибок. Также это делает наш собственный код более читабельным, что облегчает его обслуживание в долгосрочной перспективе.")
    } else {
        message.channel.send("We use Kotlin instead of Java for the following reasons:\n• Better null management\n• Explicit nulls, very useful when dealing with garbage such as Minecraft code, and it prevents bugs which you wouldn't be able to see in Java\n• Better instance management. No more bullshit module manager for our own hacky instance solution.\n• Single class members. Literally every other language has them, except Java\n• Smart casts, lamdba expressions with inline functions, singletons, range expressions, data classes all help make the code way more concise and easier to read and write. Just produces overall better code.\n• Completely compatible with Java. No need to worry about that.\n• Arrays are invariant. Again, better performance, better code.\n• More efficient and cleaner syntax. We turned 14k lines of code into 10k.\n• Cleaner and more efficient code with less effort then Java\n• Dealing with a codebase as large as ours *and* Minecraft's code makes such features a must in order to prevent invisible bugs from occurring to allow us to focus on our own code instead of bug fixing. It also makes our own code a lot cleaner and easier to read, making it easier to maintain in the long term.")
    }
};


module.exports.config = {
    name: "kotlin",
    aliases: [],
    use: "kotlin",
    description: "Why is Kotlin better then Java?",
    state: "gamma",
    page: 2
};
