const _forIn = require('lodash.forin');
const fs = require('fs');

const initArray = ['chair', 'height', 'racket', 'touch', 'tunic'];
let stringFinal;

(async () => {
    // Primero lo ordenamos alfabeticamente
    initArray.sort();
    // Iniciamos el var string que contendrá que servirá de buffer de salida
    stringFinal =  `${initArray.shift()}`;
    // Busqueda recursiva y funcional
    deepSearch(initArray);
    console.log(stringFinal);
    // Creamos el archivo y lo guardamos en la raíz.
    fs.writeFileSync('./result.txt', stringFinal);
    return;
})();

/**
 *  Metodo recursivo para iterar sobre el array
 * 
 * @param {array} _array 
 */
function deepSearch(_array) {
    // Get last char from first string
    let lastChar = stringFinal.substr(-1);
    // Control recursive
    if (_array.length > 0) {
        _forIn(_array, function(value, key) {
            // Control to empty values when call it self
            if(value) {
                // Check Match
                if(value.substr(0,1) == lastChar) {
                    // If matches concat another value
                    stringFinal += `\n${value}`;
                    // Remove element
                    _array.splice(key, 1);
                    // update variable when new final char
                    lastChar = stringFinal.substr(-1);
                    // recursive call
                    deepSearch(_array);
                }
            }
        });
    }    
    return;
};