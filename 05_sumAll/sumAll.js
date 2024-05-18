const sumAll = function(from, to) {
    let sum = 0;

    if (typeof(from) != "number" || typeof(to) != "number" || from < 0 || to < 0) {
        return "ERROR";
    } 
    else {
        if (from > to) {
            [to, from] = [from, to];
        }
    
        for (let i = from; i <= to; i++) {
            sum += i;
        }
    }


    return sum;
};

// Do not edit below this line
module.exports = sumAll;
