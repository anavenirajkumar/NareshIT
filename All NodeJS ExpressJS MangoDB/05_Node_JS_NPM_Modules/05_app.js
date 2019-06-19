const _ = require('lodash');

let array = [100,'john',150,'wilson',true,'Laura'];

let countData = (array) => {
    let numberCount = 0;
    let stringCount = 0;
    _.forEach(array,(value) => {
        (_.isNumber(value)) ? numberCount++ : numberCount;
        (_.isString(value)) ? stringCount++ : stringCount;
    });
    return { numberCount , stringCount } ;
};
console.log(countData(array));