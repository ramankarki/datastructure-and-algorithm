const { returns } = require("chai-spies");

class Node {
  constructor() {
    this.children = {};
    this.isTerminal = false;
  }
}

class Trie {
  constructor() {
    this.root = new Node();
  }

  insertRecur(word, root = this.root) {
    if (!word.length) return;
    let letter = word[0];

    if (!(letter in root.children)) {
      root.children[letter] = new Node();
    }

    if (word.length === 1) {
      root.children[letter].isTerminal = true;
    }

    this.insertRecur(word.slice(1), root.children[letter]);
  }

  insertIter(word) {
    let letterIdx = 0;
    let node = this.root;

    while (letterIdx < word.length) {
      let letter = word[letterIdx];

      if (!(letter in node.children)) {
        node.children[letter] = new Node();
      }

      if (letterIdx === word.length - 1) {
        node.children[letter].isTerminal = true;
      }

      node = node.children[letter];
      letterIdx++;
    }
  }

  searchRecur(word, root = this.root) {
    if (word.length === 0) {
      if (root.isTerminal) return true;
      return false;
    }

    let letter = word[0];
    if (letter in root.children) {
      return this.searchRecur(word.slice(1), root.children[letter]);
    }
    return false;
  }

  searchIter(word) {
    let letterIdx = 0;
    let node = this.root;

    while (letterIdx < word.length) {
      let letter = word[letterIdx];

      if (!(letter in node.children)) return false;

      if (letterIdx === word.length - 1) {
        if (node.children[letter].isTerminal) return true;
        return false;
      }

      node = node.children[letter];
      letterIdx++;
    }

    return true;
  }

  wordsWithPrefix(prefix, root = this.root) {
    if (!prefix.length) {
      let allWords = [];

      if (root.isTerminal) allWords.push("");

      for (let letter in root.children) {
        let child = root.children[letter];
        let suffixes = this.wordsWithPrefix(prefix, child);
        let words = suffixes.map((suffix) => letter + suffix);
        allWords.push(...words);
      }

      return allWords;
    } else {
      let letter = prefix[0];
      if (letter in root.children) {
        let suffixes = this.wordsWithPrefix(
          prefix.slice(1),
          root.children[letter]
        );
        return suffixes.map((suffix) => letter + suffix);
      } else {
        return [];
      }
    }
  }
}

// let tree = new Trie();
// tree.insertIter("hello");
// tree.insertIter("world");
// tree.insertIter("hi");
// tree.insertIter("wood");

// console.log(tree.searchIter("hell"));

module.exports = {
  Node,
  Trie,
};
