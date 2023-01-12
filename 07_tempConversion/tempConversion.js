const convertToCelsius = function(temperature) {
  return (Math.round((((temperature - 32) * 5/9) + Number.EPSILON) * 10) / 10);
};

const convertToFahrenheit = function(temperature) {
  return Math.round(((1.8 * temperature + 32) + Number.EPSILON) * 10) / 10

};


console.log(convertToCelsius(100));

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
