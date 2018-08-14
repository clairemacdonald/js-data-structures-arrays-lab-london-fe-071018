const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name){
  drivers.push(name);

  }

function destructivelyPrependDriver(name){
  drivers.unshift(name);
}

function destructivelyRemoveLastDriver(name) {
  drivers.pop(name);
}

function destructivelyRemoveFirstDriver(name) {
  drivers.shift(name);
}

function appendDriver(name) {
  return drivers.concat(name);
}

function prependDriver(name) {
  return [name].concat(drivers);
}

function removeLastDriver(name) {
  return drivers.slice(0, 2);
}

function removeFirstDriver(name) {
  return drivers.splice(1, 2);
}
