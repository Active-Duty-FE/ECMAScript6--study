class Phone {
  get price(){
    console.log("价格被读取");
    return '8888'
  }
  set price(newPrice){
    console.log('价格被更新--' + newPrice);
  }
}
const P = new Phone()
console.log(P.price);
P.price = 6666
