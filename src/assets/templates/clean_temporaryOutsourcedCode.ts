// ------ CHAT GPT APPROACH ------

// interface Category {
//   [category: string]: {
//     img: string,
//     food: {
//       [meal: string]: {
//         img: string,
//         restaurant: string,
//         dish: string,
//         ingredients: string,
//         price: number,
//         amount: number,
//       }[];
//     };
//   };
// }



//  ----- My own Clean nested JSON -----

// categories: Category [] = {
//         name: "Pizzas" {
          
//             img: "./assets/img/meals/1_pizzas/pizza_Milano2_1280 x 853.jpg",
            
//             meals: [{
//                 "Salami": [{
//                     img: "./assets/img/meals/1_pizzas/pizza_salami_1280.jpg",
//                     restaurant: "Majster Pizza",
//                     dish: "Pizza Salami",
//                     ingredients: "with Mozarella, Hot Pepper, Tomatoe Sauce, Pepper, Sourdough, from the woodstove...",
//                     price: 8.5,
//                     amount: 1
//                   }],
//                 "Milano": [{
//                     img: "./assets/img/meals/1_pizzas/pizza_Milano2_1280 x 853.jpg",
//                     restaurant: "Majster Pizza",
//                     dish: "Pizza Milano",
//                     ingredients: "Mozarella, Tomatoe Sauce, Mushrooms, Ham, Salami, Sourdough, from the woodstove...",
//                     price: 9,
//                     amount: 1
//                   }]
//             }]
//         },
//         name: "Salads" {
            
//             img: "./assets/img/meals/2_salads/lemon_1_652 x 628_modified.jpg",
                            
//             meals: [{
//                 "Lemon": [{
//                     img: "./assets/img/meals/2_salads/lemon_1_652 x 628_modified.jpg",
//                     restaurant: "La Noodleria",
//                     dish: "Noodles Napoli",
//                     ingredients: "with Parmesan Cheese, Tomatoe Sauce, Basil",
//                     price: 9.5,
//                     amount: 1
//                   }],
//                 "Paprica": [{
//                     img: "./assets/img/meals/2_salads/paprica_1_1280 x 853.jpg",
//                     restaurant: "La Noodleria",
//                     dish: "Noodles Napoli",
//                     ingredients: "with Parmesan Cheese, Tomatoe Sauce, Basil",
//                     price: 9.5,
//                     amount: 1
//                   }]
//             }]
//           }
// };




// ------ CHAT GPT APPROACH -----


// categories: Category = {
//   "Pizzas": {
//     img: "./assets/img/meals/1_pizzas/pizza_Milano2_1280 x 853.jpg",
//     food: {
//       Salami: [
//         {
//           img: "./assets/img/meals/1_pizzas/pizza_salami_1280.jpg",
//           restaurant: "Majster Pizza",
//           dish: "Pizza Salami",
//           ingredients: "with Mozarella, Hot Pepper, Tomato Sauce, Pepper, Sourdough, from the woodstove...",
//           price: 8.5,
//           amount: 1,
//         },
//       ],
//       Milano: [
//         {
//           img: "./assets/img/meals/1_pizzas/pizza_Milano2_1280 x 853.jpg",
//           restaurant: "Majster Pizza",
//           dish: "Pizza Milano",
//           ingredients: "Mozarella, Tomato Sauce, Mushrooms, Ham, Salami, Sourdough, from the woodstove...",
//           price: 9,
//           amount: 1,
//         },
//       ],
//     },
//   },
//   "Salads": {
//     img: "./assets/img/meals/2_salads/lemon_1_1280x853.jpg",
//     food: {
//       Lemon: [
//         {
//           img: "./assets/img/meals/2_salads/avocado_1_1227 x 1229_modified.jpg",
//           restaurant: "La Noodleria",
//           dish: "Noodles Napoli",
//           ingredients: "with Parmesan Cheese, Tomato Sauce, Basil",
//           price: 9.5,
//           amount: 1,
//         },
//       ],
//       Paprica: [
//         {
//           img: "./assets/img/meals/2_salads/paprica_1_1280 x 853.jpg",
//           restaurant: "La Noodleria",
//           dish: "Noodles Napoli",
//           ingredients: "with Parmesan Cheese, Tomato Sauce, Basil",
//           price: 9.5,
//           amount: 1,
//         },
//       ],
//     },
//   },
// };








  // ----- Mihai Translation of JS Code into TS -----

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

