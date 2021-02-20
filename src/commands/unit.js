const { MessageAttachment, MessageEmbed} = require('discord.js')
const { searchUnit } = require('../utils/searchUnit');

module.exports = {
    name: 'unit',
    descripcion: 'unit fetch',
    execute(message, args){
        if(!args.length){
            message.channel.send(`Unit not provided`);
            return;
        }

        searchUnit(args.join(' ')).then(unit =>{
            const unitImage = new MessageAttachment(`./images/${unit.name}.jpg`);

            const embed = new MessageEmbed()
            .setTitle(unit.name)
            .addField('ID:', unit.id)
            .addField('Archetype:', unit.archetype.name,true)
            .addField('Tier:', unit.tier.name,true)
            .attachFiles(unitImage)
            .setThumbnail(`attachment://${unit.name}.jpg`)
            .setColor(unit.tier.color);

            message.channel.send(embed);
        }).catch(e => message.channel.send(`Unit not found`));
    }
}