function Dog(name, colors, age){
  this.name = name,
  this.colors = colors,
  this.age = age
}

Dog.prototype.speak = function() {
  console.log("Woof!")
}

Dog.prototype.humanYears = function() {
  return this.age * 7
}
