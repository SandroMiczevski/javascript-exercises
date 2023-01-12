const reverseString = function(text) {
    let new_text = '';

    for (let i = text.length - 1; i >= 0; i--){
        new_text += text[i];
    }

    return new_text;
};

// Do not edit below this line
module.exports = reverseString;
