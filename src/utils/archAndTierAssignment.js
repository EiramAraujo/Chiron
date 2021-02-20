//return the values of archetype and tier in an array in that order
function archAndTierAssignment(args){
    var archId = '';
    var tierId = '';

    switch(args.length){
        case 1:
            arg1 = args.shift().toLowerCase();
            isNaN(arg1) ? archId=arg1 : tierId=arg1
            break;
        case 2:
            arg1 = args.shift().toLowerCase();
            arg2 = args.shift().toLowerCase();
            isNaN(arg1) ? (archId=arg1,tierId=arg2) : (tierId=arg1,archId=arg2)
            break;
    }

    return [archId,tierId];
}

//Returns the proper name for the the archetype given an alias
function transformArchAlias(arch){
    switch(arch){
        case 'cav':
            arch = 'cavalry';
            break;
        case 'sword':
        case 'shield':
        case 'spear':
        case 'javelin':
        case 'pike':
            arch = 'meele';
            break;
        case 'arquebusier':
        case 'archer':
        case 'crossbow':
            arch = 'ranged';
            break;
    }

    return arch;
}

module.exports.archAndTierAssignment = archAndTierAssignment;
module.exports.transformArchAlias = transformArchAlias;