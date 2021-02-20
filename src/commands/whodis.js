const { MessageAttachment } = require("discord.js");

module.exports = {
    name: 'whodis',
    descripcion: 'Identify command',
    execute(message, args){
        message.channel.send(`Hello! I'm a test bot!`,new MessageAttachment('./images/robot_bird.jpg'));
    }
}