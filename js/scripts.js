function Cart() {
  this.cart = [];
  this.total = this.toalPrice();
}

Cart.prototype.addItem = function(item) {
  this.cart.push(item);
  return this.cart;
}

Cart.prototype.removeItem = function(item) {
  var index = this.cart.findIndex(item);
  if (index) {
    var cartSliceBefore = this.cart.slice(0, index);
    var cartSliceAfter = this.cart.slice(index + 1, );
    var newCart = cartSliceBefore + cartSliceAfter;
    this.cart = newCart;
    return this.cart;
  } else {
    return false;
  }
}

Cart.prototype.totalPrice = function() {
  var total = 0;
  this.cart.forEach(function(item) {
    total += item.price;
  });
  return total;
}

//type can be deepDish, thinCrust, stuffedCrust
function Pizza(type, size, sauce, cheese, veggies, protein) {
  this.type = type;
  this.size = size;
  this.sauce = sauce;
  this.cheese = cheese;
  this.veggies = veggies;
  this.protein = protein;
  this.price = 0;
}

Pizza.prototype.sizePrice = function() {
  if (this.size === 18) {
    return 18.00;
  } else if (this.size === 12) {
    return 12.00
  } else {
    return 8.00;
  }
}

Pizza.prototype.cheesePrice = function() {
  var cheesePrice = 1.0;
  var cheeses = this.cheese;
  if (cheeses.length > 1) {
    return (cheeses.length - 1) * cheesePrice;
  } else {
    return 0;
  }
}

Pizza.prototype.veggiePrice = function() {
  var veggiePrice = 0.5;
  var veggies = this.veggies;
  if (veggies.length > 3) {
    return (veggies.length - 3) * veggiePrice
  } else {
    return 0;
  }
}

Pizza.prototype.proteinPrice = function() {
  var proteinPrice = 1.0;
  var proteins = this.protein;
  if (proteins.length > 2) {
    return (proteins.length - 2) * proteinPrice;
  } else {
    return 0;
  }
}

Pizza.prototype.pizzaPrice = function() {
  var total = this.sizePrice() + this.cheesePrice() + this.veggiePrice() + this.proteinPrice();
  this.price = total;
  return this.price;
}

Pizza.prototype.modify = function(property, newPropertyValue) {
  if (Object.keys(this).includes(property)) {
    pizza[property] = newPropertyValue;
    return pizza[property];
  } else {
    return false;
  }
}

Pizza.prototype.addCheeses = function(cheeseArray) {
  var originalCheese = this.cheese;
  cheeseArray.forEach(function(cheeseInput) {
    if (!originalCheese.includes(cheeseInput)) {
      originalCheese.push(cheeseInput);
    }
  });
  return this.cheese;
}

Pizza.prototype.addVeggies = function(veggieArray) {
  var originalVeggie = this.veggie;
  veggieArray.forEach(function(veggie) {
    if (!originalVeggie.includes(veggie)) {
      originalVeggie.push(veggie);
    }
  });
  return this.veggie;
}

Pizza.prototype.addProtein = function(proteinArray) {
  var originalProtein = this.protein;
  proteinArray.forEach(function(protein) {
    if (!originalProtein.includes(protein)) {
      originalProtein.push(protein);
    }
  });
  return this.protein;
}

//testPizza
var testPizza = new Pizza(12, "white",["mozarella", "riccotta"],["onion", "garlic","basil","tomato"],["bacon", "impossible", "anchovy"]);

//bestsellers




$(document).ready(function(event) {


});
