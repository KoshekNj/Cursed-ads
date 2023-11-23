const previousDress = document.getElementById("previous-button__dress");
const nextDress = document.getElementById("next-button__dress");
const previousShoes = document.getElementById("previous-button__shoes");
const nextShoes = document.getElementById("next-button__shoes");
const dress = document.getElementById("doll__dress");
const shoes = document.getElementById("doll__shoes");

let indexDress = 0;
let indexShoes = 0;
previousDress.classList.add("hide");
previousShoes.classList.add("hide");
previousDress.setAttribute("disabled", "");
previousShoes.setAttribute("disabled", "");
const clothes = [
  {
    dress: "",
    shoes: "",
  },
  {
    dress: "./DressPurple1.png",
    shoes: "./ShoeGothBoots.png",
  },
  {
    dress: "",
    shoes: "",
  },
];

nextDress.addEventListener("click", () => {
  indexDress++;
  setDress();
});

previousDress.addEventListener("click", () => {
  indexDress--;
  setDress();
});

nextShoes.addEventListener("click", () => {
  indexShoes++;
  setShoes();
});

previousShoes.addEventListener("click", () => {
  indexShoes--;
  console.log(indexShoes);
  setShoes();
});

function setDress() {
  showDress(clothes[indexDress]);
  if (indexDress == 0) {
    previousDress.classList.add("hide");
    previousDress.setAttribute("disabled", "");
  }
  if (indexDress > 0 && indexDress < clothes.length - 1) {
    previousDress.classList.remove("hide");
    nextDress.classList.remove("hide");
    previousDress.removeAttribute("disabled", "");
    nextDress.removeAttribute("disabled", "");
  }

  if (indexDress == clothes.length - 1) {
    nextDress.classList.add("hide");
    nextDress.setAttribute("disabled", "");
  }
}

function setShoes() {
  showShoes(clothes[indexShoes]);
  if (indexShoes == 0) {
    previousShoes.classList.add("hide");
    previousShoes.setAttribute("disabled", "");
  }
  if (indexShoes > 0 && indexShoes < clothes.length - 1) {
    previousShoes.classList.remove("hide");
    nextShoes.classList.remove("hide");
    previousShoes.removeAttribute("disabled", "");
    nextShoes.removeAttribute("disabled", "");
  }

  if (indexShoes == clothes.length - 1) {
    nextShoes.classList.add("hide");
    nextShoes.setAttribute("disabled", "");
  }
}

function showDress() {
  dress["src"] = clothes[indexDress].dress;
}

function showShoes() {
  shoes["src"] = clothes[indexShoes].shoes;
}
