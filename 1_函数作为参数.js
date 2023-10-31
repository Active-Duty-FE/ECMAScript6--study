let arr = [1,5,6,93]
function eachFn (arr, fn) {
  for(let i = 0; i < arr.length; i++){
    fn(arr[i])
  }
}
eachFn(arr,(i) => {
  console.log(i);
})
const Person = {
  name: 'xixi',
  age: 5
}
const mapPerson = new Map(Object.entries(Person))
console.log(mapPersone);
Object.prototype.each = function(fn){
  for(let i = 0; i < this.length; i++){
    fn(this[i])
  }
}

mapPerson.each((i) => {
  console.log(i);
})