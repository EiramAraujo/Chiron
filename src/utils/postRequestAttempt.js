const http = require('http');
//WRONG ATTEMPT TO MAKE A POST REQUEST
//CODE IS STILL USEFUL
function searchUnit(searchName){
    return new Promise(function(resolve,reject){
        const data = JSON.stringify({
            name : searchName
        })

        const options = {
            hostname: 'http://localhost:8080',
            path: '/unit',
            method: 'POST',
            headers: {'Content-Type': 'application/json'}
        }

       http.request(options, function(response){
            
            response.on('data', process.stdout.write(data));

            /*response.on('end', () => {
            const parsedData = JSON.parse(rawData);
            resolve(parsedData);
            });*/

        }).on('error', (e) => {
            reject(e);
        });
    });
}

module.exports.searchUnit = searchUnit;