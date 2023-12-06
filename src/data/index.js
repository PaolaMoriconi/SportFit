const {readFileSync} = require('fs');

module.exports = {
    leerJSON : (json) => {
        return JSON.parse(readFileSync(`./src/data/${json}.json`, 'utf-8'))
    }
}