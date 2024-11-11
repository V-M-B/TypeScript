// Enum 
// way to define set of named constants
// allows you to define a collection of related values 
// that can be used interchangeably in your code

enum WeatherConditions{
    sunny='sunny',
    cloudy='cloudy',
    rainy='rainy',
}

console.log(WeatherConditions.sunny);

const currentWeather=WeatherConditions.rainy;
console.log(`The current weather is ${currentWeather}`);

