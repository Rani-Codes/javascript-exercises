const reverseString = function(input) {
    const myArray = input.split("");
    let endL = myArray.length - 1;
    let reverseString = '';
    for(let i = 0; i < myArray.length; i++) {
        reverseString += myArray[endL];
        endL--;
    }
    return reverseString;
};

// Do not edit below this line
module.exports = reverseString;
