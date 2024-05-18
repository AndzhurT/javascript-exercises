const reverseString = function(text) {
    reverseText = "";

    for (let i = text.length - 1; i >= 0; i--) {
        reverseText += text[i];
    }
    return reverseText;
};

// Do not edit below this line
module.exports = reverseString;
