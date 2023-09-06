const sumAll = function(startNum, endNum) {
    let sum = 0;

    if(typeof(startNum) !== "number" || typeof(endNum) !== "number") {
        return "ERROR";
    }
    
    if(startNum < 0 || endNum < 0) {
        return "ERROR";
    }

    let max = 0;
    if(startNum > endNum) {
        max = startNum;
        startNum = endNum;
        endNum = max;
    }

    for(let i = startNum; i <= endNum; endNum--) {
        sum += endNum;
    }
    console.log(typeof(startNum));
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
