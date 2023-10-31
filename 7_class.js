// 传统
function Phone(name, price) {
  this.name = name;
  this.price = price;
}
Phone.prototype.call = function () {
  console.log('Phone 可以打电话');
}
const P = new Phone('Phone',123)
console.log(P);
P.call()
// class
class MobilePhone {
  constructor(name,price){
    this.name = name;
    this.price = price;
  }
  call(){
    console.log('MobilePhone 可以打电话');
  }
}
const MP = new MobilePhone('MobilePhone',456)
console.log(MP);
MP.call()
// 静态属性 属于类自身，实例化对象不能访问
class Nokia {
  static name = 'nokia'
  static price = 123
}
const nokiaIn = new Nokia()
console.log(nokiaIn.name);
console.log(Nokia.name);