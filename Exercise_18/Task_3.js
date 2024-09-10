// Experiment with combining rest parameters with other named parameters.
function GiveNameAgeOtherInfo(name, age, ...otherInfo) {
  console.log("Your name is", name);
  console.log("Your age is", age);
  console.log("Your passed other arguments are", otherInfo);
}

GiveNameAgeOtherInfo("sumit", 19, "SDE", "Student");
