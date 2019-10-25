/*
  ==============================================
  WELCOME TO BUILD YOUR OWN FUNCTIONS TDD STYLE
  ==============================================
  - In this section you will replicate a Javascript Array methods.
  - We have multiple tests that should be solved, make sure to go
    one by one and read the error messages to get clues.
  - To solve the tests you should read the errors and try to solve them
    by writing the function that has already been declared.
    You are very welcomed to read the tests to gain insight but
    DO NOT change them, only the function.
  - Bellow we provide a short description of the function as well as the expected
    syntax. Documentation is unbeatable, so you are encouraged to click the link
    and gain further insight.
  - Try mixing it up for added difficulty. Go low level and avoid using other
    array methods. Can it be done without for loops?
  - ONWARDS!

  Description:
  The indexOf() method returns the first index at which a given element
  can be found in the array, or -1 if it is not present.

  Syntax:
  indexOf(array, searchElement[, fromIndex])

  Link to docs https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexof
*/

function indexOf(/*function parameters*/) {
  
  /*
    Your code goes here
  */
}

describe("specs to recreate indexOf array method", () => {
  describe("indexOf functionality", ()=>{
    it("returns the index of the searched element in the array", () => {
      const expected = 2;
      const actual = indexOf(["a", "b", "c"], "c");
      assert.equal(expected, actual);
    });
    it("returns -1 if the searched element is not found in the array", () => {
      const expected = -1;
      const actual = indexOf(["a", "b", "c"], "e");
      assert.equal(expected, actual);
    });
    it("begins looking for the searched element starting from the indexFrom value", () => {
      const expected = -1;
      const actual = indexOf(["a", "b", "c"], "a", 2);
      assert.equal(expected, actual);
    });
    it("searches the whole array if indexFrom is 0", () => {
      const expected = 2;
      const actual = indexOf(["a", "b", "c"], "c", 0);
      assert.equal(expected, actual);
    });
    it("searches the whole array if indexFrom has a negative value", () => {
      const expected = 1;
      const actual = indexOf(["a", "b", "c"], "b", -5);
      assert.equal(expected, actual);
    });
  });
  describe("indexOf parameters", ()=>{
    it("throws an error if the first argument is a number", () => {
      assert.throws(() => indexOf(47, 2), TypeError);
    });
    it("parses fromIndex if it's a string containing a number", () => {
      const expected = 1;
      const actual = indexOf(["a", "b", "c"], "b", "1");
      assert.equal(expected, actual);
    });
    it("searches the whole array if indexFrom can't be parsed into a number", () => {
      const expected = 2;
      const actual = indexOf(["a", "b", "c"], "c", "hello");
      assert.equal(expected, actual);
    });
    it("returns -1 if the indexFrom is greater than or equal to the array's length", () => {
      const expected = -1;
      const actual = indexOf(["a", "b", "c"], "a", 3);
      assert.equal(expected, actual);
    });
  });
});
