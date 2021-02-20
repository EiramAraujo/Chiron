const { MessageAttachment, MessageEmbed} = require('discord.js')
const { searchUnitList } = require('../utils/searchUnitList');
const { archAndTierAssignment, transformArchAlias } = require('../utils/archAndTierAssignment');

module.exports = {
    name: 'unitlist',
    descripcion: 'Displays list of units',
    execute(message, args){
        if(args.length > 2) message.channel.send(`Too many arguments`);

        var archAndTier = archAndTierAssignment(args);

        archAndTier[0] = transformArchAlias(archAndTier[0]);
        
        searchUnitList(archAndTier[0], archAndTier[1]).then(unitList =>{
            if(!unitList.length){
                message.channel.send(`Units not found`);
                return;
            }
            message.channel.send(`Units: ${unitList.length}`);
            unitList.forEach(unit => {
                var unitImage = new MessageAttachment(`./images/${unit.name}.jpg`);

                var embed = new MessageEmbed()
                .setTitle(unit.name)
                .addField('ID:', unit.id)
                .addField('Archetype:', unit.archetype.name,true)
                .addField('Tier:', unit.tier.name,true)
                .attachFiles(unitImage)
                .setThumbnail(`attachment://${unit.name}.jpg`)
                .setColor(unit.tier.color);
                message.channel.send(embed);
            });
        }).catch(e => message.channel.send(`Units not found`));
    }
}

/*
	<dependency>
			<groupId>com.h2database</groupId>
			<artifactId>h2</artifactId>
			<scope>runtime</scope>
        </dependency>
        */