import { DeclareFunctionStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
// declare function renderEmptyBasket(): void;

// interface FoodJSON {
//   [meal: string]: {
//     img: string,
//     restaurant: string,
//     dish: string,
//     ingredients: string,
//     price: number,
//     amount: number,
//   }[];
// }

interface FoodItem {
  img: string;
  restaurant: string;
  dish: string;
  ingredients: string;
  price: number;
  amount: number;
}


@Component({
  selector: 'app-mainBody',
  templateUrl: './mainBody.component.html',
  styleUrls: ['./mainBody.component.scss']
})

export class MainBodyComponent implements OnInit{

tabs : string [] = ["Don't Know Yet?", "Pizzas", "Salads", "Asia", "Pasta", "Indian", "HermanTheGerman", "Hamburger"];
activatedTabIndex: number = 0;
constructor () {
  // renderEmptyBasket();
}

ngOnInit(): void {
  // RenderMenu_description(), renderEmptyBasket()
  // renderEmptyBasket();
}

tabChange(tabIndex: number){
  // debugger;
  this.activatedTabIndex = tabIndex;
}



//   {name: "Pizzas"},
//   {name: "Salads", img: "./assets/img/meals/2_salads/lemon_1_652 x 628_modified.jpg"},
//   {name: "Asia", img: "./assets/img/meals/1_pizzas/pizza_Milano2_1280 x 853.jpg"},
//   {name: "Pasta", img: "./assets/img/meals/1_pizzas/pizza_Milano2_1280 x 853.jpg"},
//   {name: "Indian", img: "./assets/img/meals/1_pizzas/pizza_Milano2_1280 x 853.jpg"},
//   {name: "HermanTheGerman", img: "./assets/img/meals/1_pizzas/pizza_Milano2_1280 x 853.jpg"},
//   {name: "Hamburger", img: "./assets/img/meals/1_pizzas/pizza_Milano2_1280 x 853.jpg"}
// ];];

// ----- Food Arrays -----

Pizzas: FoodItem[] = [
  { 
    img: "./assets/img/meals/1_pizzas/pizza_salami_1280.jpg",
    restaurant: "Magic Pizza",
    dish: "Pizza Salami",
    ingredients: "with Mozzarella, Hot Pepper, Tomato Sauce, Pepper, Sourdough, from the wood stove...",
    price: 8.5,
    amount: 1
  },
  { 
    img: "./assets/img/meals/1_pizzas/pizza_Milano2_1280 x 853.jpg",
    restaurant: "Magic Pizza",
    dish: "Pizza Milano",
    ingredients: "with Mozzarella, Tomato Sauce, Mushrooms, Ham, Salami, Sourdough, from the wood stove...",
    price: 9,
    amount: 1
  },
  { 
    img: "./assets/img/meals/1_pizzas/veggie_1_723 x 642_modified.jpg",
    restaurant: "Magic Pizza",
    dish: "Pizza Veggie",
    ingredients: "with Mozzarella, Tomato Sauce, Zucchini, Olives, Egg Plant, Rucola, from the wood stove...",
    price: 9,
    amount: 1
  },
  { 
    img: "./assets/img/meals/1_pizzas/pizza_four seasons_1280x853.jpg",
    restaurant: "Magic Pizza",
    dish: "Pizza Four Seasons",
    ingredients: "with Mozzarella, Tomato Sauce, Onions, Paprika, Olives, Salami, Mushrooms, Sourdough, from the wood stove...",
    price: 9,
    amount: 1
  },
  { 
    img: "./assets/img/meals/1_pizzas/diavolo_1_1220 x 598_modified.jpg",
    restaurant: "Magic Pizza",
    dish: "Pizza Diavolo",
    ingredients: "with Mozzarella, Tomato Sauce, Hot Salami, Pepperoni, Sourdough, from the wood stove...",
    price: 9,
    amount: 1
  },
  { 
    img: "./assets/img/meals/1_pizzas/mozarella_1_1192 x 1084_modified.jpg",
    restaurant: "Magic Pizza",
    dish: "Pizza Mozarella",
    ingredients: "with Mozzarella, Tomato Sauce, Tomatoes, Basil, Sourdough, from the wood stove...",
    price: 9,
    amount: 1
  }
];

Salads: FoodItem[] = [
  {
  img: "./assets/img/meals/2_salads/lemon_1_652 x 628_modified.jpg",
  restaurant: "Green Rabbits",
  dish: "Lemon Salad",
  ingredients: "with Lemon, Cucumber, Tomatoes, Onion, Olives, Curled Lettuce",
  price: 13.5,
  amount: 1
  },
  {
  img: "./assets/img/meals/2_salads/avocado_1_1227 x 1229_modified.jpg",
  restaurant: "Green Rabbits",
  dish: "Avocado Salad",
  ingredients: "Avocado, Tomatoes, Cucumber, Flaxseed, Iceberg Lettuce",
  price: 12,
  amount: 1
  },
  {
  img: "./assets/img/meals/2_salads/strawberry_1_756 x 773_modified.jpg",
  restaurant: "Green Rabbits",
  dish: "Strawberry Salad",
  ingredients: "Strawberries, Curled lettuce, Iceberg Lettuce",
  price: 16,
  amount: 1
  },
  {
  img: "./assets/img/meals/2_salads/homemadeDarkBread_1_1280 x 853_modified.jpg",
  restaurant: "Green Rabbits",
  dish: "Homemade Salad",
  ingredients: "Olives, Avocado, Tomatoes, Feta Cheese, Lambs Lettuce",
  price: 14,
  amount: 1
  },
  {
  img: "./assets/img/meals/2_salads/paprica_1_1280 x 853.jpg",
  restaurant: "Green Rabbits",
  dish: "Paprica Salad",
  ingredients: "Paprica, Nuts, Feta Cheese, Pepperoni, Onions",
  price: 11,
  amount: 1
  },
  {
  img: "./assets/img/meals/2_salads/veggieBurgerSalad_1_1280 x 1920_modified.jpg",
  restaurant: "Green Rabbits",
  dish: "Veggie Burger Salad",
  ingredients: "3 Patties made up of Fried Vergetables, Avocado Cream, Iceberg Lettuce, Corn, Ham, Feta Cheese",
  price: 15,
  amount: 1
  }
  ];
  
Asian: FoodItem[] = [
  {
  img: "./assets/img/meals/3_asia/thaiShrimps_1_1280 x 1162.jpg",
  restaurant: "Chinese Garden",
  dish: "Thai Shrimps Noodles",
  ingredients: "Thai Noodles, Shrimps, Eggs, Coriander, Paprica, Chives, Thai Spices",
  price: 15.0,
  amount: 1
  },
  {
  img: "./assets/img/meals/3_asia/sushi3_1_1280 x 853.jpg",
  restaurant: "Chinese Garden",
  dish: "Sushi Neo-Tokyo",
  ingredients: "Rice, Algae, Avocado, Salmon, Different Fish, Iceberg Lettuce, Parsley, Herbs",
  price: 14,
  amount: 1
  },
  {
  img: "./assets/img/meals/3_asia/noodleSoup_1_1280 x 743_modified.jpg",
  restaurant: "Chinese Garden",
  dish: "Taiwanese Noodle Soup",
  ingredients: "Noodles, Broth, Pork, Beef, Vegetables, Herbs, Spices",
  price: 12.5,
  amount: 1
  },
  {
    img: "./assets/img/meals/3_asia/vietNoodleBowl_1_892 x 887_modified.jpg",
    restaurant: "Chinese Garden",
    dish: "Viet Bowl",
    ingredients: "Vietnamese Noodles, Chicken, Vgetables, Onion, Parsley, Peppermint, ",
    price: 14,
    amount: 1
  },
  {
    img: "./assets/img/meals/3_asia/ChinGongBeef_1_1280 x 960.jpg",
    restaurant: "Chinese Garden",
    dish: "Chin Gong Beef",
    ingredients: "Rice, Beef, Chinese Sweet-Sour Sauce, Peanuts, Sesame, Parsley, Iceberg Lettuce, Vegetables",
    price: 12,
    amount: 1
  },
  {
    img: "./assets/img/meals/3_asia/malaChicken_1_773 x 588_modified.jpg",
    restaurant: "Chinese Garden",
    dish: "Mala Chicken",
    ingredients: "Chicken, Tofu Cubes (fried), Green Beans, Plums, Spices",
    price: 11,
    amount: 1
}];
  
Pastas: FoodItem[] = [{
  img: "./assets/img/meals/4_pasta/basilTagliatelle_1_1280 x 1097.jpg",
  restaurant: "Angelo's",
  dish: "Tagliatelle Basil di Tuscany",
  ingredients: "Tagliatelle (homemade Style), Basil Pesto, Parmesan Cheese, Fresh Basil",
  price: 13.0,
  amount: 1
},
{
  img: "./assets/img/meals/4_pasta/fruttiMare_1280xx 853.jpg",
  restaurant: "Angelo's",
  dish: "Pasta Frutti di Mare",
  ingredients: "Spaghetti di Mare, Frutti di Mare, Fresh Venus Shells, Onions, Parsley",
  price: 19,
  amount: 1
},
{
img: "./assets/img/meals/4_pasta/creamPasta_1_853 x 822_modified.jpg",
restaurant: "Angelo's",
dish: "Crema Pasta",
ingredients: "Spaghetti, North Italian melting Cheese (aromatic), Cream, Parsley",
price: 9,
amount: 1
},
{
img: "./assets/img/meals/3_asia/vietNoodleBowl_1_892 x 887_modified.jpg",
restaurant: "Angelo's",
dish: "Spaghetti Bolognaise",
ingredients: "Spaghetti, Meat, Giorgio's Tomatoe Sauce, Parmesan Cheese",
price: 14,
amount: 1
},
{
img: "./assets/img/meals/4_pasta/salmone_1_1280 x 853.jpg",
restaurant: "Angelo's",
dish: "Pasta Salmone",
ingredients: "Tagliatelle, Salmone, Rosemary, Basil-Paprica-Cream, Asparagus, 1 Shrimp, Tomatoes, Radishes, Lemon",
price: 20,
amount: 1
},
{
img: "./assets/img/meals/4_pasta/shrimps_1_1280 x 697.jpg",
restaurant: "Angelo's",
dish: "Capri Shrimps",
ingredients: "Spaghetti, Shrimps di Capri, Tomatoes, Parmesan Cheese, Fresh Basil",
price: 11,
amount: 1
}];

Indian: FoodItem[] = [
    {
      img: "./assets/img/meals/5_indian/curryCheese_1_1280 x 853.jpg",
      restaurant: "Taj Mahal",
      dish: "Curry Cream Cheese",
      ingredients: "Rice, Cream Cheese, Curry, Paprica, Ginger, Curcuma, Parsley",
      price: 11.0,
      amount: 1
    },
    {
      img: "./assets/img/meals/5_indian/fullMenuSpices_1_1090 x 835_modified.jpg",
      restaurant: "Taj Mahal",
      dish: "Family Menu Curry",
      ingredients: "Rice, Optional: Chicken or Vegetable Curry, a Pallette of Indian Spices (Curcuma, Cinnamon, Caraway Seeds, Cashew Nuts, Clove, Nutmeg, Anisey, dried Orange Peel)",
      price: 38,
      amount: 1
    },
    {
      img: "./assets/img/meals/5_indian/modernSamosa_1_1280 x 550_modified.jpg",
      restaurant: "Taj Mahal",
      dish: "Modern Samosa",
      ingredients: "4x Dumplings with Vegetables (Fried), Paprica Powder, Onions, Parsley, Sweet-Sour Sauce",
      price: 12,
      amount: 1
    },
    {
      img: "./assets/img/meals/5_indian/fish_1_1280 x 853.jpg",
      restaurant: "Taj Mahal",
      dish: "Yoghurt Curry",
      ingredients: "Rice, Yoghurt (Spiced), Brocolli, Carrots, Onions, Parsley",
      price: 10,
      amount: 1
    },
    {
      img: "./assets/img/meals/5_indian/rice_bowl.jpg",
      restaurant: "Taj Mahal",
      dish: "Pumpkin Curry",
      ingredients: "Rice, Pumpkin, Peanuts, Onions, Carrots, Zucchini",
      price: 13,
      amount: 1
    },
    {
      img: "./assets/img/meals/5_indian/beansPan_1_720 x 592_modified.jpg",
      restaurant: "Taj Mahal",
      dish: "Beans Pan Curry",
      ingredients: "Rice, Beans, Cinnamon, Onions, Parsley",
      price: 14,
      amount: 1
    }
  ];
  
HermanTheGerman: FoodItem[] = [
    {
      img: "./assets/img/meals/6_hermanTheGerman/cheeseNoodles_1_1280 x 960.jpg",
      restaurant: "HermanTheGerman",
      dish: "Kaesspatzle (Cheese Noodles)",
      ingredients: "Noodles á la Herman Style, Melted Cheese, Onions (Roasted), Parsley",
      price: 12.0,
      amount: 1
    },
    {
      img: "./assets/img/meals/6_hermanTheGerman/TarteFlambeeAubergine_1_.jpg",
      restaurant: "HermanTheGerman",
      dish: "Tarte Flambée - Eggplant",
      ingredients: "Sour Dough, Tomatoes, German Cheese, Eggplant, Basil Pesto, Fresh Basil",
      price: 10,
      amount: 1
    },
    {
      img: "./assets/img/meals/6_hermanTheGerman/kartoffelgratin_1_1085 x 643_modified.jpg",
      restaurant: "HermanTheGerman",
      dish: "Potato Gratin",
      ingredients: "Potatoes, Melted Cheese, Onions, Rosemary, Parsley",
      price: 12,
      amount: 1
    },
    {
      img: "./assets/img/meals/6_hermanTheGerman/maultasche_1_1280 x 1218.jpg",
      restaurant: "HermanTheGerman",
      dish: "German Ravioli",
      ingredients: "5x Ravioli á la Herman Style (Filled with Meat or Vegetables), Stock, Basil",
      price: 15,
      amount: 1
    },
    {
      img: "./assets/img/meals/6_hermanTheGerman/schnitzel_2_1280 x 853.jpg",
      restaurant: "HermanTheGerman",
      dish: "Yaeger Schnitzel",
      ingredients: "French Fries, Pork Steak, Mushrooms with Cream Sauce, Salad",
      price: 18,
      amount: 1
    },
    {
      img: "./assets/img/meals/6_hermanTheGerman/tarteFlammbee_1_1280 x 853.jpg",
      restaurant: "HermanTheGerman",
      dish: "Tarte Flambée - Onions",
      ingredients: "Sour Dough, German Cheese, Onions, Bacon",
      price: 9,
      amount: 1
    }
  ];
  
Hamburgers: FoodItem[] = [
    {
      img: "./assets/img/meals/7_hamburger/americanDark_1_1279 x 1266_modified.jpg",
      restaurant: "Burgers' Paradise",
      dish: "American-Dark Burger",
      ingredients: "Beef, Dark-Bread Burger, American Cocktail Sauce, Cucumber, Iceberg Salad, Onions",
      price: 11.0,
      amount: 1
    },
    {
      img: "./assets/img/meals/7_hamburger/cheeseburger_1_1013 x 850_modified.jpg",
      restaurant: "Burgers' Paradise",
      dish: "Cheeseburger",
      ingredients: "Beef, Cheese, Egg, Dark-Bread Burger with Sesame, Mayonnaise, Tomatoes, Basil",
      price: 14,
      amount: 1
    },
    {
      img: "./assets/img/meals/7_hamburger/hamburger_1_1280 x 1010_modified.jpg",
      restaurant: "Burgers' Paradise",
      dish: "Hamburger Royal",
      ingredients: "Beef (2 Patties), Cheese, Iceberg Lettuce, Tomatoes, Onions, Yoghurt-Mayonnaise Sauce",
      price: 12,
      amount: 1
    },
    {
      img: "./assets/img/meals/7_hamburger/olive_1_1168 x 1099.jpg",
      restaurant: "Burgers' Paradise",
      dish: "Olive Burger",
      ingredients: "Olives, Beef (2 Patties), Bacon, Lettuce, Onions, Ketchup, Mayonnaise, Pickled Cucumber",
      price: 16,
      amount: 1
    },
    {
      img: "./assets/img/meals/7_hamburger/bbq_1_875 x 762_modified.jpg",
      restaurant: "Burgers' Paradise",
      dish: "BBQ Burger",
      ingredients: "Beef (1 Giant Pattie), Roasted Burger Bread, Cheese, Arugula Lettuce, Iceberg Lettuce, BBQ Sauce",
      price: 15,
      amount: 1
    },
    {
      img: "./assets/img/meals/7_hamburger/sesamChicken_1_808 x 680_modified.jpg",
      restaurant: "Burgers' Paradise",
      dish: "Sesame Chicken Burger",
      ingredients: "Chicken (1 Pattie), Iceberg Lettuce, Onions, Sesame Burger Bread, Tomatoes, Ketchup, Mayonnaise, Herbal Sauce",
      price: 13,
      amount: 1
    }
  ];
  


// Pizzas : FoodJSON[] = [{ 
//   "Salami": [{
//       img: "./assets/img/meals/1_pizzas/pizza_salami_1280.jpg",
//       restaurant: "Magic Pizza",
//       dish: "Pizza Salami",
//       ingredients: "with Mozarella, Hot Pepper, Tomatoe Sauce, Pepper, Sourdough, from the woodstove...",
//       price: 8.5,
//       amount: 1
//   }],
//   "Milano": [{
//       img: "./assets/img/meals/1_pizzas/pizza_Milano2_1280 x 853.jpg",
//       restaurant: "Magic Pizza",
//       dish: "Pizza Milano",
//       ingredients: "with Mozarella, Tomatoe Sauce, Mushrooms, Ham, Salami, Sourdough, from the woodstove...",
//       price: 9,
//       amount: 1
//   }],
//   "Veggie": [{
//     img: "./assets/img/meals/1_pizzas/veggie_1_723 x 642_modified.jpg",
//     restaurant: "Magic Pizza",
//     dish: "Pizza Veggie",
//     ingredients: "with Mozarella, Tomatoe Sauce, Zucchini, Olives, Egg Plant, Rucola, from the woodstove...",
//     price: 9,
//     amount: 1
//    }],
//   "Four Seasons": [{
//     img: "./assets/img/meals/1_pizzas/pizza_four seasons_1280x853.jpg",
//     restaurant: "Magic Pizza",
//     dish: "Pizza Four Seasons",
//     ingredients: "with Mozarella, Tomatoe Sauce, Onions, Paprica, Olives, Salami, Mushrooms, Sourdough, from the woodstove...",
//     price: 9,
//     amount: 1
//     }],
//   "Diavolo": [{
//     img: "./assets/img/meals/1_pizzas/diavolo_1_1220 x 598_modified.jpg",
//     restaurant: "Magic Pizza",
//     dish: "Pizza Diavolo",
//     ingredients: "with Mozarella, Tomatoe Sauce, Hot Salami, Pepperoni, Sourdough, from the woodstove...",
//     price: 9,
//     amount: 1
//     }],
//   "Mozarella": [{
//     img: "./assets/img/meals/1_pizzas/mozarella_1_1192 x 1084_modified.jpg",
//     restaurant: "Magic Pizza",
//     dish: "Pizza Mozarella",
//     ingredients: "with Mozarella, Tomatoe Sauce, Tomatoes, Basil, Sourdough, from the woodstove...",
//     price: 9,
//     amount: 1
// }],

// }]

// menus = [
//   {
//     image: "img/pizza_salami_1280.jpg",
//     restaurant: "Majster Pizza",
//     food: "Pizza Salami",
//     ingredients:
//       "with Mozarella, Hot Pepper, Tomatoe Sauce, Pepper, Sourdough, from the woodstove...",
//     price: 8.5,
//     amount: 1,
//   },
//   {
//     image: "img/pasta_1.webp",
//     restaurant: "La Noodleria",
//     food: "Noodles Napoli",
//     ingredients: "with Parmesan Cheese, Tomatoe Sauce, Basil",
//     price: 9.5,
//     amount: 1,
//   },
//   {
//     image: "img/pizza_Milano2_1280 x 853.jpg",
//     restaurant: "Majster Pizza",
//     food: "Pizza Milano",
//     ingredients: "Mozarella, Tomatoe Sauce, Mushrooms, Ham, Salami, Sourdough, from the woodstove...",
//     price: 9,
//     amount: 1,
//   },
//   {
//     image: "img/ChilliConCarne2.jpeg",
//     restaurant: "Restaurant 'El Presidente'",
//     food: "Chilli-Con-Carne",
//     ingredients: "Beef, Tomatoe Sauce, Chillies, Corn, Yogurt Dressing, Fresh Herbs and Lemon",
//     price: 9,
//     amount: 1,
//   },
//   {
//     image: "img/rice_bowl2.webp",
//     restaurant: "Healthy& Green",
//     food: "Rice Bowl",
//     ingredients: "with Pumpkin, Sour Cream, Peanuts, Curry-Spices",
//     price: 10.5,
//     amount: 1,
//   },
// ];

    // entry param type ' : any []' for the basket array 
  basket : any[] = [];  

  // in Typescript we not not need to write 'function' in front of a function
addMenuToBasket(menu_position_from_btn_onclick : number) {
  // Wie kann ich die Informationen zum Array menus an diese Funktion weiterreichen? Lediglich die Position des Onclick Elements wurde weitergereicht.
  console.log('menu_position_from_btn_onclick:', menu_position_from_btn_onclick);
  let entry_menu =  this.Pizzas[menu_position_from_btn_onclick]?.dish ||
                    this.Salads[menu_position_from_btn_onclick]?.dish ||
                    this.Asian[menu_position_from_btn_onclick]?.dish ||
                    this.Pastas[menu_position_from_btn_onclick]?.dish ||
                    this.Indian[menu_position_from_btn_onclick]?.dish ||
                    this.HermanTheGerman[menu_position_from_btn_onclick]?.dish ||
                    this.Hamburgers[menu_position_from_btn_onclick]?.dish; // Hier werden die Informationen zum Array menus direkt vom JSON-Array ausgelesen. Die lokale Variable entry_menu wird definiert = Json-Array menus [position_from_btn_onclick][Kategorie food]
  
console.log('entry_menu:', entry_menu);

  let entry_price = this.Pizzas[menu_position_from_btn_onclick]?.price ||
                    this.Salads[menu_position_from_btn_onclick]?.price ||
                    this.Asian[menu_position_from_btn_onclick]?.price ||
                    this.Pastas[menu_position_from_btn_onclick]?.price ||
                    this.Indian[menu_position_from_btn_onclick]?.price ||
                    this.HermanTheGerman[menu_position_from_btn_onclick]?.price ||
                    this.Hamburgers[menu_position_from_btn_onclick]?.price; // Hier werden die Informationen zum Array menus direkt vom JSON-Array ausgelesen. Die lokale Variable entry_menu wird definiert = Json-Array menus [position_from_btn_onclick][Kategorie price]
  
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