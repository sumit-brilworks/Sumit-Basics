function Animal(name) {
  this.name = name;
}
Animal.prototype.typeOfAnimal = function () {
  console.log("This is an animal named as", this.name);
};

const a = new Animal("ziraffe");
a.typeOfAnimal();

function Herbivores(name) {
  this.name = name;
}
Herbivores.prototype = Object.create(Animal.prototype);
Herbivores.prototype.constructor = Herbivores;

// overrides the typeOfAnimal method
Animal.prototype.typeOfAnimal = function () {
  console.log("This is an herbivores animal named as", this.name);
};
const ab = new Herbivores("Deer");
ab.typeOfAnimal();
console.log(ab);
