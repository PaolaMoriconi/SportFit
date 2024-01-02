const {readFileSync,writeFileSync} = require('fs');

module.exports = {
    leerJSON : (json) => {
        return JSON.parse(readFileSync(`./src/data/${json}.json`, 'utf-8'))
    },
    escribirJson:(json, data) =>{
        const newFile = JSON.stringify(data);
        writeFileSync(`./src/data/${json}.json`, newFile, 'utf-8');
        return 
    }
}