const chai = require('chai');
const { expect } = chai;
const { Person } = require('../person');
const { Employee } = require('../employee')

describe('Person', function() {
  describe('#getName', function(){
    it('returns person name', function(){
      const charity = new Person('Charity');
      expect(charity.getName()).to.equal('Charity');
    });
  });

  describe('#getAge', function(){
    it('return person age', function(){
      const charity = new Person('Charity', 10);
      expect(charity.getAge()).to.equal(10);
    });
  });
});

describe('Employee', function() {
  describe ('#getDesignation', function(){
    it('return employee designation', function(){
      const economist = new Employee('Economist');
      expect(economist.getDesignation().to.equal('Economist'));
    })
  });
});

function typeOf(payslip) {
  var a = typeof payslip;
  if (a === 'object') {
    if (payslip) {
      if (payslip instanceof Array) {
        a = 'array';
      };
    } else {
      a = 'null';
    };
  };
  return a;
};