// import { STRING_TYPE } from '@angular/compiler';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// import { AnyCatcher } from 'rxjs/internal/AnyCatcher';

interface FoodJSON {
meals: {
        [meal: string]: {
                          img: string,
                          restaurant: string,
                          dish: string,
                          ingredients: string,
                          price: number,
                          amount: number,
                        }[];
      }
}

@Component({
  selector: 'app-TabMenu',
  templateUrl: './TabMenu.component.html',
  styleUrls: ['./TabMenu.component.scss']
})

export class TabMenuComponent implements OnInit{

constructor(){
// this.selectedCategory = this.categories[0];
// this.FoodJSON
}
@Input() CategoriesArray : string [] = [];
@Output() onTabChange = new EventEmitter<number>();
activatedCategory: number = 0;

ngOnInit(): void {
}

setTab(index: number){
  this.activatedCategory = index;
  // debugger;
  this.onTabChange.emit(this.activatedCategory);
}


// categories : string [] = ["Pizzas", "Salads", "Asia", "Pasta", "Indian", "HermanTheGerman", "Hamburger"];

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



Pizzas : FoodJSON [] = [{ meals: {
                                  "Salami": [{
                                      img: "./assets/img/meals/1_pizzas/pizza_salami_1280.jpg",
                                      restaurant: "Magic Pizza",
                                      dish: "Pizza Salami",
                                      ingredients: "with Mozarella, Hot Pepper, Tomatoe Sauce, Pepper, Sourdough, from the woodstove...",
                                      price: 8.5,
                                      amount: 1
                                  }],
                                  "Milano": [{
                                      img: "./assets/img/meals/1_pizzas/pizza_Milano2_1280 x 853.jpg",
                                      restaurant: "Magic Pizza",
                                      dish: "Pizza Milano",
                                      ingredients: "with Mozarella, Tomatoe Sauce, Mushrooms, Ham, Salami, Sourdough, from the woodstove...",
                                      price: 9,
                                      amount: 1
                                  }],
                                  "Veggie": [{
                                    img: "./assets/img/meals/1_pizzas/veggie_1_723 x 642_modified.jpg",
                                    restaurant: "Magic Pizza",
                                    dish: "Pizza Veggie",
                                    ingredients: "with Mozarella, Tomatoe Sauce, Zucchini, Olives, Egg Plant, Rucola, from the woodstove...",
                                    price: 9,
                                    amount: 1
                                   }],
                                  "Four Seasons": [{
                                    img: "./assets/img/meals/1_pizzas/pizza_four seasons_1280x853.jpg",
                                    restaurant: "Magic Pizza",
                                    dish: "Pizza Four Seasons",
                                    ingredients: "with Mozarella, Tomatoe Sauce, Onions, Paprica, Olives, Salami, Mushrooms, Sourdough, from the woodstove...",
                                    price: 9,
                                    amount: 1
                                    }],
                                  "Diavolo": [{
                                    img: "./assets/img/meals/1_pizzas/diavolo_1_1220 x 598_modified.jpg",
                                    restaurant: "Magic Pizza",
                                    dish: "Pizza Diavolo",
                                    ingredients: "with Mozarella, Tomatoe Sauce, Hot Salami, Pepperoni, Sourdough, from the woodstove...",
                                    price: 9,
                                    amount: 1
                                    }],
                                  "Mozarella": [{
                                    img: "./assets/img/meals/1_pizzas/mozarella_1_1192 x 1084_modified.jpg",
                                    restaurant: "Magic Pizza",
                                    dish: "Pizza Mozarella",
                                    ingredients: "with Mozarella, Tomatoe Sauce, Tomatoes, Basil, Sourdough, from the woodstove...",
                                    price: 9,
                                    amount: 1
                                }],
                                }
                              }]


Salads : FoodJSON [] = [{ meals: {
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
                              }
                        }]


Asia : FoodJSON [] = [{ meals: {
                              "ThaiShrimps": [{
                                  img: "./assets/img/meals/3_asia/thaiShrimps_1_1280 x 1162.jpg",
                                  restaurant: "Chinese Garden",
                                  dish: "Thai Shrimps Noodles",
                                  ingredients: "Thai Noodles, Shrimps, Eggs, Coriander, Paprica, Chives, Thai Spices",
                                  price: 15.0,
                                  amount: 1
                              }],
                              "Sushi": [{
                                  img: "./assets/img/meals/3_asia/sushi3_1_1280 x 853.jpg",
                                  restaurant: "Chinese Garden",
                                  dish: "Sushi Neo-Tokyo",
                                  ingredients: "Rice, Algae, Avocado, Salmon, Different Fish, Iceberg Lettuce, Parsley, Herbs",
                                  price: 14,
                                  amount: 1
                              }],
                              "Taiwan": [{
                                img: "./assets/img/meals/3_asia/noodleSoup_1_1280 x 743_modified.jpg",
                                restaurant: "Chinese Garden",
                                dish: "Taiwanese Noodle Soup (Hot)",
                                ingredients: "Taiwanese Noodles, Beef, Coriander, Green Onion, Vegetables, Hot Spice",
                                price: 9,
                                amount: 1
                               }],
                              "Viet": [{
                                img: "./assets/img/meals/3_asia/vietNoodleBowl_1_892 x 887_modified.jpg",
                                restaurant: "Chinese Garden",
                                dish: "Viet Bowl",
                                ingredients: "Vietnamese Noodles, Chicken, Vgetables, Onion, Parsley, Peppermint, ",
                                price: 14,
                                amount: 1
                                }],
                              "ChinGong": [{
                                img: "./assets/img/meals/3_asia/ChinGongBeef_1_1280 x 960.jpg",
                                restaurant: "Chinese Garden",
                                dish: "Chin Gong Beef",
                                ingredients: "Rice, Beef, Chinese Sweet-Sour Sauce, Peanuts, Sesame, Parsley, Iceberg Lettuce, Vegetables",
                                price: 12,
                                amount: 1
                                }],
                              "Mala": [{
                                img: "./assets/img/meals/3_asia/malaChicken_1_773 x 588_modified.jpg",
                                restaurant: "Chinese Garden",
                                dish: "Mala Chicken",
                                ingredients: "Chicken, Tofu Cubes (fried), Green Beans, Plums, Spices",
                                price: 11,
                                amount: 1
                              }],
                            }
                      }]


Pasta : FoodJSON [] = [{ meals: {
                              "Basil": [{
                                  img: "./assets/img/meals/4_pasta/basilTagliatelle_1_1280 x 1097.jpg",
                                  restaurant: "Angelo's",
                                  dish: "Tagliatelle Basil di Tuscany",
                                  ingredients: "Tagliatelle (homemade Style), Basil Pesto, Parmesan Cheese, Fresh Basil",
                                  price: 13.0,
                                  amount: 1
                              }],
                              "FruttiMare": [{
                                  img: "./assets/img/meals/4_pasta/fruttiMare_1280xx 853.jpg",
                                  restaurant: "Angelo's",
                                  dish: "Pasta Frutti di Mare",
                                  ingredients: "Spaghetti di Mare, Frutti di Mare, Fresh Venus Shells, Onions, Parsley",
                                  price: 19,
                                  amount: 1
                              }],
                              "CremaPasta": [{
                                img: "./assets/img/meals/4_pasta/creamPasta_1_853 x 822_modified.jpg",
                                restaurant: "Angelo's",
                                dish: "Crema Pasta",
                                ingredients: "Spaghetti, North Italian melting Cheese (aromatic), Cream, Parsley",
                                price: 9,
                                amount: 1
                              }],
                              "Bolognaise": [{
                                img: "./assets/img/meals/3_asia/vietNoodleBowl_1_892 x 887_modified.jpg",
                                restaurant: "Angelo's",
                                dish: "Spaghetti Bolognaise",
                                ingredients: "Spaghetti, Meat, Giorgio's Tomatoe Sauce, Parmesan Cheese",
                                price: 14,
                                amount: 1
                                }],
                              "Salmone": [{
                                img: "./assets/img/meals/4_pasta/salmone_1_1280 x 853.jpg",
                                restaurant: "Angelo's",
                                dish: "Pasta Salmone",
                                ingredients: "Tagliatelle, Salmone, Rosemary, Basil-Paprica-Cream, Asparagus, 1 Shrimp, Tomatoes, Radishes, Lemon",
                                price: 20,
                                amount: 1
                                }],
                              "Shrimps": [{
                                img: "./assets/img/meals/3_asia/malaChicken_1_773 x 588_modified.jpg",
                                restaurant: "Angelo's",
                                dish: "Capri Shrimps",
                                ingredients: "Spaghetti, Shrimps di Capri, Tomatoes, Parmesan Cheese, Fresh Basil",
                                price: 11,
                                amount: 1
                              }],
                            }
                      }]


Indian : FoodJSON [] = [{ meals: {
                              "CurryCheese": [{
                                  img: "./assets/img/meals/5_indian/curryCheese_1_1280 x 853.jpg",
                                  restaurant: "Taj Mahal",
                                  dish: "Curry Cream Cheese",
                                  ingredients: "Rice, Cream Cheese, Curry, Paprica, Ginger, Curcuma, Parsley",
                                  price: 11.0,
                                  amount: 1
                              }],
                              "FamilyMenu": [{
                                  img: "./assets/img/meals/5_indian/fullMenuSpices_1_1090 x 835_modified.jpg",
                                  restaurant: "Taj Mahal",
                                  dish: "Family Menu Curry",
                                  ingredients: "Rice, Optional: Chicken or Vegetable Curry, a Pallette of Indian Spices (Curcuma, Cinnamon, Caraway Seeds, Cashew Nuts, Clove, Nutmeg, Anisey, dried Orange Peel)",
                                  price: 38,
                                  amount: 1
                              }],
                              "Samosa": [{
                                img: "./assets/img/meals/5_indian/modernSamosa_1_1280 x 550_modified.jpg",
                                restaurant: "Taj Mahal",
                                dish: "Modern Samosa",
                                ingredients: "4x Dumplings with Vegetables (Fried), Paprica Powder, Onions, Parsley, Sweet-Sour Sauce",
                                price: 12,
                                amount: 1
                              }],
                              "Yoghurt": [{
                                img: "./assets/img/meals/5_indian/fish_1_1280 x 853.jpg",
                                restaurant: "Taj Mahal",
                                dish: "Yoghurt Curry",
                                ingredients: "Rice, Yoghurt (Spiced), Brocolli, Carrots, Onions, Parsley",
                                price: 10,
                                amount: 1
                                }],
                              "Pumpkin": [{
                                img: "./assets/img/meals/5_indian/rice_bowl.jpg",
                                restaurant: "Taj Mahal",
                                dish: "Pumpkin Curry",
                                ingredients: "Rice, Pumpkin, Peanuts, Onions, Carrots, Zucchini",
                                price: 13,
                                amount: 1
                                }],
                              "Beans": [{
                                img: "./assets/img/meals/5_indian/beansPan_1_720 x 592_modified.jpg",
                                restaurant: "Taj Mahal",
                                dish: "Beans Pan Curry",
                                ingredients: "Rice, Beans, Cinnamon, Onions, Parsley",
                                price: 14,
                                amount: 1
                              }],
                            }
                      }]


HermanTheGerman : FoodJSON [] = [{ meals: {
                              "Kaesspatzle": [{
                                  img: "./assets/img/meals/6_hermanTheGerman/cheeseNoodles_1_1280 x 960.jpg",
                                  restaurant: "HermanTheGerman",
                                  dish: "Kaesspatzle (Cheese Noodles)",
                                  ingredients: "Noodles á la Herman Style, Melted Cheese, Onions (Roasted), Parsley",
                                  price: 12.0,
                                  amount: 1
                              }],
                              "TarteEggplant": [{
                                  img: "./assets/img/meals/6_hermanTheGerman/TarteFlambeeAubergine_1_.jpg",
                                  restaurant: "HermanTheGerman",
                                  dish: "Tarte Flambée - Eggplant",
                                  ingredients: "Sour Dough, Tomatoes, German Cheese, Eggplant, Basil Pesto, Fresh Basil",
                                  price: 10,
                                  amount: 1
                              }],
                              "PotatoGratin": [{
                                img: "./assets/img/meals/6_hermanTheGerman/kartoffelgratin_1_1085 x 643_modified.jpg",
                                restaurant: "HermanTheGerman",
                                dish: "Potato Gratin",
                                ingredients: "Potatoes, Melted Cheese, Onions, Rosemary, Parsley",
                                price: 12,
                                amount: 1
                              }],
                              "Maultaschen": [{
                                img: "./assets/img/meals/5_indian/fish_1_1280 x 853.jpg",
                                restaurant: "HermanTheGerman",
                                dish: "German Ravioli",
                                ingredients: "5x Ravioli á la Herman Style (Filled with Meat or Vegetables), Stock, Basil",
                                price: 15,
                                amount: 1
                                }],
                              "Schnitzel": [{
                                img: "./assets/img/meals/6_hermanTheGerman/schnitzel_2_1280 x 853.jpg",
                                restaurant: "HermanTheGerman",
                                dish: "Yaeger Schnitzel",
                                ingredients: "French Fries, Pork Steak, Mushrooms with Cream Sauce, Salad",
                                price: 18,
                                amount: 1
                                }],
                              "TarteOnion": [{
                                img: "./assets/img/meals/6_hermanTheGerman/tarteFlammbee_1_1280 x 853.jpg",
                                restaurant: "HermanTheGerman",
                                dish: "Tarte Flambée - Onions",
                                ingredients: "Sour Dough, German Cheese, Onions, Bacon",
                                price: 9,
                                amount: 1
                              }],
                            }
                      }]


Hamburgers : FoodJSON [] = [{ meals: {
                              "AmericanDark": [{
                                  img: "./assets/img/meals/7_hamburger/americanDark_1_1279 x 1266_modified.jpg",
                                  restaurant: "Burgers' Paradise",
                                  dish: "American-Dark Burger",
                                  ingredients: "Beef, Dark-Bread Burger, American Cocktail Sauce, Cucumber, Iceberg Salad, Onions",
                                  price: 11.0,
                                  amount: 1
                              }],
                              "CheeseBurger": [{
                                  img: "./assets/img/meals/7_hamburger/cheeseburger_1_1013 x 850_modified.jpg",
                                  restaurant: "Burgers' Paradise",
                                  dish: "Cheeseburger",
                                  ingredients: "Beef, Cheese, Egg, Dark-Bread Burger with Sesame, Mayonnaise, Tomatoes, Basil",
                                  price: 14,
                                  amount: 1
                              }],
                              "HamburgerRoyal": [{
                                img: "./assets/img/meals/7_hamburger/hamburger_1_1280 x 1010_modified.jpg",
                                restaurant: "Burgers' Paradise",
                                dish: "Hamburger Royal",
                                ingredients: "Beef (2 Patties), Cheese, Iceberg Salad, Tomatoes, Onions, Yoghurt-Mayonnaise Sauce",
                                price: 12,
                                amount: 1
                              }],
                              "OliveBurger": [{
                                img: "./assets/img/meals/7_hamburger/olive_1_1168 x 1099.jpg",
                                restaurant: "Burgers' Paradise",
                                dish: "Olive Burger",
                                ingredients: "Olives, Beef (2 Patties), Bacon, Salad, Onions, Ketchup, Mayonnaise, Pickled Cucumber",
                                price: 16,
                                amount: 1
                                }],
                              "BBQBurger": [{
                                img: "./assets/img/meals/7_hamburger/bbq_1_875 x 762_modified.jpg",
                                restaurant: "Burgers' Paradise",
                                dish: "BBQ Burger",
                                ingredients: "Beef (1 Giant Pattie), Roasted Burger Bread, Cheese, Arugula Salad, Iceberg Salad, BBQ Sauce",
                                price: 14,
                                amount: 1
                                }],
                              "ChickenBurger": [{
                                img: "./assets/img/meals/7_hamburger/sesamChicken_1_808 x 680_modified.jpg",
                                restaurant: "Burgers' Paradise",
                                dish: "Chicken Burger",
                                ingredients: "Chicken, Sesame Burger Bread, Tomatoes, Iceberg Salad, Ketchup or Cheese Sauce",
                                price: 10,
                                amount: 1
                              }],
                            }
                      }]



}


