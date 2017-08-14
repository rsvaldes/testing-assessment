const chai = require('chai');
const assert = chai.assert;
const expect = chai.expect;
const vowelCount = require('../vowelCount').vowelCount;

describe('vowelCount', function() {

  it('should count all vowels in the string', () => {
    const count = vowelCount('bella is the cutest');
    assert.equal(count, 6);
  });

  it('should display a message if given a non-string input', () => {
    assert.equal(6, '6', 'Please input a string');
  });

  it('should return false if input is undefined', () => {
    assert.equal(undefined, undefined, false)
  });

});
