const cardName = document.querySelector("#card-name");
const cardNumber = document.querySelector("#card-number");
const dateM = document.querySelector("#details-inputs-date-m");
const dateY = document.querySelector("#details-inputs-date-y");
const cardCvc = document.querySelector("#details-inputs-cvc");
const btn = document.querySelector(".btn");
const nameErr = document.querySelector(".error-for-name");
const numberErr = document.querySelector(".error-for-number");
const numberPlaceholder = document.querySelector(".card-front-number");

let arr = [];

btn.addEventListener("click", () => {
    //  console.log(cardName.value, cardNumber.value, dateM.value.length, dateY.value, cardCvc.value);
    nameValidation();
    numberValidation();
    dateValidation();
});

function nameValidation(){
    var regexForName = /[a-zA-Z]+\s+[a-zA-Z]+/g;
    if(regexForName.test(cardName.value)){
        document.querySelector(".card-front-name").innerHTML = cardName.value.toUpperCase();
        cardName.classList.remove("wrong");
        nameErr.classList.remove("show");
        nameErr.classList.add("hidden");
    }else{
        cardName.classList.add("wrong");
        nameErr.classList.remove("hidden");
        nameErr.classList.add("show");
        document.querySelector(".card-front-name").innerHTML = "Name placeholder";
    }
}

function numberValidation(){
    let ok = 1;
    const digits = "0123456789";
    const numberArr = cardNumber.value.split("");
    if(cardNumber.value.length != 16){
        ok = 0;
    }
    for(let i of numberArr){
        if(!digits.includes(i)){
        ok = 0;
        break;
    }
  }
  if(ok === 0){
    cardNumber.classList.add("wrong");
    numberErr.classList.remove("hidden");
    numberErr.classList.add("show");
    document.querySelector(".card-front-number").innerHTML = "0000 0000 0000 0000";
  } else{
    cardNumber.classList.remove("wrong");
    numberErr.classList.remove("show");
    numberErr.classList.add("hidden");
    document.querySelector(".card-front-number").innerHTML = cardNumber.value;
  }
}

function dateValidation(){
    if (dateM.value.length != 2 || dateY.value.length != 2){
        dateM.classList.add("wrong");
        dateY.classList.add("wrong");
    } else {
        dateM.classList.remove("wrong");
        dateY.classList.remove("wrong");
    }
}