const http = require('http');

function searchTiers(archId, tierId){
    return new Promise(function(resolve,reject){
        http.get(`http://localhost:8080/tiers`, function(response){
            response.setEncoding('utf8');
            let rawData = '';
            response.on('data', (chunk) => { rawData += chunk; });

            response.on('end', () => {
                try{
                    const parsedData = JSON.parse(rawData);
                    resolve(parsedData);
                }catch(e){
                    reject(e);
                }
            });

        }).on('error', (e) => {
            reject(e);
        });
    });
}

module.exports.searchTiers = searchTiers;