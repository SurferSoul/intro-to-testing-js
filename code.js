// helloWorld function 
const helloWorld = function() {
    return "Hello, World!";
}

//sayHello function
function sayHello(input) {
    if (typeof input === "boolean" ) {
        return "Hello, World!";
    } else {
    return "Hello, " + input + "!"
    }
}

//isFive function
function isFive(input) {
    return input == 5;
}

//isEven function
function isEven(input) {
    return input % 2 === 0;
 }
 
//isVowel
function isVowel(vowel) {
    let vow = ["a", "e", "i", "o", "u", "A", "E", "Y", "O", "U"];
    if (vow.indexOf(vowel) != -1) {
        return true;
    } else {
        return false;
    }
}


