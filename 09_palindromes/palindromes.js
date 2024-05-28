const palindromes = function (word) {

    word = word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").toLowerCase().split(" ").join("");
    let left = 0;
    let right = word.length - 1;

    while (left < right) {
        if (word[left] != word[right]) {
            return false;
        }
        
        left += 1;
        right -= 1;
    }

    return true;
};

// Do not edit below this line
module.exports = palindromes;
