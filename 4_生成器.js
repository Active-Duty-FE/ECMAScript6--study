function * gen () {
  console.log(1);
  yield '一';
  console.log(2);
  yield '二';
  console.log(3);
  yield '三';
}
const iterator = gen()
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

console.log('======================');

function * gen2(arg) {
  console.log(arg);
  let one = yield 111;
  console.log(one);
  let two = yield 222;
  console.log(two);
  let three = yield 333;
  console.log(three);
}
let iterator2 = gen2('arg')
console.log(iterator2.next('one'));
console.log(iterator2.next('two'));
console.log(iterator2.next('three'));
console.log(iterator2.next('four'));

console.log('==========================');

function one() {
  setTimeout(() => {
    console.log(111);
    iterator3.next();
  }, 1000)
  
}
function two(params) {
  setTimeout(() => {
    console.log(222);
    iterator3.next();
  }, 2000)
}
function three(params) {
  setTimeout(() => {
    console.log(333);
  }, 3000)
}
function * gen3() {
  yield one()
  yield two()
  yield three()
}
const iterator3 = gen3()
iterator3.next();

console.log('============================');

function getUsers(params) {
  setTimeout(() => {
    let data = '用户数据'
    iterator4.next(data)
  }, 7000);
}
function getOrders(params) {
  setTimeout(() => {
    let data = '订单数据'
    iterator4.next(data)
  }, 1000);
}
function getGoods(params) {
  setTimeout(() => {
    let data = '商品数据'
    iterator4.next(data)
  }, 1000);
}
function *generator(params) {
  let users = yield getUsers()
  console.log(users);
  let orders = yield getOrders()
  console.log(orders);
  let products = yield getGoods()
  console.log(products);
}
const iterator4 = generator()
iterator4.next()