const inputArray = [];

const removeFromArray = function(inputArray) {
    let rmvArray = Array.from(arguments)

    for(j = 1; j < rmvArray.length; j++) {
        for(i = 0; i < inputArray.length; i++) {
            if(inputArray[i] === rmvArray[j]) {
                inputArray.splice(i, 1);
            }
        }
    }
    return inputArray;
}

// Do not edit below this line
module.exports = removeFromArray;
