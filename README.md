# _Pizza Shop_

#### _A mockup of a pizza shop website, where you can order customized pizzas. August 30, 2019._

#### By _**Jennifer Batara**_

## Description

_This is a mock pizza restaurant website where users can come to order personalized pizzas, or a pizza of the bestseller menu._

## Specifications

1. Pizza base price is determined by price.
2. Base price for each pizza includes: one sauce, one cheese, up to 3 veggies, and up to 2 proteins. Aditional veggies cost 50 cents each (after 3), additional cheese (after 1) costs $1, and additional protein (after 2) cost $1.


|Spec | Input | Output|
|:---:|:------|:------|
|Pizza size determines base price | 18 inch <br> Red Sauce <br> Mozzarella <br> Olives, Tomatoes, Basil <br> Sausage, Bacon | $18.00|
|Pizza size determines base price|  12 inch <br> Red Sauce <br> Mozzarella <br> Olives, Tomatoes, Basil <br> Sausage, Bacon | $12.00|
|Pizza size determines base price|  8 inch <br> Red Sauce <br> Mozzarella <br> Olives, Tomatoes, Basil <br> Sausage, Bacon | $8.00|
|More than one cheese costs $1.00/ extra cheese|  8 inch <br> Red Sauce <br> Mozzarella, Ricotta <br> Olives, Tomatoes, Basil <br> Sausage, Bacon | Base: $8.00 <br> Add On: $1.00 <br>Total: $9.00|
|More than 3 veggies costs $0.50/extra veggie|  8 inch <br> Red Sauce <br> Mozzarella <br> Olives, Tomatoes, Basil, Onions, Garlic, Arugula <br> Sausage, Bacon | Base: $8.00 <br> Add On: $1.50 <br>Total: $9.50|
|More than 2 proteins costs $1.00/extra protein|  8 inch <br> Red Sauce <br> Mozzarella <br> Olives, Tomatoes, Basil<br> Sausage, Bacon, Chicken | Base: $8.00 <br> Add On: $1.50 <br>Total: $10.00|
|No Toppings Chosen at all| 18 inch <br> Red Sauce | Toppings: None <br> $18.00|


## Setup/Installation Requirements

-   Internet Connection
-   Internet browser
-   Unix Terminal (optional)

To view locally please copy the link to [this repo](https://github.com/jbatara/the-roasted-onion) and type the following command into your unix terminal:

$git clone repo_url

with repo_url being the url that was just copied. Open index.html using your internet browser of choice (not compatible with Safari) and create pizzas and add them to your cart!

The website is currently not hosted online. This README will be updated in the future if that ever changes.

## Known Bugs

_No known bugs have been reported._

## Support and contact details

Please feel free to contact the developer by raising a new [issue](https://github.com/jbatara/the-roasted-onion/issues/new) on the github repo. You can browse the current issues [here](https://github.com/jbatara/the-roasted-onion/issues).

## Technologies Used

* html
* CSS
* Bootstrap
* ES6
* jQuery

### License

_MIT_

Copyright (c) 2019 **_Jennifer Batara_**
