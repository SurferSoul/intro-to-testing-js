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
    return input === "5";
}
