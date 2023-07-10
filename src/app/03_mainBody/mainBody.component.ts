// import { DeclareFunctionStmt } from '@angular/compiler';
import { Component, OnInit, ViewChild, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import * as bootstrap from 'bootstrap';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { DomSanitizer } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { tooltip } from 'ng-bootstrap';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { createPopper } from '@popperjs/core';
// import { Tooltip } from 'bootstrap';



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

//interface definition defines object structure for TypeScript

interface FoodItem {
  id: string;
  img: string;
  restaurant: string;
  restaurantIMG: string;
  location: string;
  dish: string;
  ingredients: string;
  selectedStar: number;
  deliverTime: number;
  price: number;
  amount: number;
}

// interface cuisineType {
//   [cuisineCategory: string]: FoodItem[];
// }

// interface selection {
//   cuisineCategory: string;
// }


@Component({
  selector: 'app-mainBody',
  templateUrl: './mainBody.component.html',
  styleUrls: ['./mainBody.component.scss']
})

export class MainBodyComponent implements OnInit{


// defines tabs Array
tabs : string [] = ["Don't Know Yet?", "Pizzas", "Salads", "Asia", "Pasta", "Indian", "HermanTheGerman", "Hamburgers"];

//activatedTabIndex variable gets input value tabChange(), see code-lines 52-55
activatedTabIndex: number = 0;

// initialize private sanitizer: DomSanitizer for bypassing security trust on dynamically rendered html code
constructor (private sanitizer: DomSanitizer) {
  
}

ngOnInit(): void {
  this.dontKnowYet();
  this.initBootstrapTooltips();
  // this.initPopovers();
}

// ngAfterViewChecked(): void {
//   jQuery('[data-bs-toggle="tooltip"]').tooltip();
// }

// @ViewChild('popoverContent') popoverContent: any;



// catches the value from the variable "activatedCategory: number", see mainBody.component.html, code-line 4; Here renamed as tabIndex 
tabChange(tabIndex: number){
  // debugger;
  this.activatedTabIndex = tabIndex;
}


//                            !----- Food Arrays -----!

Pizzas: FoodItem[] = [
    { 
      id: "pizzas",
      img: "./assets/img/meals/1_pizzas/pizza_salami_1280.jpg",
      restaurant: "Magic Pizza",
      restaurantIMG: "./assets/img/restaurantIMGs/magicPizza_1_CC00_640x896_mod2.jpg",
      location: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17305.25916587046!2d13.463704296639811!3d52.514221309924125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a84e5edfbb9139%3A0x64d2319b3f19cf56!2sBoxhagener%20Platz!5e0!3m2!1sde!2sde!4v1687273395283!5m2!1sde!2sde" width="100%" height="150" style="border:0;" scrolling="yes" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
      dish: "Pizza Salami",
      ingredients: "with Mozzarella, Hot Pepper, Tomato Sauce, Pepper, Sourdough, from the wood stove...",
      selectedStar: 3,
      deliverTime: 15,
      price: 8.5,
      amount: 1
    },
    { 
      id: "pizzas",
      img: "./assets/img/meals/1_pizzas/pizza_Milano2_1280 x 853.jpg",
      restaurant: "Magic Pizza",
      restaurantIMG: "./assets/img/restaurantIMGs/magicPizza_1_CC00_640x896_mod2.jpg",
      location: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17305.25916587046!2d13.463704296639811!3d52.514221309924125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a84e5edfbb9139%3A0x64d2319b3f19cf56!2sBoxhagener%20Platz!5e0!3m2!1sde!2sde!4v1687273395283!5m2!1sde!2sde" width="100%" height="150" style="border:0;" scrolling="yes" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
      dish: "Pizza Milano",
      ingredients: "with Mozzarella, Tomato Sauce, Mushrooms, Ham, Salami, Sourdough, from the wood stove...",
      selectedStar: 1,
      deliverTime: 25,
      price: 9,
      amount: 1
    },
    { 
      id: "pizzas",
      img: "./assets/img/meals/1_pizzas/veggie_1_723 x 642_modified.jpg",
      restaurant: "Magic Pizza",
      restaurantIMG: "./assets/img/restaurantIMGs/magicPizza_1_CC00_640x896_mod2.jpg",
      location: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17305.25916587046!2d13.463704296639811!3d52.514221309924125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a84e5edfbb9139%3A0x64d2319b3f19cf56!2sBoxhagener%20Platz!5e0!3m2!1sde!2sde!4v1687273395283!5m2!1sde!2sde" width="100%" height="150" style="border:0;" scrolling="yes" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
      dish: "Pizza Veggie",
      ingredients: "with Mozzarella, Tomato Sauce, Zucchini, Olives, Egg Plant, Rucola, from the wood stove...",
      selectedStar: 2,
      deliverTime: 20,
      price: 8,
      amount: 1
    },
    { 
      id: "pizzas",
      img: "./assets/img/meals/1_pizzas/pizza_four seasons_1280x853.jpg",
      restaurant: "Magic Pizza",
      restaurantIMG: "./assets/img/restaurantIMGs/magicPizza_1_CC00_640x896_mod2.jpg",
      location: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17305.25916587046!2d13.463704296639811!3d52.514221309924125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a84e5edfbb9139%3A0x64d2319b3f19cf56!2sBoxhagener%20Platz!5e0!3m2!1sde!2sde!4v1687273395283!5m2!1sde!2sde" width="100%" height="150" style="border:0;" scrolling="yes" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
      dish: "Pizza Four Seasons",
      ingredients: "with Mozzarella, Tomato Sauce, Onions, Paprika, Olives, Salami, Mushrooms, Sourdough, from the wood stove...",
      selectedStar: 4,
      deliverTime: 20,
      price: 11,
      amount: 1
    },
    { 
      id: "pizzas",
      img: "./assets/img/meals/1_pizzas/diavolo_1_1220 x 598_modified.jpg",
      restaurant: "Magic Pizza",
      restaurantIMG: "./assets/img/restaurantIMGs/magicPizza_1_CC00_640x896_mod2.jpg",
      location: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17305.25916587046!2d13.463704296639811!3d52.514221309924125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a84e5edfbb9139%3A0x64d2319b3f19cf56!2sBoxhagener%20Platz!5e0!3m2!1sde!2sde!4v1687273395283!5m2!1sde!2sde" width="100%" height="150" style="border:0;" scrolling="yes" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
      dish: "Pizza Diavolo",
      ingredients: "with Mozzarella, Tomato Sauce, Hot Salami, Pepperoni, Sourdough, from the wood stove...",
      selectedStar: 5,
      deliverTime: 15,
      price: 9,
      amount: 1
    },
    { 
      id: "pizzas",
      img: "./assets/img/meals/1_pizzas/mozarella_1_1192 x 1084_modified.jpg",
      restaurant: "Magic Pizza",
      restaurantIMG: "./assets/img/restaurantIMGs/magicPizza_1_CC00_640x896_mod2.jpg",
      location: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17305.25916587046!2d13.463704296639811!3d52.514221309924125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a84e5edfbb9139%3A0x64d2319b3f19cf56!2sBoxhagener%20Platz!5e0!3m2!1sde!2sde!4v1687273395283!5m2!1sde!2sde" width="100%" height="150" style="border:0;" scrolling="yes" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
      dish: "Pizza Mozarella",
      ingredients: "with Mozzarella, Tomato Sauce, Tomatoes, Basil, Sourdough, from the wood stove...",
      selectedStar: 3,
      deliverTime: 18,
      price: 7,
      amount: 1
    }
  ];

Salads: FoodItem[] = [
    {
      id: "salads",
      img: "./assets/img/meals/2_salads/lemon_1_652 x 628_modified.jpg",
      restaurant: "Green Rabbits",
      restaurantIMG: "./assets/img/restaurantIMGs/saladBar_2_CC00_640x427.jpg",
      location: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5622.718975471653!2d13.065670054619977!3d52.41327890799852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a8f7570e60019f%3A0x854243f660fec203!2zS8O8Y2hlbmdlYsOkdWRl!5e0!3m2!1sde!2sde!4v1687273714191!5m2!1sde!2sde" width="100%" height="150" style="border:0;" scrolling="yes" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
      dish: "Lemon Salad",
      ingredients: "with Lemon, Cucumber, Tomatoes, Onion, Olives, Curled Lettuce",
      selectedStar: 5,
      deliverTime: 25,
      price: 13.5,
      amount: 1
    },
    {
      id: "salads",
      img: "./assets/img/meals/2_salads/avocado_1_1227 x 1229_modified.jpg",
      restaurant: "Green Rabbits",
      restaurantIMG: "./assets/img/restaurantIMGs/saladBar_2_CC00_640x427.jpg",
      location: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5622.718975471653!2d13.065670054619977!3d52.41327890799852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a8f7570e60019f%3A0x854243f660fec203!2zS8O8Y2hlbmdlYsOkdWRl!5e0!3m2!1sde!2sde!4v1687273714191!5m2!1sde!2sde" width="100%" height="150" style="border:0;" scrolling="yes" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
      dish: "Avocado Salad",
      ingredients: "Avocado, Tomatoes, Cucumber, Flaxseed, Iceberg Lettuce",
      selectedStar: 5,
      deliverTime: 20,
      price: 12,
      amount: 1
    },
    {
      id: "salads",
      img: "./assets/img/meals/2_salads/strawberry_1_756 x 773_modified.jpg",
      restaurant: "Green Rabbits",
      restaurantIMG: "./assets/img/restaurantIMGs/saladBar_2_CC00_640x427.jpg",
      location: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5622.718975471653!2d13.065670054619977!3d52.41327890799852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a8f7570e60019f%3A0x854243f660fec203!2zS8O8Y2hlbmdlYsOkdWRl!5e0!3m2!1sde!2sde!4v1687273714191!5m2!1sde!2sde" width="100%" height="150" style="border:0;" scrolling="yes" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
      dish: "Strawberry Salad",
      ingredients: "Strawberries, Curled Lettuce, Iceberg Lettuce",
      selectedStar: 3,
      deliverTime: 15,
      price: 16,
      amount: 1
    },
    {
      id: "salads",
      img: "./assets/img/meals/2_salads/homemadeDarkBread_1_1280 x 853_modified.jpg",
      restaurant: "Green Rabbits",
      restaurantIMG: "./assets/img/restaurantIMGs/saladBar_2_CC00_640x427.jpg",
      location: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5622.718975471653!2d13.065670054619977!3d52.41327890799852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a8f7570e60019f%3A0x854243f660fec203!2zS8O8Y2hlbmdlYsOkdWRl!5e0!3m2!1sde!2sde!4v1687273714191!5m2!1sde!2sde" width="100%" height="150" style="border:0;" scrolling="yes" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
      dish: "Homemade Salad",
      ingredients: "Olives, Avocado, Tomatoes, Feta Cheese, Lambs Lettuce",
      selectedStar: 1,
      deliverTime: 40,
      price: 14,
      amount: 1
    },
    {
      id: "salads",
      img: "./assets/img/meals/2_salads/paprica_1_1280 x 853.jpg",
      restaurant: "Green Rabbits",
      restaurantIMG: "./assets/img/restaurantIMGs/saladBar_2_CC00_640x427.jpg",
      location: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5622.718975471653!2d13.065670054619977!3d52.41327890799852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a8f7570e60019f%3A0x854243f660fec203!2zS8O8Y2hlbmdlYsOkdWRl!5e0!3m2!1sde!2sde!4v1687273714191!5m2!1sde!2sde" width="100%" height="150" style="border:0;" scrolling="yes" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
      dish: "Paprica Salad",
      ingredients: "Paprica, Nuts, Feta Cheese, Pepperoni, Onions",
      selectedStar: 2,
      deliverTime: 30,
      price: 11,
      amount: 1
    },
    {
      id: "salads",
      img: "./assets/img/meals/2_salads/veggieBurgerSalad_1_1280 x 1920_modified.jpg",
      restaurant: "Green Rabbits",
      restaurantIMG: "./assets/img/restaurantIMGs/saladBar_2_CC00_640x427.jpg",
      location: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5622.718975471653!2d13.065670054619977!3d52.41327890799852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a8f7570e60019f%3A0x854243f660fec203!2zS8O8Y2hlbmdlYsOkdWRl!5e0!3m2!1sde!2sde!4v1687273714191!5m2!1sde!2sde" width="100%" height="150" style="border:0;" scrolling="yes" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
      dish: "Veggie Burger Salad",
      ingredients: "3 Patties made up of Fried Vergetables, Avocado Cream, Iceberg Lettuce, Corn, Ham, Feta Cheese",
      selectedStar: 4,
      deliverTime: 35,
      price: 15,
      amount: 1
    }
  ];
  
Asian: FoodItem[] = [
    {
      id: "asian",
      img: "./assets/img/meals/3_asia/thaiShrimps_1_1280 x 1162.jpg",
      restaurant: "Chinese Garden",
      restaurantIMG:"./assets/img/restaurantIMGs/chineseGarden_3_CC00_640x427.jpg",
      location: '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1153.3921844750453!2d9.992136160213866!3d53.54220391506839!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sde!2sde!4v1687274140842!5m2!1sde!2sde" width="100%" height="150" style="border:0;" scrolling="yes" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
      dish: "Thai Shrimps Noodles",
      ingredients: "Thai Noodles, Shrimps, Eggs, Coriander, Paprica, Chives, Thai Spices",
      selectedStar: 5,
      deliverTime: 35,
      price: 15.0,
      amount: 1
    },
    {
      id: "asian",
      img: "./assets/img/meals/3_asia/sushi3_1_1280 x 853.jpg",
      restaurant: "Chinese Garden",
      restaurantIMG:"./assets/img/restaurantIMGs/chineseGarden_3_CC00_640x427.jpg",
      location: '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1153.3921844750453!2d9.992136160213866!3d53.54220391506839!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sde!2sde!4v1687274140842!5m2!1sde!2sde" width="100%" height="150" style="border:0;" scrolling="yes" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
      dish: "Sushi Neo-Tokyo",
      ingredients: "Rice, Algae, Avocado, Salmon, Different Fish, Iceberg Lettuce, Parsley, Herbs",
      selectedStar: 4,
      deliverTime: 15,
      price: 14,
      amount: 1
    },
    {
      id: "asian",
      img: "./assets/img/meals/3_asia/noodleSoup_1_1280 x 743_modified.jpg",
      restaurant: "Chinese Garden",
      restaurantIMG:"./assets/img/restaurantIMGs/chineseGarden_3_CC00_640x427.jpg",
      location: '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1153.3921844750453!2d9.992136160213866!3d53.54220391506839!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sde!2sde!4v1687274140842!5m2!1sde!2sde" width="100%" height="150" style="border:0;" scrolling="yes" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
      dish: "Taiwanese Noodle Soup",
      ingredients: "Noodles, Broth, Pork, Beef, Vegetables, Herbs, Spices",
      selectedStar: 3,
      deliverTime: 20,
      price: 12.5,
      amount: 1
    },
    {
      id: "asian",
      img: "./assets/img/meals/3_asia/vietNoodleBowl_1_892 x 887_modified.jpg",
      restaurant: "Chinese Garden",
      restaurantIMG:"./assets/img/restaurantIMGs/chineseGarden_3_CC00_640x427.jpg",
      location: '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1153.3921844750453!2d9.992136160213866!3d53.54220391506839!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sde!2sde!4v1687274140842!5m2!1sde!2sde" width="100%" height="150" style="border:0;" scrolling="yes" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
      dish: "Viet Bowl",
      ingredients: "Vietnamese Noodles, Chicken, Vgetables, Onion, Parsley, Peppermint, ",
      selectedStar: 1,
      deliverTime: 25,
      price: 14,
      amount: 1
    },
    {
      id: "asian",
      img: "./assets/img/meals/3_asia/ChinGongBeef_1_1280 x 960.jpg",
      restaurant: "Chinese Garden",
      restaurantIMG:"./assets/img/restaurantIMGs/chineseGarden_3_CC00_640x427.jpg",
      location: '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1153.3921844750453!2d9.992136160213866!3d53.54220391506839!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sde!2sde!4v1687274140842!5m2!1sde!2sde" width="100%" height="150" style="border:0;" scrolling="yes" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
      dish: "Chin Gong Beef",
      ingredients: "Rice, Beef, Chinese Sweet-Sour Sauce, Peanuts, Sesame, Parsley, Iceberg Lettuce, Vegetables",
      selectedStar: 5,
      deliverTime: 30,
      price: 12,
      amount: 1
    },
    {
      id: "asian",
      img: "./assets/img/meals/3_asia/malaChicken_1_773 x 588_modified.jpg",
      restaurant: "Chinese Garden",
      restaurantIMG:"./assets/img/restaurantIMGs/chineseGarden_3_CC00_640x427.jpg",
      location: '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1153.3921844750453!2d9.992136160213866!3d53.54220391506839!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sde!2sde!4v1687274140842!5m2!1sde!2sde" width="100%" height="150" style="border:0;" scrolling="yes" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
      dish: "Mala Chicken",
      ingredients: "Chicken, Tofu Cubes (fried), Green Beans, Plums, Spices",
      selectedStar: 3,
      deliverTime: 25,
      price: 11,
      amount: 1
  }
];
  
Pastas: FoodItem[] = [{
      id: "pastas",    
      img: "./assets/img/meals/4_pasta/basilTagliatelle_1_1280 x 1097.jpg",
      restaurant: "Angelo's",
      restaurantIMG: "./assets/img/restaurantIMGs/pasta_1_CC00_640x427.jpg",
      location: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d860.0258945152949!2d6.959769188676069!3d50.93747578023893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bf25ff8b3b90c1%3A0x98f3dd8123f4c033!2sHeumarkt!5e0!3m2!1sde!2sde!4v1687274249484!5m2!1sde!2sde" width="100%" height="150" style="border:0;" scrolling="yes" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
      dish: "Tagliatelle Basil di Tuscany",
      ingredients: "Tagliatelle (homemade Style), Basil Pesto, Parmesan Cheese, Fresh Basil",
      selectedStar: 5,
      deliverTime: 20,
      price: 13.0,
      amount: 1
    },
    {
      id: "pastas",
      img: "./assets/img/meals/4_pasta/fruttiMare_1280xx 853.jpg",
      restaurant: "Angelo's",
      restaurantIMG: "./assets/img/restaurantIMGs/pasta_1_CC00_640x427.jpg",
      location: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d860.0258945152949!2d6.959769188676069!3d50.93747578023893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bf25ff8b3b90c1%3A0x98f3dd8123f4c033!2sHeumarkt!5e0!3m2!1sde!2sde!4v1687274249484!5m2!1sde!2sde" width="100%" height="150" style="border:0;" scrolling="yes" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
      dish: "Pasta Frutti di Mare",
      ingredients: "Spaghetti di Mare, Frutti di Mare, Fresh Venus Shells, Onions, Parsley",
      selectedStar: 5,
      deliverTime: 45,
      price: 19,
      amount: 1
    },
    {
      id: "pastas",
      img: "./assets/img/meals/4_pasta/creamPasta_1_853 x 822_modified.jpg",
      restaurant: "Angelo's",
      restaurantIMG: "./assets/img/restaurantIMGs/pasta_1_CC00_640x427.jpg",
      location: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d860.0258945152949!2d6.959769188676069!3d50.93747578023893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bf25ff8b3b90c1%3A0x98f3dd8123f4c033!2sHeumarkt!5e0!3m2!1sde!2sde!4v1687274249484!5m2!1sde!2sde" width="100%" height="150" style="border:0;" scrolling="yes" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
      dish: "Crema Pasta",
      ingredients: "Spaghetti, North Italian melting Cheese (aromatic), Cream, Parsley",
      selectedStar: 4,
      deliverTime: 45,
      price: 9,
      amount: 1
    },
    {
      id: "pastas",
      img: "./assets/img/meals/4_pasta/bolognese_1_1261 x 1179.jpg",
      restaurant: "Angelo's",
      restaurantIMG: "./assets/img/restaurantIMGs/pasta_1_CC00_640x427.jpg",
      location: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d860.0258945152949!2d6.959769188676069!3d50.93747578023893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bf25ff8b3b90c1%3A0x98f3dd8123f4c033!2sHeumarkt!5e0!3m2!1sde!2sde!4v1687274249484!5m2!1sde!2sde" width="100%" height="150" style="border:0;" scrolling="yes" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
      dish: "Spaghetti Bolognaise",
      ingredients: "Spaghetti, Meat, Giorgio's Tomatoe Sauce, Parmesan Cheese",
      selectedStar: 3,
      deliverTime: 35,
      price: 14,
      amount: 1
    },
    {
      id: "pastas",
      img: "./assets/img/meals/4_pasta/salmone_1_1280 x 853.jpg",
      restaurant: "Angelo's",
      restaurantIMG: "./assets/img/restaurantIMGs/pasta_1_CC00_640x427.jpg",
      location: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d860.0258945152949!2d6.959769188676069!3d50.93747578023893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bf25ff8b3b90c1%3A0x98f3dd8123f4c033!2sHeumarkt!5e0!3m2!1sde!2sde!4v1687274249484!5m2!1sde!2sde" width="100%" height="150" style="border:0;" scrolling="yes" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
      dish: "Pasta Salmone",
      ingredients: "Tagliatelle, Salmone, Rosemary, Basil-Paprica-Cream, Asparagus, 1 Shrimp, Tomatoes, Radishes, Lemon",
      selectedStar: 1,
      deliverTime: 50,
      price: 20,
      amount: 1
    },
    {
      id: "pastas",
      img: "./assets/img/meals/4_pasta/shrimps_1_1280 x 697.jpg",
      restaurant: "Angelo's",
      restaurantIMG: "./assets/img/restaurantIMGs/pasta_1_CC00_640x427.jpg",
      location: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d860.0258945152949!2d6.959769188676069!3d50.93747578023893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bf25ff8b3b90c1%3A0x98f3dd8123f4c033!2sHeumarkt!5e0!3m2!1sde!2sde!4v1687274249484!5m2!1sde!2sde" width="100%" height="150" style="border:0;" scrolling="yes" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
      dish: "Capri Shrimps",
      ingredients: "Spaghetti, Shrimps di Capri, Tomatoes, Parmesan Cheese, Fresh Basil",
      selectedStar: 2,
      deliverTime: 25,
      price: 11,
      amount: 1
    }
  ];

Indian: FoodItem[] = [
    {
      id: "indian",
      img: "./assets/img/meals/5_indian/curryCheese_1_1280 x 853.jpg",
      restaurant: "Taj Mahal",
      restaurantIMG: "./assets/img/restaurantIMGs/indian_4_CC00_640x427.jpg",
      location: '<iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3323400.3472247124!2d77.73033676239803!3d27.959916443164154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1staj%20mahal%2C%20india!5e0!3m2!1sde!2sde!4v1687274686212!5m2!1sde!2sde" width="100%" height="150" style="border:0;" scrolling="yes" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
      dish: "Curry Cream Cheese",
      ingredients: "Rice, Cream Cheese, Curry, Paprica, Ginger, Curcuma, Parsley",
      selectedStar: 4,
      deliverTime: 15,
      price: 11.0,
      amount: 1
    },
    {
      id: "indian",
      img: "./assets/img/meals/5_indian/fullMenuSpices_1_1090 x 835_modified.jpg",
      restaurant: "Taj Mahal",
      restaurantIMG: "./assets/img/restaurantIMGs/indian_4_CC00_640x427.jpg",
      location: '<iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3323400.3472247124!2d77.73033676239803!3d27.959916443164154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1staj%20mahal%2C%20india!5e0!3m2!1sde!2sde!4v1687274686212!5m2!1sde!2sde" width="100%" height="150" style="border:0;" scrolling="yes" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
      dish: "Family Menu Curry",
      ingredients: "Rice, Optional: Chicken or Vegetable Curry, a Pallette of Indian Spices (Curcuma, Cinnamon, Caraway Seeds, Cashew Nuts, Clove, Nutmeg, Anisey, dried Orange Peel)",
      selectedStar: 5,
      deliverTime: 50,
      price: 38,
      amount: 1
    },
    {
      id: "indian",
      img: "./assets/img/meals/5_indian/modernSamosa_1_1280 x 550_modified.jpg",
      restaurant: "Taj Mahal",
      restaurantIMG: "./assets/img/restaurantIMGs/indian_4_CC00_640x427.jpg",
      location: '<iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3323400.3472247124!2d77.73033676239803!3d27.959916443164154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1staj%20mahal%2C%20india!5e0!3m2!1sde!2sde!4v1687274686212!5m2!1sde!2sde" width="100%" height="150" style="border:0;" scrolling="yes" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
      dish: "Modern Samosa",
      ingredients: "4x Dumplings with Vegetables (Fried), Paprica Powder, Onions, Parsley, Sweet-Sour Sauce",
      selectedStar: 3,
      deliverTime: 15,
      price: 12,
      amount: 1
    },
    {
      id: "indian",
      img: "./assets/img/meals/5_indian/fish_1_1280 x 853.jpg",
      restaurant: "Taj Mahal",
      restaurantIMG: "./assets/img/restaurantIMGs/indian_4_CC00_640x427.jpg",
      location: '<iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3323400.3472247124!2d77.73033676239803!3d27.959916443164154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1staj%20mahal%2C%20india!5e0!3m2!1sde!2sde!4v1687274686212!5m2!1sde!2sde" width="100%" height="150" style="border:0;" scrolling="yes" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
      dish: "Yoghurt Curry",
      ingredients: "Rice, Yoghurt (Spiced), Brocolli, Carrots, Onions, Parsley",
      selectedStar: 2,
      deliverTime: 25,
      price: 10,
      amount: 1
    },
    {
      id: "indian",
      img: "./assets/img/meals/5_indian/rice_bowl.jpg",
      restaurant: "Taj Mahal",
      restaurantIMG: "./assets/img/restaurantIMGs/indian_4_CC00_640x427.jpg",
      location: '<iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3323400.3472247124!2d77.73033676239803!3d27.959916443164154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1staj%20mahal%2C%20india!5e0!3m2!1sde!2sde!4v1687274686212!5m2!1sde!2sde" width="100%" height="150" style="border:0;" scrolling="yes" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
      dish: "Pumpkin Curry",
      ingredients: "Rice, Pumpkin, Peanuts, Onions, Carrots, Zucchini",
      selectedStar: 1,
      deliverTime: 20,
      price: 13,
      amount: 1
    },
    {
      id: "indian",
      img: "./assets/img/meals/5_indian/beansPan_1_720 x 592_modified.jpg",
      restaurant: "Taj Mahal",
      restaurantIMG: "./assets/img/restaurantIMGs/indian_4_CC00_640x427.jpg",
      location: '<iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3323400.3472247124!2d77.73033676239803!3d27.959916443164154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1staj%20mahal%2C%20india!5e0!3m2!1sde!2sde!4v1687274686212!5m2!1sde!2sde" width="100%" height="150" style="border:0;" scrolling="yes" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
      dish: "Beans Pan Curry",
      ingredients: "Rice, Beans, Cinnamon, Onions, Parsley",
      selectedStar: 5,
      deliverTime: 30,
      price: 14,
      amount: 1
    }
  ];
  
HermanTheGerman: FoodItem[] = [
    {
      id: "hermans",
      img: "./assets/img/meals/6_hermanTheGerman/cheeseNoodles_1_1280 x 960.jpg",
      restaurant: "Herman's",
      restaurantIMG: "./assets/img/restaurantIMGs/herman_4_CC00_640x427.jpg",
      location: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10646.34545338615!2d11.597187945585851!3d48.15678238431253!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479e759710813fb1%3A0x9993c251b452be58!2sMonopteros%20im%20Englischen%20Garten!5e0!3m2!1sde!2sde!4v1687274805837!5m2!1sde!2sde" width="100%" height="150" style="border:0;" scrolling="yes" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
      dish: "Kaesspatzle (Cheese Noodles)",
      ingredients: "Noodles á la Herman Style, Melted Cheese, Onions (Roasted), Parsley",
      selectedStar: 5,
      deliverTime: 25,
      price: 12.0,
      amount: 1
    },
    {
      id: "hermans",
      img: "./assets/img/meals/6_hermanTheGerman/TarteFlambeeAubergine_1_.jpg",
      restaurant: "Herman's",
      restaurantIMG: "./assets/img/restaurantIMGs/herman_4_CC00_640x427.jpg",
      location: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10646.34545338615!2d11.597187945585851!3d48.15678238431253!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479e759710813fb1%3A0x9993c251b452be58!2sMonopteros%20im%20Englischen%20Garten!5e0!3m2!1sde!2sde!4v1687274805837!5m2!1sde!2sde" width="100%" height="150" style="border:0;" scrolling="yes" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
      dish: "Tarte Flambée - Eggplant",
      ingredients: "Sour Dough, Tomatoes, German Cheese, Eggplant, Basil Pesto, Fresh Basil",
      selectedStar: 4,
      deliverTime: 20,
      price: 10,
      amount: 1
    },
    {
      id: "hermans",
      img: "./assets/img/meals/6_hermanTheGerman/kartoffelgratin_1_1085 x 643_modified.jpg",
      restaurant: "Herman's",
      restaurantIMG: "./assets/img/restaurantIMGs/herman_4_CC00_640x427.jpg",
      location: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10646.34545338615!2d11.597187945585851!3d48.15678238431253!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479e759710813fb1%3A0x9993c251b452be58!2sMonopteros%20im%20Englischen%20Garten!5e0!3m2!1sde!2sde!4v1687274805837!5m2!1sde!2sde" width="100%" height="150" style="border:0;" scrolling="yes" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
      dish: "Potato Gratin",
      ingredients: "Potatoes, Melted Cheese, Onions, Rosemary, Parsley",
      selectedStar: 4,
      deliverTime: 35,
      price: 12,
      amount: 1
    },
    {
      id: "hermans",
      img: "./assets/img/meals/6_hermanTheGerman/maultasche_1_1280 x 1218.jpg",
      restaurant: "Herman's",
      restaurantIMG: "./assets/img/restaurantIMGs/herman_4_CC00_640x427.jpg",
      location: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10646.34545338615!2d11.597187945585851!3d48.15678238431253!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479e759710813fb1%3A0x9993c251b452be58!2sMonopteros%20im%20Englischen%20Garten!5e0!3m2!1sde!2sde!4v1687274805837!5m2!1sde!2sde" width="100%" height="150" style="border:0;" scrolling="yes" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
      dish: "German Ravioli",
      ingredients: "5x Ravioli á la Herman Style (Filled with Meat or Vegetables), Stock, Basil",
      selectedStar: 3,
      deliverTime: 20,
      price: 15,
      amount: 1
    },
    {
      id: "hermans",
      img: "./assets/img/meals/6_hermanTheGerman/schnitzel_2_1280 x 853.jpg",
      restaurant: "Herman's",
      restaurantIMG: "./assets/img/restaurantIMGs/herman_4_CC00_640x427.jpg",
      location: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10646.34545338615!2d11.597187945585851!3d48.15678238431253!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479e759710813fb1%3A0x9993c251b452be58!2sMonopteros%20im%20Englischen%20Garten!5e0!3m2!1sde!2sde!4v1687274805837!5m2!1sde!2sde" width="100%" height="150" style="border:0;" scrolling="yes" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
      dish: "Yaeger Schnitzel",
      ingredients: "French Fries, Pork Steak, Mushrooms with Cream Sauce, Salad",
      selectedStar: 5,
      deliverTime: 20,
      price: 18,
      amount: 1
    },
    {
      id: "hermans",
      img: "./assets/img/meals/6_hermanTheGerman/tarteFlammbee_1_1280 x 853.jpg",
      restaurant: "Herman's",
      restaurantIMG: "./assets/img/restaurantIMGs/herman_4_CC00_640x427.jpg",
      location: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10646.34545338615!2d11.597187945585851!3d48.15678238431253!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479e759710813fb1%3A0x9993c251b452be58!2sMonopteros%20im%20Englischen%20Garten!5e0!3m2!1sde!2sde!4v1687274805837!5m2!1sde!2sde" width="100%" height="150" style="border:0;" scrolling="yes" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
      dish: "Tarte Flambée - Onions",
      ingredients: "Sour Dough, German Cheese, Onions, Bacon",
      selectedStar: 1,
      deliverTime: 25,
      price: 9,
      amount: 1
    }
  ];
  
Hamburgers: FoodItem[] = [
    {
      id: "hamburgers",
      img: "./assets/img/meals/7_hamburger/americanDark_1_1279 x 1266_modified.jpg",
      restaurant: "Burgers' Paradise",
      restaurantIMG: "./assets/img/restaurantIMGs/burgerStore_3mod_CC00_640x426.jpg",
      location: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7647.849372723193!2d-157.8534913631!3d21.291726512726857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c006dfc54507bd9%3A0xbad3d4b3375695d!2sAla%20Moana%20Regional%20Park!5e0!3m2!1sde!2sde!4v1687275039197!5m2!1sde!2sde" width="100%" height="150" style="border:0;" scrolling="yes" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
      dish: "American-Dark Burger",
      ingredients: "Beef, Dark-Bread Burger, American Cocktail Sauce, Cucumber, Iceberg Salad, Onions",
      selectedStar: 5,
      deliverTime: 15,
      price: 11.0,
      amount: 1
    },
    {
      id: "hamburgers",
      img: "./assets/img/meals/7_hamburger/cheeseburger_1_1013 x 850_modified.jpg",
      restaurant: "Burgers' Paradise",
      restaurantIMG: "./assets/img/restaurantIMGs/burgerStore_3mod_CC00_640x426.jpg",
      location: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7647.849372723193!2d-157.8534913631!3d21.291726512726857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c006dfc54507bd9%3A0xbad3d4b3375695d!2sAla%20Moana%20Regional%20Park!5e0!3m2!1sde!2sde!4v1687275039197!5m2!1sde!2sde" width="100%" height="150" style="border:0;" scrolling="yes" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
      dish: "Cheeseburger",
      ingredients: "Beef, Cheese, Egg, Dark-Bread Burger with Sesame, Mayonnaise, Tomatoes, Basil",
      selectedStar: 1,
      deliverTime: 55,
      price: 14,
      amount: 1
    },
    {
      id: "hamburgers",
      img: "./assets/img/meals/7_hamburger/hamburger_1_1280 x 1010_modified.jpg",
      restaurant: "Burgers' Paradise",
      restaurantIMG: "./assets/img/restaurantIMGs/burgerStore_3mod_CC00_640x426.jpg",
      location: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7647.849372723193!2d-157.8534913631!3d21.291726512726857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c006dfc54507bd9%3A0xbad3d4b3375695d!2sAla%20Moana%20Regional%20Park!5e0!3m2!1sde!2sde!4v1687275039197!5m2!1sde!2sde" width="100%" height="150" style="border:0;" scrolling="yes" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
      dish: "Hamburger Royal",
      ingredients: "Beef (2 Patties), Cheese, Iceberg Lettuce, Tomatoes, Onions, Yoghurt-Mayonnaise Sauce",
      selectedStar: 5,
      deliverTime: 30,
      price: 12,
      amount: 1
    },
    {
      id: "hamburgers",
      img: "./assets/img/meals/7_hamburger/olive_1_1168 x 1099.jpg",
      restaurant: "Burgers' Paradise",
      restaurantIMG: "./assets/img/restaurantIMGs/burgerStore_3mod_CC00_640x426.jpg",
      location: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7647.849372723193!2d-157.8534913631!3d21.291726512726857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c006dfc54507bd9%3A0xbad3d4b3375695d!2sAla%20Moana%20Regional%20Park!5e0!3m2!1sde!2sde!4v1687275039197!5m2!1sde!2sde" width="100%" height="150" style="border:0;" scrolling="yes" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
      dish: "Olive Burger",
      ingredients: "Olives, Beef (2 Patties), Bacon, Lettuce, Onions, Ketchup, Mayonnaise, Pickled Cucumber",
      selectedStar: 2,
      deliverTime: 35,
      price: 16,
      amount: 1
    },
    {
      id: "hamburgers",
      img: "./assets/img/meals/7_hamburger/bbq_1_875 x 762_modified.jpg",
      restaurant: "Burgers' Paradise",
      restaurantIMG: "./assets/img/restaurantIMGs/burgerStore_3mod_CC00_640x426.jpg",
      location: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7647.849372723193!2d-157.8534913631!3d21.291726512726857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c006dfc54507bd9%3A0xbad3d4b3375695d!2sAla%20Moana%20Regional%20Park!5e0!3m2!1sde!2sde!4v1687275039197!5m2!1sde!2sde" width="100%" height="150" style="border:0;" scrolling="yes" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
      dish: "BBQ Burger",
      ingredients: "Beef (1 Giant Pattie), Roasted Burger Bread, Cheese, Arugula Lettuce, Iceberg Lettuce, BBQ Sauce",
      selectedStar: 3,
      deliverTime: 10,
      price: 15,
      amount: 1
    },
    {
      id: "hamburgers",
      img: "./assets/img/meals/7_hamburger/sesamChicken_1_808 x 680_modified.jpg",
      restaurant: "Burgers' Paradise",
      restaurantIMG: "./assets/img/restaurantIMGs/burgerStore_3mod_CC00_640x426.jpg",
      location: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7647.849372723193!2d-157.8534913631!3d21.291726512726857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c006dfc54507bd9%3A0xbad3d4b3375695d!2sAla%20Moana%20Regional%20Park!5e0!3m2!1sde!2sde!4v1687275039197!5m2!1sde!2sde" width="100%" height="150" style="border:0;" scrolling="yes" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
      dish: "Sesame Chicken Burger",
      ingredients: "Chicken (1 Pattie), Iceberg Lettuce, Onions, Sesame Burger Bread, Tomatoes, Ketchup, Mayonnaise, Herbal Sauce",
      selectedStar: 4,
      deliverTime: 15,
      price: 13,
      amount: 1
    }
  ];
 

//                           !----- Other Arrays -----!

// cuisineArray : cuisineType [] = [];

selectedItems: FoodItem[] = [];

dontKnowYetArray : FoodItem [] = [];  

// Stars

numStars: number[] = [5, 4, 3, 2, 1];

// Basket

basket : any[] = [];  

//                          !----- Major Functions -----!

// in TypeScript we not not need to write 'function' in front of a function


// cuisines() {
//   this.cuisineArray.push({ Pizzas: this.Pizzas });
//   this.cuisineArray.push({ Salads: this.Salads });
//   this.cuisineArray.push({ Asian: this.Asian });
//   this.cuisineArray.push({ Pastas: this.Pastas });
//   this.cuisineArray.push({ Indian: this.Indian });
//   this.cuisineArray.push({ HermanTheGerman: this.HermanTheGerman });
//   this.cuisineArray.push({ Hamburgers: this.Hamburgers });
//   console.log('cuisineArray', this.cuisineArray);
// }


dontKnowYet(){
    for (let index = 0; index < this.Pizzas.length; index++) {
      const dontKnowMeal: FoodItem = this.Pizzas[index];
      this.dontKnowYetArray.push(dontKnowMeal);
    } 
    for (let index = 0; index < this.Salads.length; index++) {
      const dontKnowMeal: FoodItem = this.Salads[index];
      this.dontKnowYetArray.push(dontKnowMeal);
    }
    for (let index = 0; index < this.Asian.length; index++) {
      const dontKnowMeal: FoodItem = this.Asian[index];
      this.dontKnowYetArray.push(dontKnowMeal);
    }
    for (let index = 0; index < this.Pastas.length; index++) {
      const dontKnowMeal: FoodItem = this.Pastas[index];
      this.dontKnowYetArray.push(dontKnowMeal);
    }
    for (let index = 0; index < this.Indian.length; index++) {
      const dontKnowMeal: FoodItem = this.Indian[index];
      this.dontKnowYetArray.push(dontKnowMeal);
    }
    for (let index = 0; index < this.HermanTheGerman.length; index++) {
      const dontKnowMeal: FoodItem = this.HermanTheGerman[index];
      this.dontKnowYetArray.push(dontKnowMeal);
    }
    for (let index = 0; index < this.Hamburgers.length; index++) {
      const dontKnowMeal: FoodItem = this.Hamburgers[index];
      this.dontKnowYetArray.push(dontKnowMeal);
    } 
    this.sort();
}

//Checkboxes Disabled? True/ False.

btncheck1: boolean = false;
btncheck2: boolean = false;
btncheck3: boolean = false;
btncheck4: boolean = false;
btncheck5: boolean = false;
btncheck6: boolean = false;
btncheck7: boolean = false;

areCheckboxesDisabled: boolean = true;


updateCheckboxStatus(): void {
  this.areCheckboxesDisabled = !(this.btncheck1 || this.btncheck2 || this.btncheck3 || this.btncheck4 || this.btncheck5 || this.btncheck6 || this.btncheck7);
  // console.log('areCheckboxesDisabled2: ', this.areCheckboxesDisabled);

  if (this.areCheckboxesDisabled === false) {
    
    this.filterDontKnowYet();
  }
}


//Filter an Array of JSON Objects

filterDontKnowYet() {
  if (this.areCheckboxesDisabled === false) {
  
  this.selectedItems = this.dontKnowYetArray.filter(obj =>
    (this.btncheck1 && obj.id === "pizzas")  ||
    (this.btncheck2 && obj.id === "salads")  ||
    (this.btncheck3 && obj.id === "asian")   ||
    (this.btncheck4 && obj.id === "pastas")  ||
    (this.btncheck5 && obj.id === "indian")  ||
    (this.btncheck6 && obj.id === "hermans") ||
    (this.btncheck7 && obj.id === "hamburgers")
  )}

  // if the global variable searchText is not empty, filter the selectedItems Array again 

  else if (this.searchText) {
    this.selectedItems = this.dontKnowYetArray.filter(obj =>
      (obj.dish.toLowerCase().includes(this.searchText.toLowerCase())) ||
      (obj.restaurant.toLowerCase().includes(this.searchText.toLowerCase())) ||
      (obj.ingredients.toLowerCase().includes(this.searchText.toLowerCase()))
    ); } 
    
  else {
      this.selectedItems = this.dontKnowYetArray;
    }
  
  this.sortFiltered();
}


// Alphebetical sorting of dontKnowYetArray

sort(){
  this.dontKnowYetArray.sort(function (a, b) {
    if (a.dish < b.dish) {
      return -1;
    }
    if (a.dish > b.dish) {
      return 1;
    }
    return 0;
  });
  // console.log('dontKnowYetArray is sorted alphatecially now.');
}

// Alphebetical sorting of selectedItems Array

sortFiltered(){
  this.selectedItems.sort(function (a, b) {
    if (a.dish < b.dish) {
      return -1;
    }
    if (a.dish > b.dish) {
      return 1;
    }
    return 0;
  });
  // console.log('dontKnowYetArray is sorted alphatecially now.');
}


// ----- Search Function -----

// 1. RAISING THE EVENT/ Establishing Two-Way-Binding from input field to searchQuery()

enteredSearchValue: string = '';

@Output()
searchTextChanged: EventEmitter<string> = new EventEmitter<string>();

raiseSearchQueryEvent(){
  this.searchTextChanged.emit(this.enteredSearchValue);
    this.searchQuery(this.enteredSearchValue);
}


// 2. Actual SearchFunction

searchText: string = '';

searchQuery(enteredSearchValue: string){
  this.searchText = this.enteredSearchValue;
  console.log('this.searchText: ', this.searchText);
  this.filterDontKnowYet();
}


// Initialize Bootstrap Tooltips

initBootstrapTooltips() {
  console.log('initBootstrapTooltips()');
  // const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]')) as HTMLElement[];
  // tooltipTriggerList.map(function (tooltipTriggerEl) {
  //     const tooltip = new bootstrap.Tooltip(tooltipTriggerEl)
  //     if (tooltipTriggerEl.innerText?.includes('top')) {
  //         tooltip.enable()
  //     } else {
  //         tooltip.disable()
  //     }
  //     return tooltip;
  // })

  // const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]')) as HTMLElement[];
  // const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  //     const tooltip = new bootstrap.Tooltip(tooltipTriggerEl)
  //     if (tooltipTriggerEl.innerText?.includes('top')) {
  //         tooltip.enable()
  //     } else {
  //         tooltip.disable()
  //     }
  //     return tooltip;
  // })
}

// Initialize Bootstrap Popovers

// initPopovers(): void {
//   const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
//   const popoverList = Array.from(popoverTriggerList).map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl));
// }

// allow to execute HTML code in the browser, which is rendered dynamically as HTML code from an array

sanitizeHTML(html: string): any {
  return this.sanitizer.bypassSecurityTrustHtml(html);
}




//addMenuToBasket gets TWO parameters as input from mainBody.component.html; 
addMenuToBasket(menu_position_from_btn_onclick: number, categories: FoodItem[]) {
  console.log('menu_position_from_btn_onclick: ', menu_position_from_btn_onclick);
  console.log('categories: ', categories );

  let entry_menu =  categories[menu_position_from_btn_onclick]?.dish || 
                    this.Pizzas[menu_position_from_btn_onclick]?.dish ||  //does an element exist on the specified position of the array? - if 'yes', then pass it as value to the entry_menu variable 
                    this.Salads[menu_position_from_btn_onclick]?.dish ||
                    this.Asian[menu_position_from_btn_onclick]?.dish ||
                    this.Pastas[menu_position_from_btn_onclick]?.dish ||
                    this.Indian[menu_position_from_btn_onclick]?.dish ||
                    this.HermanTheGerman[menu_position_from_btn_onclick]?.dish ||
                    this.Hamburgers[menu_position_from_btn_onclick]?.dish; 

  let entry_price = categories[menu_position_from_btn_onclick]?.price ||
                    this.Pizzas[menu_position_from_btn_onclick]?.price || //does an element exist on the specified position of the array? - if 'yes', then pass it as value to the entry_price variable 
                    this.Salads[menu_position_from_btn_onclick]?.price ||
                    this.Asian[menu_position_from_btn_onclick]?.price ||
                    this.Pastas[menu_position_from_btn_onclick]?.price ||
                    this.Indian[menu_position_from_btn_onclick]?.price ||
                    this.HermanTheGerman[menu_position_from_btn_onclick]?.price ||
                    this.Hamburgers[menu_position_from_btn_onclick]?.price; 
  
  let mealIndex = this.basket.findIndex((basket) => basket.food == entry_menu); 
            

  if (mealIndex == -1) {
    this.pushtoBasket(entry_menu, entry_price);
    } else {
    this.basket[mealIndex]["amount"]++; // in the JSON-Array basket at the position of mealIndex the value of amount ++ increases (+1)
    console.log(this.basket); 
    }
    this.calcSubtotal();

}


pushtoBasket(entry_menu: string, entry_price: number) {
  let amount = 1;
  let data = {
    food: entry_menu,
    price: entry_price,
    amount: amount,
  };

  this.basket.push(data);
}


resultSubtotal: number = 0;

calcSubtotal() {
  this.resultSubtotal = 0;

  for (let i = 0; i < this.basket.length; i++) {
                                                                                //  const resultSubtotal = menus[menu_position_from_btn_onclick]["price"]; (basket_infos, i));
                                                                                // const [product, quantity] = cur;
                                                                                    // return sum += products.find(p => p.name === product).price * quantity;
    this.resultSubtotal += this.basket[i]["price"] * this.basket[i]["amount"]; // the product's/ food's price gets multiplied with the amount
    
  }
  this.renderSums();

}

finalSum : number = 0;

renderSums(){
   this.finalSum = this.resultSubtotal + 5;
}


basketMinus(Minus : any) {
  if (this.basket[Minus]["amount"] >= 2) {
    this.basket[Minus]["amount"]--;
                                        
      this.calcSubtotal();
    
  } else {
    this.basket.splice(Minus, 1);

    if (this.basket.length == 0) {

    } else {
      this.calcSubtotal();

    }
  }
}

basketPlus(Plus : any) {
  this.basket[Plus]["amount"]++;

  this.calcSubtotal();

}


deleteOrder(i : number) {
  this.basket.splice(i, 1); 
  console.log(this.basket);
  if (this.basket.length == 0) {

  } else {
    this.calcSubtotal();
 
  }         
}

shoppingCart() {
  let foodlist: HTMLElement | null = document.getElementById('orderContent');
  let shoppingCart: HTMLElement | null = document.getElementById('basketSupra');

  // foodlist.classList.toggle('order_content_d-none');
  // shoppingCart.classList.toggle('basket_supra_display');
  

  if (foodlist && shoppingCart) {
    foodlist.classList.toggle('d-none');
    shoppingCart.classList.toggle('basketSupraDisplay');
  }
}


}