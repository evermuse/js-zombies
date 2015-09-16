//var chai = require('../node_modules/chai'); if running http-server comment out
var expect = chai.expect;
var should = chai.should();

describe('Item', function() {

  it('should be a function', function() {

    expect(Item).to.be.a('function');

  });

  it('should have a name', function() {

    var torch = new Item('torch');
    torch.name.should.equal('torch');

  });

});

//end Item specs

describe('Weapon', function() {

  var dagger;

  beforeEach(function() {

    dagger = new Weapon('dagger', 10);

  });

  it('should be a function', function() {

    expect(Weapon).to.be.a('function');

  });

  it('should be an Item', function() {

    expect(dagger instanceof Item).to.be.true;

  });

  it('should have a name', function() {

    dagger.name.should.equal('dagger');

  });

  it('should have a damage property', function() {

    dagger.damage.should.equal(10);

  });

});

//end weapon specs

describe('Food', function() {

  var bread;

  beforeEach(function() {

    bread = new Food('bread', 20);

  });

  it('should be a function', function() {

    expect(Food).to.be.a('function');

  });

  it('should be an Item', function() {

    expect(bread instanceof Food).to.be.true;

  });

});
