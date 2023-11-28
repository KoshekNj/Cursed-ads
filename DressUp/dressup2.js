const previousDress = document.getElementById("previous-button__dress");
const nextDress = document.getElementById("next-button__dress");
const previousShoes = document.getElementById("previous-button__shoes");
const nextShoes = document.getElementById("next-button__shoes");
const previousBottoms = document.getElementById("previous-button__bottoms");
const nextBottoms = document.getElementById("next-button__bottoms");
const dress = document.getElementById("doll__dress");
const shoes = document.getElementById("doll__shoes");
const bottoms = document.getElementById("doll__bottoms");

let indexDress = 0;
let indexShoes = 0;
let indexBottoms = 0;

previousDress.classList.add("hide");
previousShoes.classList.add("hide");
previousBottoms.classList.add("hide");
previousDress.setAttribute("disabled", "");
previousShoes.setAttribute("disabled", "");
previousBottoms.setAttribute("disabled", "");

const clothes = [
  {
    dress: "",
    bottoms: "",
    shoes: "",
  },
  {
    dress: "./Assets2/DressPurple1.png",
    bottoms: "./Assets2/CrossJeans.png",
    shoes: "./Assets2/ShoeGothBoots.png",
  },
  {
    dress: "./Assets2/WhiteCorset.png",
    bottoms: "./Assets2/LeatherBucklePants.png",
    shoes: "",
  },
  {
    dress: "./Assets2/BowTop.png",
    bottoms: "./Assets2/LowRiseJeans.png",
    shoes: "./Assets2/PointyHeels.png",
  },
  {
    dress: "./Assets2/PVCCorset.png",
    bottoms: "./Assets2/WhiteSilkyMidiSkirt.png",
    shoes: "./Assets2/PointyHeels.png",
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
  setShoes();
});

nextBottoms.addEventListener("click", () => {
  indexBottoms++;
  setBottoms();
});

previousBottoms.addEventListener("click", () => {
  indexBottoms--;
  setBottoms();
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

function setBottoms() {
  showBottoms(clothes[indexBottoms]);
  if (indexBottoms == 0) {
    previousBottoms.classList.add("hide");
    previousBottoms.setAttribute("disabled", "");
  }
  if (indexBottoms > 0 && indexBottoms < clothes.length - 1) {
    previousBottoms.classList.remove("hide");
    nextBottoms.classList.remove("hide");
    previousBottoms.removeAttribute("disabled", "");
    nextBottoms.removeAttribute("disabled", "");
  }

  if (indexBottoms == clothes.length - 1) {
    nextBottoms.classList.add("hide");
    nextBottoms.setAttribute("disabled", "");
  }
}

function showDress() {
  dress["src"] = clothes[indexDress].dress;
}

function showShoes() {
  shoes["src"] = clothes[indexShoes].shoes;
}

function showBottoms() {
  bottoms["src"] = clothes[indexBottoms].bottoms;
}
