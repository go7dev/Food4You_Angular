

// function RenderMenu_description() {
//   document.getElementById("menu_description");
//   menu_description.innerHTML = "";

//   for (let i = 0; i < menus.length; i++) {
//     const menus_object_infos = menus[i];

//     menu_description.innerHTML += templateRenderMenu_description(menus_object_infos, i);
//   }
// }

// function templateRenderMenu_description(menus_object_infos, i) {
//   return `

//     <div class="menu_description">
//         <div class="menu_description_head">
//             <div class="menu_description_food"><h3>${i+1}) ${menus_object_infos["food"]}</h3></div>
//             <div class="menu_description_pic"><img src="${menus_object_infos["image"]}"></div>
//         </div>
//         <span>${menus_object_infos["ingredients"]}</span>
//         <div class="menu_description_price">€ ${menus_object_infos["price"].toFixed(2)}</div>
//         <button onclick="addMenuToBasket(${i})" class="order_button"><img src="img/plus4_icon_48x48.png"></button>
//     </div>
//     `;
// }

function renderEmptyBasket() {
  let emptyCart = document.getElementById("basket");
  let emptySums = document.getElementById("sums");
  emptyCart.innerHTML = "";
  emptySums.innerHTML = "";

  emptyCart.innerHTML += templateEmptyBasket();
}

function templateEmptyBasket() {
  return `
            <div class="emptyBasket"> 
                <img src="img/shopping car_lemon_CC00_svg.svg">
                <span>Mmmmh....super delicious!!!</span>
                <div class="basket_smiley"><img src="img/delicious 2_smiley_64x64.png"<br><br></div>
                <span>Add your favourite menu to your shopping cart!!!</span>
            </div>
      
        `;
}

function addMenuToBasket(menu_position_from_btn_onclick) {
                                                                  // Wie kann ich die Informationen zum Array menus an diese Funktion weiterreichen? Lediglich die Position des Onclick Elements wurde weitergereicht.
  let entry_menu = menus[menu_position_from_btn_onclick]["food"]; // Hier werden die Informationen zum Array menus direkt vom JSON-Array ausgelesen. Die lokale Variable entry_menu wird definiert = Json-Array menus [position_from_btn_onclick][Kategorie food]
  let entry_price = menus[menu_position_from_btn_onclick]["price"]; // Hier werden die Informationen zum Array menus direkt vom JSON-Array ausgelesen. Die lokale Variable entry_menu wird definiert = Json-Array menus [position_from_btn_onclick][Kategorie price]
  let mealIndex = basket.findIndex((basket) => basket.food == entry_menu); //was muss hinter dem == stehen? Das hier ist die Filterfunktion...
                                                                            //was muss hinter dem == stehen? Das hier ist die Filterfunktion... Ist die price Variable nicht ohnehin überflüssig?

  if (mealIndex == -1) {
    pushtoBasket(entry_menu, entry_price);
  } else {
    basket[mealIndex]["amount"]++; // im JSON-Array basket wird an der Position mealIndex der Wert von amount ++ erhöht, was +1 bedeutet.
    console.log(basket); // an dieser Stelle soll console.log ausgeführt werden, mit dem Eingabefehl (basket)
  }
  calcSubtotal();
  renderBasket(); //renderBasket(entry_menu, entry_price, menu_position_from_btn_onclick)
}

function pushtoBasket(entry_menu, entry_price) {
  let amount = 1;
  let data = {
    food: entry_menu,
    price: entry_price,
    amount: amount,
  };

  basket.push(data);
}

function renderBasket() {
  let Basket = document.getElementById("basket");
  Basket.innerHTML = "";

  for (let i = 0; i < basket.length; i++) {
    const basket_infos = basket[i];

    Basket.innerHTML += templateBasket(basket_infos, i);
  }
}

function templateBasket(basket_infos, i) {
  return `

    <div class="basket_table">
        <div class="table_td_1_menu_description" id="table_td_1_menu_description">
              ${basket_infos["amount"]} x ${basket_infos["food"]}
        </div>
        <div class="table_td_2_basket_buttons" id="table_td_2_basket_buttons">
            <button id="basket_minus" onclick="basketMinus(${i})">-</button>
            <button id="basket_plus" onclick="basketPlus(${i})">+</button>
        </div>
        <div class="table_td_3_delete_bin" id="table_td_3_delete_bin">

            <span>€ ${basket_infos["price"].toFixed(2)}</span>
            <button onclick="deleteOrder(${i})"><img src="img/delete2_icon_blue_24x24.png"></button>
        </div>
    </div>

    `;
}

function calcSubtotal() {
  let resultSubtotal = 0;

  for (let i = 0; i < basket.length; i++) {
                                                                                //  const resultSubtotal = menus[menu_position_from_btn_onclick]["price"]; (basket_infos, i));
                                                                                // const [product, quantity] = cur;
                                                                                    // return sum += products.find(p => p.name === product).price * quantity;
    resultSubtotal += basket[i]["price"] * basket[i]["amount"]; // hier wird der price des Artikels/ Foods aus dem JSON-Array multipliziert mit dem Amount aus dem gelichen JSON-Array
  }
  renderSums(resultSubtotal); renderButtonLine(resultSubtotal);
}

function renderSums(resultSubtotal) {
  let sums = document.getElementById("sums");
  let finalSum = resultSubtotal + 5; // let finalSum = if (resultsubtotal > 1) {resultSubtotal + 5} else {};

  sums.innerHTML = "";
                                              //toFixed(2) wandelt die Zahl wieder in einen String um!!! WICHTIG für eine Preisanzeige!!
  sums.innerHTML += `
        
    <div class="table_row_sum">
      <hr>  
      <div class="orders_subtotal_supra" id="orders_subtotal_supra">
          <div id="orders_subtotal_left">Subtotal</div>
          <div id="orders_subtotal_right">€ ${resultSubtotal.toFixed(2)}</div>
      </div>
      <div class="orders_delivery_costs_supra" id="orders_delivery_costs_supra">
          <div id="orders_delivery_costs_left">Delivery Costs</div>
          <div id="orders_delivery_costs_right">€ 5.00</div>
      </div>
      <div class="orders_total_supra" id="orders_total_supra">
          <div id="orders_total_left">Total</div>
          <div id="orders_total_right">€ ${finalSum.toFixed(2)}</div>
      </div>
      <div class="buy" id="buy"><button>Buy!</button></div>
    </div>
    
    `;
}

function renderButtonLine(resultSubtotal) {
    let finalSum = resultSubtotal +5;
    let buttonLine = document.getElementById('mediaCart');
    buttonLine.innerHTML = '';
    
    if (basket.length == 0) {
      
      buttonLine.innerHTML += `
      <button onclick="shoppingCart()">
          <span>&#8679</span>
          <h2>Shopping Cart</h2>
          <span>&#8679</span>
      </button>`

    } else {
      
    buttonLine.innerHTML += `
          <button onclick="shoppingCart()">
              <span>&#8679</span>
              <h2>Shopping Cart (€ ${finalSum.toFixed(2)} )</h2>
              <span>&#8679</span>
          </button>
    `;
    }
}

function basketMinus(Minus) {
  if (basket[Minus]["amount"] >= 2) {
    basket[Minus]["amount"]--;
                                        // wenn man auf Minus klickt, dann werden Amount-Werte manchmal um 2 reduziert.
      calcSubtotal();
      renderBasket();
    
  } else {
    basket.splice(Minus, 1);

    if (basket.length == 0) {
      renderEmptyBasket();
      renderButtonLine();
    } else {
      calcSubtotal();
      renderBasket();
    }
  }
}

function basketPlus(Plus) {
  basket[Plus]["amount"]++;

  calcSubtotal();
  renderBasket();
}


function deleteOrder(i) {
  
  basket.splice(i, 1); 
  console.log(basket);
  if (basket.length == 0) {
    renderEmptyBasket();
    renderButtonLine();
  } else {
    calcSubtotal();
    renderBasket();
  }         
}


function shoppingCart() {
    let foodlist = document.getElementById('order_content');
    let shoppingCart = document.getElementById('basket_supra');

    foodlist.classList.toggle('order_content_d-none');
    shoppingCart.classList.toggle('basket_supra_display');
    
}

