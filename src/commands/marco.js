module.exports = {
    name: 'marco',
    descripcion: 'ping command',
    execute(message, args){
        message.channel.send('Polo!');
    }
}