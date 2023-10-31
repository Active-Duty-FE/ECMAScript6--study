/* 
Symbol 特点：
1. Symbol 的值是唯一的，用来解决命名冲突的问题
2. Symbol 值不能与其他数据进行运算
3. Symbol 定义的对象属性不能用 for...in 循环遍历，但是可以使用 Reflect.ownKeys 来获取对象的所有键名

*/

// 1. 对象的私有属性，外界无法访问
const obj = {}
obj[Symbol('name')] = 'aa'
obj[Symbol('age')]= 18

const obj2 = {
  [Symbol('name')]:'bb',
  [Symbol('age')]:22,
}
console.log(obj2);
console.log(obj2[Symbol('age')])  // undefined 
console.log('1=================================');
//2. Symbol.for
const s1 = Symbol.for('name')
const s2 = Symbol.for('name')
console.log(s1 === s2);  // true
console.log('2=================================');
//3. 向对象添加方法
let game = {
  up: function(){
    console.log('go');
  },
  dowm: function(){
    console.log('dowm');
  }
}
game.up()
game.up = function(){
  console.log('overwrite up');
}
let methods = {
  up: Symbol('up'),
  dowm: Symbol('down')
}
game[methods.up] = function(){
  console.log('symbol up');
}
game[methods.down] = function(){
  console.log('symbol down');
}
game.up()
game[methods.up]()
console.log('3=====================================');
//4. 内置属性 == 控制 Object 在特定场景下的表现   简单说：重写对象的属性以及方法
//4.1. Symbol.hasInstance === 自定义 instanceof 返回值
class Person {
  static [Symbol.hasInstance](param){
    console.log('被调用检测类型')
    if(param instanceof Array){
      return true
    }else if(param instanceof Function){
      return true
    }
  }
}
const obj3 = {}
console.log(obj3 instanceof Person);
console.log('4.1=====================================');
//4.2 Symbol.isConcatSpreadable
const arr1 = [1,2,3,4]
const arr2 = [4,5,6,7]
arr2[Symbol.isConcatSpreadable] = false
const arr3 = arr1.concat(arr2)
const arr4 = [...arr1,...arr2]
console.log(arr3);
console.log(arr4);
console.log('4.2=====================================');
//4.3 Symbol.toStringTag
const Obj4 = {}
Obj4[Symbol.toStringTag] = 'aa'
console.log(Obj4.toString());
console.log('4.3=====================================');
