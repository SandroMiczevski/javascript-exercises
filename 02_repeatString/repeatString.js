const repeatString = function(text, num = 0) {
    let result = '';

    (num >= 0)? null : result = "ERROR";

    while(num-- > 0){
        result += text;
    }

    return (result);

};

// Do not edit below this line
module.exports = repeatString;
