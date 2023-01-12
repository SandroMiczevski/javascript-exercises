const removeFromArray = function(arr, element) {
    let args = Array.from(arguments)
    let argsLength = args.length - 1;

    let new_arr = arr.filter((value) => {
        for(let i = 1; i <= argsLength; i++){
            if (value === args[i]){
                return false;
            }
        }
        return true;
    });

    return new_arr;
};

// Do not edit below this line
module.exports = removeFromArray;
