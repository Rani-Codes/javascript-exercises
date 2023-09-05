const repeatString = function(string, num) {
    let multiString = "";
    for(let i = 0; i < num; i++) {
        multiString += string;

    }
    if(num < 0) multiString = "ERROR";
    
    return multiString;
};


// Do not edit below this line
module.exports = repeatString;
