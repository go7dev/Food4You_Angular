// import { STRING_TYPE } from '@angular/compiler';
import { Component, OnInit, Input } from '@angular/core';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';

interface Category{
  // name: string,
  // info: string,
  // img: string
  // meals: string,
  // restaurant: string,
  // dish: string,
  // ingredients: string,
  // price: number,
  // amount: number
}

interface FoodJSON{
  // img: string,
  // meals: string,
  // restaurant: string,
  // dish: string,
  // ingredients: string,
  // price: number,
  // amount: number

[meal: string]: {
img: string,
restaurant: string,
dish: string,
ingredients: string,
price: number,
amount: number,
}[];
   
}



@Component({
  selector: 'app-TabMenu',
  templateUrl: './TabMenu.component.html',
  styleUrls: ['./TabMenu.component.scss']
})

export class TabMenuComponent implements OnInit{

constructor(){
// this.selectedCategory = this.categories[0];
}
@Input() categories : string [] = [];


// ----- Mihai Approach -----

// restaurantImage!: string;
// selectedCategory: Category;

// categories : Category [] = [
//   {name: "Pizzas", img: "./assets/img/meals/1_pizzas/pizza_Milano2_1280 x 853.jpg"},
//   {name: "Salads", img: "./assets/img/meals/2_salads/lemon_1_652 x 628_modified.jpg"},
//   {name: "Asia", img: "./assets/img/meals/1_pizzas/pizza_Milano2_1280 x 853.jpg"},
//   {name: "Pasta", img: "./assets/img/meals/1_pizzas/pizza_Milano2_1280 x 853.jpg"},
//   {name: "Indian", img: "./assets/img/meals/1_pizzas/pizza_Milano2_1280 x 853.jpg"},
//   {name: "HermanTheGerman", img: "./assets/img/meals/1_pizzas/pizza_Milano2_1280 x 853.jpg"},
//   {name: "Hamburger", img: "./assets/img/meals/1_pizzas/pizza_Milano2_1280 x 853.jpg"}
// ];

// changeSelectedCategory(selectedCategory : Category){
//   this.selectedCategory = selectedCategory;
// }

ngOnInit(): void {
}

Pizzas : FoodJSON [] = { meals : [{
                                  "Salami": [{
                                      img: "./assets/img/meals/1_pizzas/pizza_salami_1280.jpg",
                                      restaurant: "Majster Pizza",
                                      dish: "Pizza Salami",
                                      ingredients: "with Mozarella, Hot Pepper, Tomatoe Sauce, Pepper, Sourdough, from the woodstove...",
                                      price: 8.5,
                                      amount: 1
                                  }],
                                  "Milano": [{
                                      img: "./assets/img/meals/1_pizzas/pizza_Milano2_1280 x 853.jpg",
                                      restaurant: "Majster Pizza",
                                      dish: "Pizza Milano",
                                      ingredients: "with Mozarella, Tomatoe Sauce, Mushrooms, Ham, Salami, Sourdough, from the woodstove...",
                                      price: 9,
                                      amount: 1
                                  }],
                                  "Veggie": [{
                                    img: "./assets/img/meals/1_pizzas/veggie_1_723 x 642_modified.jpg",
                                    restaurant: "Majster Pizza",
                                    dish: "Pizza Veggie",
                                    ingredients: "with Mozarella, Tomatoe Sauce, Zucchini, Olives, Egg Plant, Rucola, from the woodstove...",
                                    price: 9,
                                    amount: 1
                                   }],
                                  "Four Seasons": [{
                                    img: "./assets/img/meals/1_pizzas/pizza_four seasons_1280x853.jpg",
                                    restaurant: "Majster Pizza",
                                    dish: "Pizza Four Seasons",
                                    ingredients: "with Mozarella, Tomatoe Sauce, Onions, Paprica, Olives, Salami, Mushrooms, Sourdough, from the woodstove...",
                                    price: 9,
                                    amount: 1
                                    }],
                                  "Diavolo": [{
                                    img: "./assets/img/meals/1_pizzas/diavolo_1_1220 x 598_modified.jpg",
                                    restaurant: "Majster Pizza",
                                    dish: "Pizza Diavolo",
                                    ingredients: "with Mozarella, Tomatoe Sauce, Hot Salami, Pepperoni, Sourdough, from the woodstove...",
                                    price: 9,
                                    amount: 1
                                    }],
                                  "Mozarella": [{
                                    img: "./assets/img/meals/1_pizzas/mozarella_1_1192 x 1084_modified.jpg",
                                    restaurant: "Majster Pizza",
                                    dish: "Pizza Mozarella",
                                    ingredients: "with Mozarella, Tomatoe Sauce, Tomatoes, Basil, Sourdough, from the woodstove...",
                                    price: 9,
                                    amount: 1
                                }],
                                }]
                              }


Salads : FoodJSON [] = { meals : [{
                                "Lemon": [{
                                    img: "./assets/img/meals/2_salads/lemon_1_652 x 628_modified.jpg",
                                    restaurant: "Green Rabbits",
                                    dish: "Lemon Salad",
                                    ingredients: "with Lemon, Cucumber, Tomatoes, Onion, Olives, Curled Lettuce",
                                    price: 13.5,
                                    amount: 1
                                }],
                                "Avocado": [{
                                    img: "./assets/img/meals/2_salads/avocado_1_1227 x 1229_modified.jpg",
                                    restaurant: "Green Rabbits",
                                    dish: "Avocado Salad",
                                    ingredients: "Avocado, Tomatoes, Cucumber, Flaxseed, Iceberg Lettuce",
                                    price: 12,
                                    amount: 1
                                }],
                                "Strawberry": [{
                                  img: "./assets/img/meals/2_salads/strawberry_1_756 x 773_modified.jpg",
                                  restaurant: "Green Rabbits",
                                  dish: "Strawberry Salad",
                                  ingredients: "Strawberries, Curled lettuce, Iceberg Lettuce",
                                  price: 16,
                                  amount: 1
                                 }],
                                "Homemade": [{
                                  img: "./assets/img/meals/2_salads/homemadeDarkBread_1_1280 x 853_modified.jpg",
                                  restaurant: "Green Rabbits",
                                  dish: "Homemade Salad",
                                  ingredients: "Olives, Avocado, Tomatoes, Feta Cheese, Lambs Lettuce",
                                  price: 14,
                                  amount: 1
                                  }],
                                "Paprica": [{
                                  img: "./assets/img/meals/2_salads/paprica_1_1280 x 853.jpg",
                                  restaurant: "Green Rabbits",
                                  dish: "Paprica Salad",
                                  ingredients: "Paprica, Nuts, Feta Cheese, Pepperoni, Onions",
                                  price: 11,
                                  amount: 1
                                  }],
                                "Burger": [{
                                  img: "./assets/img/meals/2_salads/veggieBurgerSalad_1_1280 x 1920_modified.jpg",
                                  restaurant: "Green Rabbits",
                                  dish: "Veggie Burger Salad",
                                  ingredients: "3 Patties made up of Fried Vergetables, Avocado Cream, Iceberg Lettuce, Corn, Ham, Feta Cheese",
                                  price: 15,
                                  amount: 1
                              }],
                              }]
                            }




}


