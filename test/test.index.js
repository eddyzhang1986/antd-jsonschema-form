var My=require('../src/index.jsx');
var expect = require('chai').expect;
describe('add test', function() {
  it('1 plus 1 should be two', function() {
    expect(My.add(1, 1)).to.be.equal(2);
  });
});