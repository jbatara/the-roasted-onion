function Cart(){
  this.cart = [];
  this.total = this.toalPrice();
}

Cart.prototype.totalPrice = function(){
  var total =0;
  this.cart.forEach(function(item){
    total+= item.price;
  })
  return total;
}

//type can be deepDish, thinCrust, stuffedCrust
function Pizza(){
  this.type="";
  this.size=0;
  this.sauce="";
  this.cheese=[];
  this.veggies = [];
  this.protein = [];
  this.price =0;
}

Pizza.prototype.sizePrice = function(){
  if(this.size === 18){
    return 18.00;
  }else if(this.size === 12){
    return 12.00
  }else{
    return 8.00;
  }
}

Pizza.prototype.cheesePrice = function(){
  var cheesePrice = 1.0;
  var cheeses = this.cheese;
  if(cheese.length >1){
    return (cheeses.length-1)*cheesePrice;
  }else{
    return 0;
  }
}

Pizza.prototype.veggiePrice = function(){
  var veggiePrice = 0.5;
  var veggies = this.veggies;
  if(veggies.length > 3){
    return (veggies.length-3)*veggiePrice
  }else{
    return 0;
  }
}

Pizza.prototype.proteinPrice = function(){
  var proteinPrice = 1.0;
  var proteins = this.protein;
  if(proteins.length >2){
    return (proteins.length-2)*proteinPrice;
  }else{
    return 0;
  }
}

Pizza.prototype.pizzaPrice = function(){
  var total = this.sizePrice() + this.cheesePrice() + this.veggiePrice() + this.proteinPrice();
  this.price = total;
  return this.price;
}
