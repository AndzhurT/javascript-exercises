const removeFromArray = function(array, value1 = null, value2 = null, value3 = null, value4 = null) {

    for(let i = array.length - 1; i >= 0; i--) {
        
        if (array[i] === value1 || array[i] === value2 || array[i] === value3 || array[i] === value4) {
            array.splice(i, 1)
        } 
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
