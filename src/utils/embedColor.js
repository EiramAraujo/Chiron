//returns the color of the unit tier of Conquerors Blade
//better if its on the backend
function getTierColor(tier){
    var color;
    switch(tier){
        case 1:
            color = 0xbbbdbd;
            break;
        case 2:
            color = 0x5fca6f;
            break;
        case 3:
            color = 0x39a1e2;
            break;
        case 4:
            color = 0xb461cc;
            break;
        case 5:
            color = 0xdc9c43;
            break;
    }

    return color;
}

module.exports.getTierColor = getTierColor;