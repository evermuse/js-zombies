//var chai = require('../node_modules/chai'); if running http-server comment out
var expect = chai.expect;
var should = chai.should();

describe('Item', function() {

  it('should be a function', function() {

    expect(Item).to.be.a('function');

  });

  it('should have a name', function() {

    var torch = new Item('torch');
    torch.should.have.property('name');
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

  it('should be a Weapon instance', function() {

    dagger.should.be.an.instanceof(Weapon);

  });

  it('should have a properties name & damage', function() {

    dagger.should.have.property('name');
    dagger.should.have.property('damage');

  });

  it('should have a name', function() {

    dagger.name.should.equal('dagger');

  });

  it('damage property should equal 10', function() {

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

    Food.should.be.a('function');

  });

  it('should be a Food instance', function() {

    bread.should.be.an.instanceof(Food);

  });

  it('should have name & energy properties', function() {

    bread.should.have.property('name');
    bread.should.have.property('energy');

  });

  it('should have a name', function() {

    bread.name.should.equal('bread');

  });

  it('energy property should be 20', function() {

    bread.energy.should.equal(20);

  });

});

//end Food specs

describe('Player', function() {

  var bryan;

  beforeEach(function() {

    bryan = new Player('bryan', 100, 100, 100);

  });

  it('should be a function', function() {

    Player.should.be.a('function');

  });

  it('should have properties: name, health, strength, & speed', function() {

    bryan.should.have.property('name');
    bryan.should.have.property('health');
    bryan.should.have.property('strength');
    bryan.should.have.property('speed');

  });

  it('should have a private variables for pack & maxHealth', function() {

    bryan.should.have.property('_pack');
    bryan.should.have.property('_maxHealth');

  });

  it('pack should be empty', function() {

    expect(bryan.pack).to.be.undefined;

  });

});

// end Player specs

describe('.checkPack', function() {

  it.skip('should be a function');

});

describe('.takeItem', function() {

  it.skip('should be a function');

});

describe('.discardItem', function() {

  it.skip('should be a function');

});

describe('.equip', function() {

  it.skip('should be a function');

});

describe('.eat', function() {

  it.skip('should be a function');

});

describe('.useItem', function() {

  it.skip('should be a function');

});

describe('.equippedWith', function() {

  it.skip('should be a function');

});

describe('Zombie', function() {

  it.skip('should be a function');

});

describe('FastZombie', function() {

  it.skip('should be a function');

});

describe('StrongZombie', function() {

  it.skip('should be a function');

});

describe('RangedZombie', function() {

  it.skip('should be a function');

});

describe('ExplodingZombie', function() {

  it.skip('should be a function');

});


