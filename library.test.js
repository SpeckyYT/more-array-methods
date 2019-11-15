const { expect } = require('chai');
const initialize = require('.');

describe('More Array Methods', function () {
  before(function () {
    initialize();
  });

  describe('polyfill', function () {
    it('should add methods to Array.prototype', function () {
      return expect(Array.prototype).to.have.haveOwnProperty('ascend');
    });
  });

  describe('methods', function () {
    beforeEach(function () {
      this.array = [ 12, 88, 21, 'heLLo', null, undefined, 0, 'Boomer', false, true, 31, 8, 0 ];
    });

    describe('#pick', function () {
      it('should pick random value', function () {
        return expect(this.array).to.include(this.array.pick());
      });
    });

    describe('#delete', function () {
      it('should return original array on out-of-bound index', function () {
        return expect(this.array.delete(3000)).to.eql(this.array);
      });

      it('should return original array on non-index parameter', function () {
        return expect(this.array.delete('colon')).to.eql(this.array);
      });

      it('should delete item', function () {
        return expect(this.array.delete(7)).to.not.include('Boomer');
      });
    });

    describe('#remove', function () {
      it('should eqeqeq remove on strict', function () {
        return expect(this.array.remove('88', true)).to.include(88);
      });

      it('should eqeq remove if not strict', function () {
        return expect(this.array.remove('88')).to.not.include(88);
      });
    });

    describe('#purge', function () {
      it('should eqeqeq purge on strict', function () {
        return expect(this.array.purge('0', true)).to.include(0);
      });

      it('should eqeq purge if not strict', function () {
        return expect(this.array.purge('0')).to.not.include(0);
      });
    });

    describe('#ascend', function () {
      it('should sort array asc', function () {
        // needs to be looked into
        const expected = [ null, 0, false, 0, true, 8, 12, 21, 31, 88, 'heLLo', undefined, 'Boomer' ];
        return expect(this.array.ascend()).to.eql(expected);
      });
    });

    describe('#descend', function () {
      it('should sort array desc', function () {
        // needs to be looked into
        const expected = [ 88, 31, 21, 12, 8, true, null, 0, false, 0, 'heLLo', undefined, 'Boomer' ];
        return expect(this.array.descend()).to.eql(expected);
      });
    });

    describe('#unique', function () {
      it('should only return unique items', function () {
        return expect(this.array.unique().filter(item => item === 0))
          .to.have.length(1);
      });
    });

    describe('#toLowerCase', function () {
      it('should turn all strings to lowercase', function () {
        return expect(this.array.toLowerCase())
          .to.include('hello')
          .and.to.include('boomer');
      });
    });

    describe('#toUpperCase', function () {
      it('should turn all strings to uppercase', function () {
        return expect(this.array.toUpperCase())
          .to.include('HELLO')
          .and.to.include('BOOMER');
      });
    });

    describe('#sum', function () {
      it('should add the numbers up', function () {
        return expect(this.array.sum()).to.eql(160);
      });
    });

    describe('#average', function () {
      it('should calculate average', function () {
        return expect(this.array.average()).to.approximately(12, 1);
      });
    });

    describe('#stringify', function () {
      it('should turn all numbers into strings', function () {
        const expected = [ '12', '88', '21', 'heLLo', null, undefined, '0', 'Boomer', false, true, '31', '8', '0' ];
        return expect(this.array.stringify()).to.eql(expected);
      });
    });

    describe('#numerify', function () {
      it('should turn all string-formatted numbers into ints', function () {
        const array = [ '22', '73.1', 12, '9' ];
        return expect(array.numerify()).to.eql([ 22, 73.1, 12, 9 ]);
      });
    });

    describe('#clean', function () {
      it('should remove undefined and null', function () {
        return expect(this.array.clean())
          .to.not.include(null)
          .and.to.not.include(undefined);
      });
    });

    describe('#group', function () {
      it('should group each value by occurrence', function () {
        const array = [ 3, 8, 3, 3, 1, 8, 9 ];
        return expect(array.group()).to.eql({
          '3': 3,
          '8': 2,
          '1': 1,
          '9': 1
        });
      });
    });

    describe('#most', function () {
      it('should return the most common value', function () {
        return expect(this.array.most()).to.eql('0');
      });
    });

    describe('#insert', function () {
      it('should insert value to the specified index', function () {
        const array = [3, 4, 5];
        return expect(array.insert(-1, 2)[2]).to.eql(-1);
      });
    });

    describe('#last', function () {
      it('should return last item of array', function () {
        return expect([3, 4, 8].last()).to.eql(8);
      });
    });

    describe('#h', function () {
      it('h', function () {
        return expect(this.array.h()).to.eql(Array(this.array.length).fill('h'));
      });
    });

    describe('#shuffle', function () {
      it('should shuffle array', function () {
        const array = [ 1, 2, 3 ];
        return expect(array.shuffle()).to.have.members(array);
      });
    });

    describe('#locate', function () {
      it('should locate item in array', function () {
        return expect(this.array.locate('Boomer')).to.eql({
          value: 'Boomer',
          index: 7
        });
      });

      it('should pass custom comparison callback', function () {
        const cb = item => typeof item === 'string' && item.startsWith('B');
        return expect(this.array.locate(cb)).to.eql({
          value: 'Boomer',
          index: 7
        });
      });
    });
  });
});
