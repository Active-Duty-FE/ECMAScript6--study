/**
 * 实现了 iterator 接口 支持 [...Array] 和 for of
 * size 返回集合元素个数
 * add 增加一个新元素，返回当前集合
 * delete 删除元素，返回 boolean 值 
 * has 检测集合中是否包含某个元素，返回 boolean 值
*/
let s = new Set();
let s2 = new Set(['a','b','c','a','b'])
console.log(typeof s);
console.log(s2);
s2.add('e')
console.log('\nadd===\n' + s2);
s2.delete('a')
console.log('\ndelete===\n' + s2);
let result = s2.has('b')
console.log('\nhas===\n' + result);
s2.clear()
console.log('\nclear===\n' + s2);

// 实例

let arr = [1,2,3,4,5,6]
let arr2 = [4,5,6,7,8,9]
// 1.交集
let intersection = arr.filter(n => new Set(arr2).has(n))
console.log('\nintersection===\n' + intersection);
// 3.并集
let union = new Set([...arr,...arr2])
console.log('\nunion===\n' + union);
// 4.差集
let diff = [...arr.filter(n => !new Set(arr2).has(n)),...arr2.filter(n => !new Set(arr).has(n))]
console.log('\ndiff===\n' + diff);