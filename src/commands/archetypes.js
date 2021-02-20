const Discord = require('discord.js');
const { searchArchetypes } = require('../utils/searchArchetypes');

module.exports = {
    name: 'archetypes',
    descripcion: 'Displays list of archetypes',
    execute(message, args){
        searchArchetypes().then(archetypeList =>{
            if(!archetypeList.length){
                message.channel.send(`Archetypes not found`);
                return;
            }
            const embed = new Discord.MessageEmbed()
            .setTitle('Archetypes')
            .setColor('#894F00')
            .setDescription(`There are ${archetypeList.length} main archetypes`);
            archetypeList.forEach(archetype => embed.addField(`Archetype ${archetype.id}:`, archetype.name));
             message.channel.send(embed);
        }).catch(e => message.channel.send(`Archetypes not found`));
    }
}