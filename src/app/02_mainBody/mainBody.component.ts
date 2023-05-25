import { DeclareFunctionStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
declare function renderEmptyBasket(): void;

@Component({
  selector: 'app-mainBody',
  templateUrl: './mainBody.component.html',
  styleUrls: ['./mainBody.component.scss']
})

export class MainBodyComponent implements OnInit{
  
  menus = [{
    image: "img/pizza_salami_1280.jpg",
    restaurant: "Majster Pizza",
    food: "Pizza Salami",
    ingredients:
      "with Mozarella, Hot Pepper, Tomatoe Sauce, Pepper, Sourdough, from the woodstove...",
    price: 8.5,
    amount: 1,
  },
  {
    image: "img/pasta_1.webp",
    restaurant: "La Noodleria",
    food: "Noodles Napoli",
    ingredients: "with Parmesan Cheese, Tomatoe Sauce, Basil",
    price: 9.5,
    amount: 1,
  },
  {
    image: "img/pizza_Milano2_1280 x 853.jpg",
    restaurant: "Majster Pizza",
    food: "Pizza Milano",
    ingredients: "Mozarella, Tomatoe Sauce, Mushrooms, Ham, Salami, Sourdough, from the woodstove...",
    price: 9,
    amount: 1,
  },
  {
    image: "img/ChilliConCarne2.jpeg",
    restaurant: "Restaurant 'El Presidente'",
    food: "Chilli-Con-Carne",
    ingredients: "Beef, Tomatoe Sauce, Chillies, Corn, Yogurt Dressing, Fresh Herbs and Lemon",
    price: 9,
    amount: 1,
  },
  {
    image: "img/rice_bowl2.webp",
    restaurant: "Healthy& Green",
    food: "Rice Bowl",
    ingredients: "with Pumpkin, Sour Cream, Peanuts, Curry-Spices",
    price: 10.5,
    amount: 1,
  }];

  basket = [];

  ngOnInit(): void {
    // RenderMenu_description(), renderEmptyBasket()
    // renderEmptyBasket();
  }

constructor () {
  // renderEmptyBasket();
}

}