// ============================================================================
// Interview Problem: Balanced Parentheses
// ============================================================================
//
// -------
// Prompt:
// -------
//
// You are building a linter for your company's new custom text editor to keep
// the code smells out of your (anticipated) massive codebase! Part of your
// technical design includes writing a function that checks that all of the
// parentheses in your engineers' code are balanced.
//
// Given a string of text, write a function that returns true if the
// parentheses are balanced, and false if they are not.
//
// Note: Your code should ignore all non-bracket characters in the input
//       string.
//
// ------
// Bonus:
// ------
//
// Though you may want to start by writing a function that simply handles
// parentheses as an MVP, to build a truly impactful product you must handle
// ALL bracket types, including:
//
//         - Parentheses:     ()
//         - Square Brackets: []
//         - Curly Brackets:  {}
//
// Update your original balancedParens function to handle all bracket types.
//
// ------------
// Constraints:
// ------------
//
// (1) Your function must run in linear time, O(n).
// (2) Your function must consume (at maximum) linear space, O(n).
//
// ---------------------------
// Example 1: Parentheses Only
// ---------------------------
//
// balancedParens('(');          => false
// balancedParens('()');         => true
// balancedParens(')(');         => false
// balancedParens(')()())');     => false
// balancedParens('((()()))');   => true
//
// -----------------------------
// Example 2: Parentheses + Text
// -----------------------------
//
// balancedParens('var x = Math.floor(2.5)');             => true
// balancedParens('var y = (((x + 5)/6) + 2*(x + 10))');  => true
// balancedParens('var z = ()(x + 5)/6) + 2*(x + 10))');  => false
//
// -----------------------
// Example 3: All Brackets
// -----------------------
//
// balancedParens('()[]{}');     => true
// balancedParens('[{()}]');     => true
// balancedParens('[{])({)[}');  => false
//
// ------------------------------
// Example 4: All Brackets + Text
// ------------------------------
//
// balancedParens('const roundDown = function(num) { return Math.floor(num) };');      => true
// balancedParens('{ array: [1, 2, [3, 4], 5], timesTwoMethod: (num) => num * 2; }');  => true
// balancedParens('function printThirdElement(array) { console.log(array[3]]] }');     => false
//
// -----------
// Let's code!
// -----------

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  push(value) {
    let newNode = new Node(value);

    if (!this.top) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      newNode.next = this.top;
      this.top = newNode;
    }

    this.length++;

    return newNode;
  }

  pop() {
    if (!this.top) return null;

    let tmp = this.top;
    this.top = tmp.next;
    this.length--;

    if (!this.top) {
      this.bottom = null;
    }

    return tmp.value;
  }

  size() {
    return this.length < 0 ? 0 : this.length;
  }
}

function balancedParens(str) {
  const openBracets = { "(": ")", "{": "}", "[": "]" };
  const closedBrackets = { ")": null, "}": null, "]": null };

  let stack = new Stack();
  let recentNode;

  for (let i = 0; i < str.length; i++) {
    // push to stack if open bracket
    if (str[i] in openBracets) {
      recentNode = stack.push(str[i]);
    }

    // pop out open bracket from stack if closed bracket appears
    else if (str[i] in closedBrackets) {
      // when bracket is closed check if it was same bracket
      if (recentNode && str[i] !== openBracets[recentNode.value]) {
        return false;
      }

      // if more brackets are closed without openning, then return false
      if (stack.pop() === null) return false;
      recentNode = stack.top;
    }
  }

  if (stack.length === 0) return true;
  return false;
}

exports.balancedParens = balancedParens;
