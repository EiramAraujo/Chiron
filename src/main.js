const Discord = require('discord.js')
const bot = new Discord.Client();
const { TOKEN, PREFIX} = require('./config.js');
const fs =  require('fs');

bot.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    bot.commands.set(command.name, command)
}

bot.on('ready', () => {
    console.log('Bring it on!');
});


bot.on('message', message =>{
    if(!message.content.startsWith(PREFIX) || message.author.bot)   return;

    const args = message.content.slice(PREFIX.length).split(/ +/);
    const commandName = args.shift().toLowerCase();
    
    if(!bot.commands.has(commandName)){
        message.channel.send(`Unknown command`);
        return;
    }

    const command = bot.commands.get(commandName);
    try{
        command.execute(message,args);
    }
    catch(e){
        console.error(e);
    }

});

bot.login(TOKEN);