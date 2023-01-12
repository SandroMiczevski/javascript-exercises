const sumAll = function(n1, n2) {
    if (!Number.isInteger(n1) || 
        !Number.isInteger(n2) ||
        n1 < 0 || n2 < 0) { 
            return "ERROR" 
    };

    let sum = 0;
    let start = Math.min(n1, n2);
    let end = Math.max(n1, n2);

    while (start <= end){
        sum += start++;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
