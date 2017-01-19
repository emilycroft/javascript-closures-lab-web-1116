const app = "I don't do much."

function bumpCounter() {
  var counter = 0
  function addBump() {
    counter++
  }
  function getBumps() {
    return counter
  }
  return {
    getBumps,
    addBump
  };
}

function createAnimal(animalType) {
  return function (deadlyDevice) {
    return {
      deadlyDevice,
      animalType
    }
  }
}
var sharkCreator = createAnimal('Shark')
var sharkWithFrickinLaserbeam = sharkCreator('Laserbeam')
var sharkWithFrickinCannon = sharkCreator('Cannon')
