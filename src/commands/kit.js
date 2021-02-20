const { MessageAttachment } = require("discord.js");

module.exports = {
    name: 'kit',
    descripcion: 'Provides units kit',
    execute(message, args){
        if(!args.length){
            message.channel.send('Unit not provided');
            return;
        }
        unit = args.shift().toLowerCase();
        message.channel.send(`Guide`,new MessageAttachment(`./images/${unit}.jpg`)).catch(e => {
                console.error(e);
                message.channel.send(`Unit not found`);
            });
    }
}