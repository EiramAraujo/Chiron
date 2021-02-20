const Discord = require('discord.js');
const { searchTiers } = require('../utils/searchTiers');

module.exports = {
    name: 'tiers',
    descripcion: 'Displays list of tiers',
    execute(message, args){
        searchTiers().then(tierList =>{
            if(!tierList.length){
                message.channel.send(`Tiers not found`);
                return;
            }
            const embed = new Discord.MessageEmbed()
            .setTitle('Tiers')
            .setColor('#894F00');
            tierList.forEach(tier => embed.addField(`Tier ${tier.id}:`, tier.name));
             message.channel.send(embed);
        }).catch(e => message.channel.send(`Tiers not found`));
    }
}