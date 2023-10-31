function Person(name, age){
  this.name = name
  this.age = age
  this.say = function () {
    console.log(`my name -- ${this.name}, my Age -- ${this.age}`)
  }
}
const P = new Person('xixi',4)
function Student (name, age) {
  this.name = name
  this.age =  age
  this.say = function () {
    console.log(`my name -- ${this.name}-stu, my Age -- ${this.age + 1}`)
  }
}
const S = new Student('mama',35)
S.say.call(P)
P.say.call(S)