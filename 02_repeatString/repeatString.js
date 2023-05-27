
const repeatString = function(word = 'hey', times = 10) {
    if (times < 0) {
        return 'ERROR'
    }
    let hey = '';
    for (i = 0; i < times; i++)
    
        hey += word
        return hey

};

// Do not edit below this line
module.exports = repeatString;
