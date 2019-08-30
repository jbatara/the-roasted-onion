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
function Pizza() {
  this.type = "";
  this.size = 0;
  this.sauce = "";
  this.cheese = [];
  this.veggies = [];
  this.protein = [];
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
  cheeseArray.forEach(function(cheese) {
    if (!this.cheese.includes(cheese)) {
      this.cheese.push(cheese);
    }
  });
  return this.cheese;
}

Pizza.prototype.addVeggies = function(veggieArray) {
  veggieArray.forEach(function(veggie) {
    if (!this.veggie.includes(veggie)) {
      this.veggie.push(veggie);
    }
  });
  return this.veggie;
}

Pizza.prototype.addProtein = function(proteinArray) {
  proteinArray.forEach(function(protein) {
    if (!this.protein.includes(protein)) {
      this.protein.push(protein);
    }
  });
  return this.protein;
}


$(document).ready(function(event) {


});
