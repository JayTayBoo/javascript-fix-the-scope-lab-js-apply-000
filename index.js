var animal = 'dog'
var animal2 = 'cat'

function myAnimal() {
  return animal
}

function yourAnimal() {
  return animal2
}

function add2(n) {
    const two = 2
  return parseInt(n) + two

  // Feel free to move things around!
}

var funkyFunction = function() {
  return function() {
    return "FUNKY!"
  }
}

// We want to set theFunk equal to "FUNKY!" using our funkyFunction.
// NOTE: you only need to modify the code below this line.
var theFunk = funkyFunction;