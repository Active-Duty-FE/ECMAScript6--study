/**
 * 本身是一个 对象 继承了 Iterator 接口 支持 [...Array] for of 
 * size：返回 Map 的元素个数
 * set：增加一个新元素，返回当前 Map
 * get：返回键名对象的键值
 * has：检测 Map 中是否包含某个元素，返回 boolean 值
 * clear：清空集合，返回 undefined
 */
let map = new Map()

map.set('name','xixi')
map.set('change',function abc() {
  console.log('haha');
})
let key = {baby:'xixi'}
map.set(key,['lovey','cuty'])
console.log(map);

console.log(map.size);

map.delete('name')
console.log(map);
console.log(map.get('change'));
for (const map1 of map) {
  console.log(map1);
}