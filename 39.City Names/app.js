"use strict";
// City Names: Write a function called city_country() that takes in the name of a city and its country.
// The function should return a string formatted like this:
function city_country(city, country) {
    // return `"${city}, ${country}"`
    console.log(`"${city}, ${country}"`);
}
city_country("Karachi", "Pakistan");
let mycities = city_country("Karachi", "Pakistan");
console.log(mycities);
console.log(city_country("Dubai", "UAE"));
console.log(city_country("London", "United Kingdom"));
console.log(city_country("Riyaz", "Saudi Arabia"));
