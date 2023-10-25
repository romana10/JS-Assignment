
// ASSIGNMENT

// Problem 1: Write a function to calculate the area of a triangle.

function CalculateArea(base, height) {
    let area = 1/2 * base * height;
    return area;
}

let Triangle = CalculateArea(12,15);
console.log(Triangle);

// Problem 2: Write a function to convert degrees to radians.

function degtoRad(degrees) {
    let radians = degrees * (Math.PI / 180);
    return radians;
}

let radians = degtoRad(38);
console.log (radians);

// Problem 3: Create a function calculateFactorial that takes a number and returns its factorial.

function calculateFactorial(n) {
    if(n===0) {
        return 1;
    } else {
        return calculateFactorial(n-1) * n;
    }    
}

console.log(calculateFactorial(9));

// Problem 4: Create a function isPrime that takes a number as a parameter and returns true if it's a prime number, and false otherwise.

function isPrime(n) {
    if(n < 2) {
        return "not a prime number";
    }

    for( let i = 2; i < n; i++ ) {
        if(n % i === 0) {
            return "not a prime number";
        } else {
            return "its a prime number";
        }
    }
}

console.log(isPrime(13));

// Problem 5: Create a function mergeArrays that takes two arrays as parameters and returns a new array that merges both arrays.

function mergeArrays(arr1, arr2) {
    return arr1.concat(arr2);
}

let arr1 = ["a", "b", "c", "d"];
let arr2 = [1, 2, 3, 4, 5];

console.log(mergeArrays(arr1, arr2));

// Problem 6: Create a function isLeapYear that takes a year as a parameter and returns "This is a leap year" if it's a leap year, and "Not Leap year" otherwise.

function isLeapYear(year) {
    if((year % 4 ===0) && (year % 100 !==0)) {
        return "leap year";
    } else if(year % 400 ===0) {
        return "leap year";
    } else {
        return "not a leap year";
    }
}
console.log(isLeapYear(2025));

// Problem 7: Create a function removeDuplicates that takes an array and returns a new array with duplicates removed.

function removeDuplicates(array) {
    return[...new Set(array)];
}

var mainArray = [1, 2, 3, 2, 5, 8, 5, 9, 6, 4, 5];
var newArray = removeDuplicates(mainArray);
console.log(newArray);

// Problem 8: Create a function convertToCelsius that takes a temperature in Fahrenheit and returns the equivalent temperature in Celsius.

function convertToCelsius(Fahrenheit) {
    var Celsius = (Fahrenheit -32) * 5/9;
    return Celsius;
}

var FahrenheitTemperature = 78;
var CelsiusTemperature = convertToCelsius(FahrenheitTemperature);

console.log(CelsiusTemperature);


// Problem 9: Write a function to find the maximum of five numbers.

function maxOfFiveNumbers(num1, num2, num3, num4, num5) {
    return Math.max(num1, num2, num3, num4, num5);
}

var maxiumNumber = maxOfFiveNumbers(5, 10, 15, 30, 25);
console.log(maxiumNumber);

// Problem 10: Create a function called evenOdd() that takes a string as a parameter. Now you have to give the output based on the total number of characters in your String. The output will be 'even' or 'odd'. [ Input: ‘JavaScript’ Output: even, Input: ‘Hello’ Output: odd]

function evenOdd(inputString) {
    if(inputString.length % 2 === 0) {
        return "even";
    } else {
        return "odd";
    }
}

var string1 = "JavaScript";
var string2 = "Hello";

console.log(evenOdd(string1)); 
console.log(evenOdd(string2)); 