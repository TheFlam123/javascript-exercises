const reverseString = function(str) {
    prompt();
    let stringSplit = str.split("");
    let reverseArr = stringSplit.reverse();
    let joinArr = reverseArr.join("");
    return joinArr;
};

// Do not edit below this line
module.exports = reverseString;
