import { STRING_TYPE } from '@angular/compiler';
import { Component, OnInit, Input } from '@angular/core';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';

interface Category{
  name: string,
    img: string,
  // info: string,

  // meals: string,
  // restaurant: string,
  // dish: string,
  // ingredients: string,
  // price: number,
  // amount: number
}

@Component({
  selector: 'app-TabMenu',
  templateUrl: './TabMenu.component.html',
  styleUrls: ['./TabMenu.component.scss']
})

export class TabMenuComponent implements OnInit{

constructor(){
this.selectedCategory = this.categories[0];
}
// @Input()

restaurantImage!: string;
selectedCategory: Category;

categories : Category [] = [
  {name: "Pizzas", img: "./assets/img/meals/pizzas/pizza_Milano2_1280 x 853.jpg"},
  {name: "Pasta", img: "./assets/img/meals/pasta/salmone_1_1280 x 853.jpg"}
];

changeSelectedCategory(selectedCategory : Category){
  this.selectedCategory = selectedCategory;
}


// categories: Category = {
//         "name": "Pizzas": {
//                       "info": {"img": ["img/original/pizza_Milano_1280 x 853.jpg"]
//                             },
//             "meals": [
//               {
//                 "Salami": [
//                   {
//                     "img": "img/pizza_salami_1280.jpg",
//                     "restaurant": "Majster Pizza",
//                     "dish": "Pizza Salami",
//                     "ingredients": "with Mozarella, Hot Pepper, Tomatoe Sauce, Pepper, Sourdough, from the woodstove...",
//                     "price": 8.5,
//                     "amount": 1
//                   }
//                 ],
//                 "Milano": [
//                   {
//                     "img": "img/pizza_Milano2_1280 x 853.jpg",
//                     "restaurant": "Majster Pizza",
//                     "dish": "Pizza Milano",
//                     "ingredients": "Mozarella, Tomatoe Sauce, Mushrooms, Ham, Salami, Sourdough, from the woodstove...",
//                     "price": 9,
//                     "amount": 1
//                   }
//                 ]
//               }
//             ]
//           },
//          "name": "Salads": {
//                       "info": {"img": ["img/rice_bowl.jpg"]
//                             },
//             "meals": [
//               {
//                 "Greek": [
//                   {
//                     "img": "img/pasta_1.webp",
//                     "restaurant": "La Noodleria",
//                     "dish": "Noodles Napoli",
//                     "ingredients": "with Parmesan Cheese, Tomatoe Sauce, Basil",
//                     "price": 9.5,
//                     "amount": 1
//                   }
//                 ],
//                 "Cesar": [
//                   {
//                     "img": "img/pasta_1.webp",
//                     "restaurant": "La Noodleria",
//                     "dish": "Noodles Napoli",
//                     "ingredients": "with Parmesan Cheese, Tomatoe Sauce, Basil",
//                     "price": 9.5,
//                     "amount": 1
//                   }
//                 ]
//               }
//             ]
//           }
// };


ngOnInit(): void {
}


}


// type Food4YouJsonFile = {
//   [key: string]: {
//     general: {
//       img: string[];
//     };
//     meals: {
//       [key: string]: {
//         img: string;
//         restaurant: string;
//         food: string;
//         ingredients: string;
//         price: number;
//         amount: number;
//       }[];
//     };
//   };
// };


// type Food4YouJsonFile = {
//   [key: string]: {general: string {img: string[];
//                                     };
//                   meals: string [{ meal: any: 
//                                           {img: string;
//                                           restaurant: string;
//                                           food: string;
//                                           ingredients: string;
//                                           price: number;
//                                           amount: number;
//                                           },
//                           }];
//                   };
// };







  // @Input() tabCategories : AnyCatcher = {
  //                                 "name": "John Doe",
  //                                 "age": 30,
  //                                 "address": {
  //                                   "street": "123 Main Street",
  //                                   "city": "New York",
  //                                   "state": "NY"
  //                                 },
  //                                 "contacts": [
  //                                   {
  //                                     "type": "email",
  //                                     "value": "john.doe@example.com"
  //                                   },
  //                                   {
  //                                     "type": "phone",
  //                                     "value": "555-1234"
  //                                   }
  //                                 ],
  //                                 "orders": [
  //                                   {
  //                                     "orderID": "001",
  //                                     "products": [
  //                                       {
  //                                         "name": "Product A",
  //                                         "price": 10.99
  //                                       },
  //                                       {
  //                                         "name": "Product B",
  //                                         "price": 19.99
  //                                       }
  //                                     ]
  //                                   },
  //                                   {
  //                                     "orderID": "002",
  //                                     "products": [
  //                                       {
  //                                         "name": "Product C",
  //                                         "price": 7.99
  //                                       },
  //                                       {
  //                                         "name": "Product D",
  //                                         "price": 14.99
  //                                       }
  //                                     ]
  //                                   }
  //                                 ]
  //                               };
                            
                                  

                          //   {"Pizzas":{"meal1", "meal2"},                                                      ],
                          //   "Salads":{"meal1", "meal2"},                                                      ],                                                      ,
                          //   "Asia":{"meal1", "meal2"},                                                      ],      
                          //   "HermanTheGerman":{"meal1", "meal2"},                                                      ],      
                          //   "India":{"meal1", "meal2"},                                                      ],      
                          //   "Pasta":{"meal1", "meal2"}                                                      ]     
                          //   }
                          // ;

// tabCategories: [string, Food4YouJsonFile][] = [];


  // ngAfterViewInit(): void {
  //   // this.openCity('London');
  // }



  //   openCity(cityName: string, evt?: any) {

  //   var i, tabcontent, tablinks;

  //   tabcontent = document.getElementsByClassName("tabcontent");
  //   for (i = 0; i < tabcontent.length; i++) {
      
  //     const tabcontentElement = tabcontent[i] as HTMLElement;
  //     if(tabcontentElement){
  //       tabcontentElement.style.display = "none";
  //     }  
  //   }

  //   tablinks = document.getElementsByClassName("tablinks");
  //   for (i = 0; i < tablinks.length; i++) {
  //     tablinks[i].className = tablinks[i].className.replace(" active", "");
  //   }

  //   const cityElement = document.getElementById(cityName);
  //   if(cityElement){
  //     cityElement.style.display = "block";
  //   }

  //   if (evt){
  //   evt.currentTarget.className += " active";
  //   }
  // }

