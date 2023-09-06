const convertToCelsius = function(degreeF) {
  let resultC = (degreeF - 32) * 5 / 9;
  let rounded = Math.round(resultC * 10) / 10
  return rounded;

};

const convertToFahrenheit = function(degreeC) {
  let resultF = (degreeC * 9 / 5 + 32);
  let rounded = Math.round(resultF * 10) / 10
  return rounded;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
