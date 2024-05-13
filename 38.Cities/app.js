"use strict";
//  Write a function called describe_city() that accepts the name of a city and its country.
//  The function should print a simple sentence, such as Karachi is in Pakistan.
//  Give the parameter for the country a default value. Call your function for three different cities,
//  at least one of which is not in the default country.
function describe_city(nameOfCity, country = "Pakistan") {
    return `${nameOfCity} is in ${country}`;
}
// 3 Cities
let city1 = describe_city("Makkah", "Saudi Arabia");
let city2 = describe_city("Karachi", "Pakistan");
let city3 = describe_city("Istanbul", "Turkey");
let city4 = describe_city("Dubai", "UAE");
console.log(city1);
console.log(city2);
console.log(city3);
console.log(city4);
