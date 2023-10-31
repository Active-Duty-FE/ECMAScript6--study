let arr = [1.,5,5,6]
    
    const iterator = arr[Symbol.iterator]()
    console.log(iterator.next())
    console.log(iterator.next())
    console.log(iterator.next())
    console.log(iterator.next())
    console.log(iterator.next())
    const classOne = {
        name: 'one',
        stus: ['a','b','c','d'],
        [Symbol.iterator]() {
            let index = 0
            return {
                next: () => {
                    if(index < this.stus.length){
                        const result = {value:this.stus[index],done:false}
                        index ++
                        return result
                    }else{
                        return {value:'没了',done:true}
                    }
                }
            }
        }
    }
    for(let item of classOne){
        console.log(item);
    }
    classOne[Symbol.iterator]().next()
    classOne[Symbol.iterator]().next()
    classOne[Symbol.iterator]().next()
    classOne[Symbol.iterator]().next()
    classOne[Symbol.iterator]().next()