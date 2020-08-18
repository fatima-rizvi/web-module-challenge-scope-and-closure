//Stretch problem 2

var addSix = createBase(6);
addSix(10); // returns 16
addSix(21); // returns 27

function createBase(addNum){
  return function(num) {
    return num + addNum;
  }
}
