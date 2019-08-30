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
function Pizza(type, size, sauce, cheese, veggies, protein,name) {
  this.name = name;
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


//toping lists
var sizeOptions = [6,12,18];
var typeOptions = ["chicago","new york", "california"];
var sauceOptions = ["red", "white", "half and half", "bbq", "none"];
var cheeseOptions = ["mozarella", "riccotta", "blue","feta", "vegan"]
var veggieOptions = ["onion", "garlic", "basil", "tomato", "sun dried tomato", "corn", "arugala", "spinach", "red peppers", "jalapeno", "black olive", "green olive"];
var proteinOptions = ["anchovy","chicken","pepperoni","sausage","bacon","impossible"];

function htmlDIYPizza(sz, tp, sc, ch, veg, pro){
  var sizeOutput = "";
  sz.forEach(function(s){
    sizeOutput+= "<option value="+s+">"+s+"</option>";
  });
  var typeOutput = "";
  tp.forEach(function(t){
    typeOutput+="<option value="+t+">"+t+"</option>";
  });
  var sauceOutput = "";
  sc.forEach(function(s){
    sauceOutput+="<option value="+s+">"+s+"</option>";
  });
  var cheeseOutput = "";
  ch.forEach(function(c){
    cheeseOutput+="<li><input type=checkbox name=cheese value="+c+"><label for="+c+">"+c+"</label></li>";
  });
  var veggieOutput="";
  veg.forEach(function(v){
    veggieOutput += "<li><input type=checkbox name=veggies value="+v+"><label for="+v+">"+v+"</label></li>";
  });
  var proteinOutput = "";
  pro.forEach(function(p){
    proteinOutput+= "<li><input type=checkbox name=protein value="+p+"><label for="+p+">"+p+"</label></li>";
  });
  var output = "<h3>Size</h3><select>"+sizeOutput+"</select>"+"<h3>Type</h3><select>"+typeOutput+"</select>"+"<h3>Sauce</h3><select>"+sauceOutput+"</select>"+"<h3>Cheese</h3><ul>"+cheeseOutput+"</ul><h3>Veggie</h3><ul>"+veggieOutput+"</ul><h3>Protein</h3><ul>"+proteinOutput+"</ul><button type=submit class='btn btn-dark'>Add to Cart</button>";
  $("#makeYourOwn").html(output);
}

var original = new Pizza("New York", 18,"Red",["Mozarella"],[],["Pepperoni"],"Original New York");
original.price = 15;
var bbqChicken = new Pizza("Chicago",18,"Bbq",["Mozarella"],["Onion"]["Chicken"], "Barbeque Chicken");
bbqChicken.price = 15;
var allVegan = new Pizza("Claifornia", 18,"Red",["Vegan"],["Red Pepper", "Onion", "Arugala","Olive","Sun Dried Tomato"]["Impossible"], "Ultimate Vegan");
allVegan.price = 15;

var bestSellers = [original, bbqChicken, allVegan];


// function htmlBestSellers(bestSellers){
//   var output = "";
//   bestSellers.forEach(function(pizzaObj){
//     output+="<h2>"+pizzaObj.name+"</h2><ul>"+
//
//   });
// }

$(document).ready(function(event) {
htmlDIYPizza(sizeOptions, typeOptions, sauceOptions, cheeseOptions, veggieOptions, proteinOptions);


});
