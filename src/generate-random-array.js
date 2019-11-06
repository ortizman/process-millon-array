const fs = require('fs');

function generateRandomArray(params) {
    const size = params.size;

    let obj = undefined;
    let arr = [];

    for (let i = 0; i < size; i++) {
        let val = Math.random();
        if (val > 0.1) {
            obj = {
                lat: val,
                lon: val,
                valor: val * 15
            };
        } else {
            obj = { cualquiera: "esto es cualquiera" };
        }
        arr.push(obj);
    }

    return arr;
}

module.exports = generateRandomArray;