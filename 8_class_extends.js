class Phone {
  constructor(brand, price){
    this.brand = brand
    this.price = price
  }
  call(){
    console.log('我能打电话');
  }
}
class SmartPhone extends Phone {
  constructor(brand,price,color){
    super(brand,price)
    this.color = color
  }
  playGames(){
    console.log('我可以玩游戏');
  }
  videoCall(){
    console.log('我可以视频通话');
  }
}
const iPhone = new SmartPhone('iPhone',8888,'white')
console.log(iPhone);