//NORMAL PRACTISE WAY
// function firstCard(){
//     const name=document.getElementById("first-card-name").innerText
//     const price=document.getElementById("first-card-price").innerText
//     console.log(name,price)

// }

// function secondCard(){
//     const name=document.getElementById("second-card-name").innerText
//     const price=document.getElementById("second-card-price").innerText
//     console.log(name,price)
// }
// function thirdCard(){
//     const name=document.getElementById("third-card-name").innerText
//     const price=document.getElementById("third-card-price").innerText
//     console.log(name,price)
// }

//THE BEST WAY OF PRACTISE

let totalprice = 0;
let discountPrice = 0;

let shoppingArr = ["0"];

const displayElement = document.getElementById("displayName");

const totalPriceElement = document.getElementById("totalPrice");
const discountElement = document.getElementById("discount");
const totalElement = document.getElementById("total");

const applyBtn = document.getElementById("applyBtn");

const buyBtn = document.getElementById("buyBtn");

buyBtn.disabled = true;
applyBtn.disabled = true;
buyBtn.classList.add("opacity-50");
buyBtn.style.cursor = "not-allowed";
applyBtn.classList.add("opacity-50");
applyBtn.style.cursor = "not-allowed";

function getUniversalData(card) {
  const name = card.dataset.name;
  const id = card.dataset.id;
  const price = parseInt(card.dataset.price);

  for (let i = 0; i < shoppingArr.length; i++) {
    if (shoppingArr[i] === id) {
      return alert("Already Exist");
    }
  }

  shoppingArr.push(id);

  // console.log(shoppingArr);
  console.log(id, "id");
  totalprice += price;
  // console.log(name, price);
  // console.log("Totalprice", totalprice);

  if (totalprice > 0) {
    buyBtn.disabled = false;
    buyBtn.classList.remove("opacity-50");
    buyBtn.style.cursor = "pointer";
  }

  if (totalprice >= 200) {
    applyBtn.disabled = false;
    applyBtn.classList.remove("opacity-50");
    applyBtn.style.cursor = "pointer";
  }

  let initialDiscountTotal = totalprice;

  const li = document.createElement("li");
  li.classList.add("list-decimal");
  li.innerText = name;
  displayElement.appendChild(li);

  totalPriceElement.innerText = totalprice;

  totalElement.innerText = initialDiscountTotal;
}

function discountCal() {
  const inputDiscount = document.getElementById("discountValue").value;

  // console.log(inputDiscount);
  // console.log(totalprice);

  if (inputDiscount === "SELL200") {
    discountPrice = parseInt(totalprice * (2 / 100));
    discountElement.innerText = discountPrice;
    console.log(discountPrice, "discountPrice");
    totalElement.innerText = totalprice - discountPrice;
  } else {
    alert("Invaild Coupon");
  }
}
