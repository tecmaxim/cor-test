const _forIn = require('lodash.forin');
const fs = require('fs');

const initArray = ['chair', 'height', 'racket', 'touch', 'tunic'];
let stringFinal;

(async () => {
    stringFinal =  `${initArray.shift()}`;

    deepSearch(initArray);

    console.log(stringFinal);
    fs.writeFileSync('./result.txt', stringFinal);
    return;
})();

function deepSearch(_array) {
    let lastChar = stringFinal.substr(-1);
    if (_array.length > 0) {
        _forIn(_array, function(value, key) {
            if(value) {
                if(value.substr(0,1) == lastChar) {
                    stringFinal += `\n${value}`;
                    _array.splice(key, 1);
                    lastChar = stringFinal.substr(-1);
                    deepSearch(_array);
                }
            }
        });
        //deepSearch(_array);
    }    
    return false;
};