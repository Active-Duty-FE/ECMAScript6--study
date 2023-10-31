class Person {
  #age;
  #weight
  constructor(name, age, weight) {
    
    this.name = name
    this.#age = age
    this.#weight = weight
  }
  intro(){
    console.log(`我的名字是${this.name},年龄是${this.#age},体重为${this.#weight}`);
  }
}
const girl = new Person('xixi',7,'24kg')
console.log(girl);