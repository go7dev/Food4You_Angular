import { DeclareFunctionStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
// declare function renderEmptyBasket(): void;

@Component({
  selector: 'app-mainBody',
  templateUrl: './mainBody.component.html',
  styleUrls: ['./mainBody.component.scss']
})

export class MainBodyComponent implements OnInit{

categories : string [] = ["Pizzas", "Salads", "Asia", "Pasta", "Indian", "HermanTheGerman", "Hamburger"];

//   {name: "Pizzas"},
//   {name: "Salads", img: "./assets/img/meals/2_salads/lemon_1_652 x 628_modified.jpg"},
//   {name: "Asia", img: "./assets/img/meals/1_pizzas/pizza_Milano2_1280 x 853.jpg"},
//   {name: "Pasta", img: "./assets/img/meals/1_pizzas/pizza_Milano2_1280 x 853.jpg"},
//   {name: "Indian", img: "./assets/img/meals/1_pizzas/pizza_Milano2_1280 x 853.jpg"},
//   {name: "HermanTheGerman", img: "./assets/img/meals/1_pizzas/pizza_Milano2_1280 x 853.jpg"},
//   {name: "Hamburger", img: "./assets/img/meals/1_pizzas/pizza_Milano2_1280 x 853.jpg"}
// ];];

  
     // entry param type ' : any []' for the menus array 

  menus : any [] = [{
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

    // entry param type ' : any []' for the basket array 
  basket : any[] = [];  

  ngOnInit(): void {
    // RenderMenu_description(), renderEmptyBasket()
    // renderEmptyBasket();
  }

constructor () {
  // renderEmptyBasket();
}

  // in Typescript we not not need to put the tag 'function' in front of a function addMenutoBasket
addMenuToBasket(menu_position_from_btn_onclick : number) {
  // Wie kann ich die Informationen zum Array menus an diese Funktion weiterreichen? Lediglich die Position des Onclick Elements wurde weitergereicht.
  let entry_menu = this.menus[menu_position_from_btn_onclick]["food"]; // Hier werden die Informationen zum Array menus direkt vom JSON-Array ausgelesen. Die lokale Variable entry_menu wird definiert = Json-Array menus [position_from_btn_onclick][Kategorie food]
  let entry_price = this.menus[menu_position_from_btn_onclick]["price"]; // Hier werden die Informationen zum Array menus direkt vom JSON-Array ausgelesen. Die lokale Variable entry_menu wird definiert = Json-Array menus [position_from_btn_onclick][Kategorie price]
  let mealIndex = this.basket.findIndex((basket) => basket.food == entry_menu); //was muss hinter dem == stehen? Das hier ist die Filterfunktion...
            //was muss hinter dem == stehen? Das hier ist die Filterfunktion... Ist die price Variable nicht ohnehin überflüssig?

if (mealIndex == -1) {
  this.pushtoBasket(entry_menu, entry_price);
  } else {
  this.basket[mealIndex]["amount"]++; // im JSON-Array basket wird an der Position mealIndex der Wert von amount ++ erhöht, was +1 bedeutet.
  console.log(this.basket); // an dieser Stelle soll console.log ausgeführt werden, mit dem Eingabefehl (basket)
  }
  this.calcSubtotal();
// renderBasket(); //renderBasket(entry_menu, entry_price, menu_position_from_btn_onclick)
}


pushtoBasket(entry_menu : string, entry_price : number) {
  let amount = 1;
  let data = {
    food: entry_menu,
    price: entry_price,
    amount: amount,
  };

  this.basket.push(data);
}


resultSubtotal : number = 0;

calcSubtotal() {
  this.resultSubtotal = 0;

  for (let i = 0; i < this.basket.length; i++) {
                                                                                //  const resultSubtotal = menus[menu_position_from_btn_onclick]["price"]; (basket_infos, i));
                                                                                // const [product, quantity] = cur;
                                                                                    // return sum += products.find(p => p.name === product).price * quantity;
    this.resultSubtotal += this.basket[i]["price"] * this.basket[i]["amount"]; // hier wird der price des Artikels/ Foods aus dem JSON-Array multipliziert mit dem Amount aus dem gelichen JSON-Array
    
  }
  this.renderSums();
  // this.renderButtonLine(this.resultSubtotal);
}

finalSum : number = 0;

renderSums(){
   this.finalSum = this.resultSubtotal + 5;
 
}




basketMinus(Minus : any) {
  if (this.basket[Minus]["amount"] >= 2) {
    this.basket[Minus]["amount"]--;
                                        // wenn man auf Minus klickt, dann werden Amount-Werte manchmal um 2 reduziert.
      this.calcSubtotal();
      // renderBasket();
    
  } else {
    this.basket.splice(Minus, 1);

    if (this.basket.length == 0) {
      // renderEmptyBasket();
      // renderButtonLine();
    } else {
      this.calcSubtotal();
      // renderBasket();
    }
  }
}

basketPlus(Plus : any) {
  this.basket[Plus]["amount"]++;

  this.calcSubtotal();
  // renderBasket();
}


deleteOrder(i : number) {
  this.basket.splice(i, 1); 
  console.log(this.basket);
  if (this.basket.length == 0) {
    // renderEmptyBasket();
    // renderButtonLine();
  } else {
    this.calcSubtotal();
    // renderBasket();
  }         
}

// function shoppingCart() {
//   let foodlist = document.getElementById('order_content');
//   let shoppingCart = document.getElementById('basket_supra');

//   foodlist.classList.toggle('order_content_d-none');
//   shoppingCart.classList.toggle('basket_supra_display');
  
// }

// function renderButtonLine(resultSubtotal) {
//   let finalSum = resultSubtotal +5;
//   let buttonLine = document.getElementById('mediaCart');
//   buttonLine.innerHTML = '';
  
//   if (basket.length == 0) {
    
//     buttonLine.innerHTML += `
//     <button onclick="shoppingCart()">
//         <span>&#8679</span>
//         <h2>Shopping Cart</h2>
//         <span>&#8679</span>
//     </button>`

//   } else {
    
//   buttonLine.innerHTML += `
//         <button onclick="shoppingCart()">
//             <span>&#8679</span>
//             <h2>Shopping Cart (€ ${finalSum.toFixed(2)} )</h2>
//             <span>&#8679</span>
//         </button>
//   `;
//   }
// }

}