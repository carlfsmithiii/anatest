const chai = require("chai"),
const assert = require('chai').assert;
const expect = require('chai').expect;
chai.use(require("chai-sorted"));

const alphabetize = require('../').alphabetize;
const findAnagram = require('../').findAnagram;
const app = require('../anagram1');
   
describe("Anagram", function() {
  it('app should make sure letters in words are alphabetized', function(){
    expect(alphabetize).to.be.sorted({descending: false})
    // a test for the alphabetization function, even though it is given, to make sure that it's included in the solution
  });
  it('app should make sure length of words[i] === typedText', function({
    // expect(typedText).to.have.length.of(words[i])?
    // how do we grab the word (typedText) entered in the input box?  

  });

   // test implementation, s

});

