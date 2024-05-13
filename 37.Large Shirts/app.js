"use strict";
// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that
// reads I love TypeScript. Make a large shirt and a medium shirt with the default message,
// and a shirt of any size with a different message.
function make_shirt(size = "large", message = "I love typescript") {
    console.log(`Making a ${size} t-shirt with the message "${message}" printed on it.`);
}
make_shirt(); // Default large and messege
make_shirt("medium"); // Default messege, medium size
make_shirt("small", "Dive into Coding"); // Custom messege, small size
