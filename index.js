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

const displayElement = document.getElementById("displayName");

const totalPriceElement = document.getElementById("totalPrice");
const discountElement = document.getElementById("discount");
const totalElement = document.getElementById("total");


function getUniversalData(card) {
  const name = card.dataset.name;
  const price = parseInt(card.dataset.price);

  totalprice += price;
  console.log(name, price);
  console.log("Totalprice", totalprice);

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
   console.log(inputDiscount);
   console.log(totalprice);
   discountPrice = parseInt(totalprice * (inputDiscount/100))
   discountElement.innerText= discountPrice
   console.log(discountPrice,"discountPrice");
   totalElement.innerText = totalprice-discountPrice;
   
}
