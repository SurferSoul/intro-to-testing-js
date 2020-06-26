// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});
 //Exercise 1 Take your first "Test Drive" by writing your first test!
describe("sayHello", function () {
    it('should be a defined function', function () {
        expect(typeof sayHello).toBe('function');
    });
    it('should return a string when called', function() {
        expect(typeof sayHello()).toBe("string");
    });
    it('should return the string "Hello Jane!" when executed', function() {
        expect(sayHello("Jane")).toBe("Hello, Jane!");
    });
    it('should return the string "Alex" when executed', function() {
        expect(sayHello("Alex")).toBe("Hello, Alex!");
    });
    it('should return the string "Pat" when executed', function() {
        expect(sayHello("Pat")).toBe("Hello, Pat!");
    });
    it('should return the string "World" when executed', function() {
        expect(sayHello("World")).toBe("Hello, World!")
    });
    it('should return the string "Hello, World!" when executed', function() {
        expect(sayHello(true)).toBe("Hello, World!")
    });
    it('should return the string "Hello, World!" when executed', function() {
        expect(sayHello(false)).toBe("Hello, World!")
    });
});

// isFive function
describe("isFive", function () {
    it('should return a defined function', function () {
        expect(typeof isFive).toBe('function');
    });
    it('should return a boolean when called', function() {
        expect(typeof isFive()).toBe("boolean");
    });
    it('should return true when passed 5 executed', function() {
        expect(isFive(5)).toBe(true);
    });
    it('should return true when passed "5" executed', function() {
        expect(isFive("5")).toBe(true);
    });
});

//isEven function
describe("isEven", function () {
    it('should be a defined function', function () {
        expect(typeof isEven).toBe('function');
    });
    it('should return a boolean when called', function () {
        expect(typeof isEven()).toBe("boolean");
    });
    it('should return true when passed 2 is executed', function () {
        expect(isEven(2)).toBe(true);
    });
    it('should return true when passed -4 is executed', function () {
        expect(isEven(-4)).toBe(true);
    });
    it('should return false when passed 3 is executed', function () {
        expect(isEven(3)).toBe(false);
    });
    it('should return false when passed "banana" is executed', function () {
        expect(isEven("banana")).toBe(false);
    });
    it('should return true when passed "8" is executed', function () {
        expect(isEven(8)).toBe(true);
    });
    it('should return false when passed Infinity is executed', function () {
        expect(isEven(Infinity)).toBe(false);
    });
    it('should return false when passed without argument () is executed', function () {
        expect(isEven()).toBe(false);
    });
});

//isVowel function
describe("isVowel", function () {
    it('should be a defined function', function () {
        expect(typeof isVowel).toBe("function");
    });
    it('should return a boolean when called', function () {
        expect(typeof isVowel()).toBe("boolean");
    });
    it('should return true when passed "a" is executed', function () {
        expect(isVowel("a")).toBe(true);
    });
    it('should return true when passed "A" is executed', function () {
        expect(isVowel("A")).toBe(true);
    });
    it('should return false when passed "y" is executed', function () {
        expect(isVowel("y")).toBe(false);
    });
    it('should return false when passed 4 is executed', function () {
        expect(isVowel(4)).toBe(false);
    });
    it('should return false when passed true is executed', function () {
        expect(isVowel(true)).toBe(false);
    });
    it('should return false when passed false is executed', function () {
        expect(isVowel(false)).toBe(false);
    });
    it('should return false when passed () is executed', function () {
        expect(isVowel()).toBe(false);
    });
});

//add function

describe("add", function () {
    it('should be a defined function', function () {
        expect(typeof add).toBe("function");
    });
    it('should return 5 when 2, 3 are added', function () {
        expect(add(2,3)).toBe(5);
    });
    it('should return 11 when "5, 6 are added', function () {
        expect(add("5",6)).toBe(11);
    });
    it('should return 6 when "-4", "10" are added', function () {
        expect(add("-4","10")).toBe(6);
    })
    it('should return -12 when -3, -9 are added', function () {
        expect(add(-3,-9)).toBe(-12);
    });
    it('should return NaN when passed "banana", "split" is executed', function () {
        expect(add(NaN)).toBeNaN();
    });
    it('should return NaN when passed 2, "apples" is executed', function () {
        expect(add(NaN)).toBeNaN();
    });
    it('should return NaN when when add() is executed', function () {
        expect(add(NaN)).toBeNaN();
    });
});