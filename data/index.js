const fs = require('fs');

module.exports = {
    leerJSON : (json) => {
        const jsonFile = fs.readFileSync(`./data/${json}.json`, 'utf-8');
        const jsonParseado = JSON.parse(jsonFile)
        return jsonParseado
    }
}