// Create an object with a method that uses this to refer to the object’s properties.

const obj = {
  prop1: "this is property 1",
  prop2: "this is property 2",
  sayProps: function () {
    console.log("The prop1 is :", this.prop1);
    console.log("The prop2 is :", this.prop2);
  },
};
obj.sayProps();
