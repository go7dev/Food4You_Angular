import { Component, OnInit} from '@angular/core';

// interface FoodJSON {
// meals: {
//         [meal: string]: {
//                           img: string,
//                           restaurant: string,
//                           dish: string,
//                           ingredients: string,
//                           price: number,
//                           amount: number,
//                         }[];
//       }
// }

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


ngOnInit(): void {
}


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


}