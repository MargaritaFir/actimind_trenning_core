
// 3. Реализовать класс Hamburger
class Hamburger {

    constructor(size, stuffing){
        this.toppings =[];
        this.stuffing = stuffing;
        this.size = size;
        this.addTopping = this.addTopping.bind(this);
        this.removeTopping = this.removeTopping.bind(this);
        this.getToppings = this.getToppings.bind(this);
        this.getStuffing = this.getStuffing.bind(this);
        this.calculatePrice = this.calculatePrice.bind(this);
        this.calculateCalories = this.calculateCalories.bind(this);
    }

    addTopping(topping){
        this.toppings.push(topping);
    };
    removeTopping(name){
       let removeToping = this.toppings.filter((elem) => elem.name === name);
       let index =  this.toppings.indexOf(removeToping);
       this.toppings = this.toppings.splice(index, 1);
    };
    getToppings() {
     return this.toppings;
    };

    getStuffing() {
        return this.stuffing;
    };

    calculatePrice() {
        let priceToppings = (this.toppings.length) ? this.toppings.reduce((sum, current) => sum + current.price, 0) : 0;
        const sumPrice = this.stuffing.price + this.size.price + priceToppings;
        return sumPrice;
    };

    calculateCalories () {
        let caloriesToppings = this.toppings.reduce((sum, current) => sum + current.calories, 0);
        const sumCalories = this.stuffing.calories + this.size.calories + caloriesToppings;
        return sumCalories;
    };

  };

  class CommonProperties {
    constructor(name, price, calories){
        this.name = name;
        this.price = price;
        this.calories = calories;
    }
  }
  

const small = new CommonProperties('small', 10, 100);
const cheese  = new CommonProperties('cheese', 5, 20);
const topping_1 = new CommonProperties( 'salt', 10, 0);

const hamburger = new Hamburger( small, cheese);

hamburger.addTopping(topping_1);
const price = hamburger.calculatePrice()
const calories = hamburger.calculateCalories();

console.log(`Price: ${price}`);
console.log(`Calories: ${calories}`);






