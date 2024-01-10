const _ = require('lodash');

const numbers = [11,22,33,44,66,99,69,100];

_.each(numbers, (number, index) => {
    console.log(`${number} and ${index}`);
})