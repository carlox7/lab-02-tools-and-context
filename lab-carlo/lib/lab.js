'use strict';

module.exports = exports = {};

exports.Pokemon = function(name, type) {
  this.name = name;
  this.type = type;
};

exports.LegendaryPokemon = function(name, type) {
  exports.Pokemon.call(this, name, type);
  this.isLegendary = true;
};

exports.say = function(greet) {
  console.log(this.name + '  says ' + '\"' + greet + '\"');
};

let pikachu = new exports.Pokemon('Pikachu', 'electric');
console.log(pikachu);

let mew = new exports.LegendaryPokemon('Mew', 'psychic');
console.log(mew);

exports.say.apply(pikachu, ['Pika pi Pikachu']);

exports.say.apply(mew, ['Mew']);
