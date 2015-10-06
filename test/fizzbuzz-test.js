var expect = require('chai').expect;
var Fizzbuzz = require('../lib/fizzbuzz.js');

describe("The fizzbuzz", function(){
  it("Should not replace 1", function(){
    var fb = new Fizzbuzz(20);
    expect(fb.replace(1)).to.equal(1);
  });

  it("Should replace 3 with Fizz", function(){
    var fb = new Fizzbuzz(20);
    expect(fb.replace(3)).to.equal('Fizz');
  });

  it("Should replace 5 with Buzz", function(){
    var fb = new Fizzbuzz(20);
    expect(fb.replace(5)).to.equal('Buzz');
  });

  it("Should replace 15 with FizzBuzz", function(){
    var fb = new Fizzbuzz(20);
    expect(fb.replace(15)).to.equal('FizzBuzz');
  });
});
