//zadatak 1
document.getElementById("shopping").addEventListener("click", (event) => {
    const sideMenu = document.getElementById("shopping-side-menu");
    const hasClassActive = sideMenu.classList.contains("active");
    sideMenu.classList.add("active");
    if (hasClassActive) {
        sideMenu.classList.remove("active");
    } else {
        sideMenu.classList.add("active");
    }

});

//zadatak 2
const buttons = document.querySelectorAll("#vrste button.odaberi");
for (let i = 0; i < buttons.length; i++) {
    const button = buttons[i];
    console.log(button);
    button.addEventListener("click", onButtonClick);
}

function onButtonClick(event) {
    //zadatak 4
    const clickedButtonElement = event.currentTarget;
    const articleElement = clickedButtonElement.parentElement;
    const pizzaName = articleElement.querySelector("h4").innerText;
    const pizzaPrice = articleElement.querySelector("i").innerText;
    const pizzaCart = document.getElementById(pizzaName.toLowerCase());
    console.log(pizzaCart);
    if (pizzaCart) {
        const currentAmount = pizzaCart.querySelector(".amount");
        let amount = parseInt(currentAmount.textContent);
        currentAmount.innerText = ++amount;
    } else {
        createShopItem(pizzaName, pizzaPrice); //kreira se samo prvi put
    }

    incrementCount();

    calculateTotalPrice();
}

//zadatak 3
let counter = 0;
document.getElementById("shopping-count").innerText = counter;

function incrementCount() {
    /*counter++;
    document.getElementById("shopping-count").innerText = counter;*/
    let totalCount = 0;
    const allItems = document.querySelectorAll(".shopping-item");
    for (let i = 0; i < allItems.length; i++) {
        const pizzaItems = allItems[i];
        const amount = pizzaItems.querySelector(".amount").textContent;
        totalCount += +amount;
    }
    document.getElementById("shopping-count").innerText = totalCount;
}

// Funkcija koja kreira pizza "karticu" u košarici prema imenu i cijeni pizze
function createShopItem(name, price) {
    const shopItem = document.createElement("article"); // Prvo kreiraj prazan element: <article></article>
    shopItem.classList.add("shopping-item"); // Dodaj mu klasu: <article class="shopping-item"></article>
    shopItem.id = name.toLowerCase();
    // Ubaci u <article> element ostale HTML elemente
    shopItem.innerHTML = `
      <i class="fas fa-times close"></i>
      <h3>${name}</h3>
      <div class="item-info">
        <small>Cijena:</small>
        <strong class="price">${price}</strong>
      </div>
      <div class="item-info">
        <small>Kolicina:</small>
        <div class="amount-box">
          <button class="minus" disabled><i class="fas fa-minus"></i></button>
          <strong class="amount">1</strong>
          <button class="plus"><i class="fas fa-plus"></i></button>
        </div>
      </div>`;

    // Dodaj novokreirani <article> element (sa svim svojim sadržajem) unutar "#shopping-items" elementa
    document.getElementById("shopping-items").append(shopItem);
    shopItem.querySelector(".close").addEventListener("click", onCloseElement);
    shopItem.querySelector(".plus").addEventListener("click", onPlus); //5 zad
    shopItem.querySelector(".minus").addEventListener("click", onMinus); //6 zad
}

function calculateTotalPrice() {
    let totalPrice = 0;
    const allItems = document.querySelectorAll(".shopping-item");
    for (let i = 0; i < allItems.length; i++) {
        const pizzaItems = allItems[i];
        const price = pizzaItems.querySelector(".amount").textContent;
        const amount = pizzaItems.querySelector(".price").textContent;
        console.log("price " + price);
        console.log("amount" + amount);

        //const onlyPrice=price.split("")[0];
        //const umnozak = parseInt(amount) * parseFloat(onlyPrice);
        totalPrice = totalPrice + parseInt(price);
    }
    console.log("total price:" + totalPrice);
    document.querySelector("#total-price").innerText = "Ukupno: " + totalPrice + "REDACTED" + " kn";
}

function onCloseElement(event) {
    const clickedX = event.currentTarget;
    const itemInCart = clickedX.parentElement;
    itemInCart.remove();

    calculateTotalPrice(); //makne i cijenu
    incrementCount();
}

function onPlus(event) {
    const clickedPlus = event.currentTarget;
    const item = clickedPlus.parentElement;
    let amount = +item.querySelector(".amount").innerText;
    amount += 1;
    item.querySelector(".amount").textContent = amount;
    item.querySelector(".minus").disabled = false;

    calculateTotalPrice();
    incrementCount();
}

function onMinus(event) {

    const clickedMinus = event.currentTarget;
    const item = clickedMinus.parentElement;
    let amount = +item.querySelector(".amount").innerText;
    if (amount > 1) {
        amount -= 1;
        item.querySelector(".amount").textContent = amount;
    }
    else
        item.querySelector(".minus").disabled = true;
    calculateTotalPrice(); //makne i cijenu
    incrementCount();
}