const chai = require('chai');
const { expect } = chai;
const { Person } = require('../person');

describe('Person', function() {
  describe('#getName', function(){
    it('returns person name', function(){
      const charity = new Person('Charity');
      expect(charity.getName()).to.equal('Charity');

    });
  });
});

