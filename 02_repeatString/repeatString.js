const repeatString = function(text, numberToRepeat) {
    let finalText = text;

    if (numberToRepeat < 0) {
        return 'ERROR';
    }
    else if (numberToRepeat == 0) {
        return '';
    }
    else {
        for (let i = 0; i < numberToRepeat - 1; i++) {
            finalText += text;
        };
    }

    return finalText
};

// Do not edit below this line
module.exports = repeatString;
