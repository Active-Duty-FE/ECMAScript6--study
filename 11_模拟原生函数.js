
const arr = [5,10,15,7,2,3]
// forEach
Array.prototype.myEach = function(fn){
  for (const i of this) {
    fn(i)
  }
}
arr.myEach(n => {
  console.log(n,'--forEach'); // 1,2,3
})

// filter
Array.prototype.myFilter = function(fn){
  let result = []
  for (const i of this) {
    if(fn(i)){
      result.push(i)
    }
  }
  return result
}
console.log(arr.myFilter(n => n < 7),'--filter');

// map
Array.prototype.myMap = function (fn) {
  let result = []
  for (const i of this) {
    result.push(fn(i))
  }
  return result
}
console.log(arr.myMap(n => n * 2),'--map');

// every
Array.prototype.myEvery = function (fn) {
  let result = true
  for (const i of this) {
    result = fn(i)
    if(!fn(i)){
      break;
    }
  }
  return result
}
console.log(arr.myEvery(n => n > 10),'--every');

// some
Array.prototype.mySome = function (fn) {
  let result = true
  for (const i of this) {
    result = fn(i)
    if(fn(i)){
      break;
    }
  }
  return result;
}
console.log(arr.mySome(n => n > 10),'--some');
