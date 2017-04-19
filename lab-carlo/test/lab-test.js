'use strict';

const assert = require('assert');
const lab = require('../lib/lab.js');

describe('lab.js', function() {
  describe('#LegendaryPokemon', function() {
    it('should return a legendary pokemon', function() {
      let mew = new lab.LegendaryPokemon('Mew', 'psychic');
      assert.equal(mew.isLegendary, true);
    });
    it('should call Pokemon to get name and type', function() {
      let mew = new lab.LegendaryPokemon('Mew', 'psychic');
      assert.equal(mew.name, 'Mew');
      assert.equal(mew.type, 'psychic');
    });
  });
  describe('#say', function() {
    it('should return Mew says \"Mew\"', function() {
      assert.equal(lab.say(lab.mew, 'Mew says \"Mew\"'));
    });
    it('should return a string', function() {
      assert.equal(typeof lab.say(lab.mew, ['Mew']), 'string');
    });
  });
  describe('#Pokemon', function() {
    it('should return a pokemon name', function() {
      let pikachu = new lab.Pokemon('Pikachu', 'electric');
      assert.equal(pikachu.name, 'Pikachu');
    });
    it('should return a pokemon type', function() {
      let pikachu = new lab.Pokemon('Pikachu', 'electric');
      assert.equal(pikachu.type, 'electric');
    });
  });
});
