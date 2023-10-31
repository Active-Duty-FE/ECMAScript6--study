## 连续解构赋值
一般解构
```js
let obj = {a:{b:{c:1}}}
const {a:{b:{c}} = obj
console.log(c) // 1
```
解构同时改名
```js
let obj = {a:{b:1}}
const {a:{b:data}} = obj
console.log(data) // 1
```
### 调用函数返回对象
```js
const a = b => 1
console.log(a()) //1
const a = b => 1 + b
console.log(a(9)) //10
const a = b => ({a:2})
console.log(a()) // {a:2}
```
```js
function obj(a){
    return {obj:a}
} 
```
等于
```js
const obj = a => ({obj:a})
```

### Iterator
for in 继承 Iterator 接口