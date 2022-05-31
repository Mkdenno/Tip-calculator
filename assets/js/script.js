let btnCalculate=document.getElementById("calculate");
let btnReset=document.getElementById("reset");
let billAmount=document.getElementById("bill");
let parcentage=document.getElementById("parcentage");
let tipAmount=document.getElementById("amount");
let total=document.getElementById("total");
let formEl=document.getElementById("form");
let amount;
let sum;
//calculate button
btnCalculate.addEventListener("click", ()=>{
    let bill=billAmount.value;
    let parcent=parcentage.value;
    amount=(bill*parcent)/100;
    tipAmount.value=amount;
    sum=amount + parseFloat(bill);
    total.value=sum;
   
})
//empty inputs

// reset button
btnReset.addEventListener("click" ,()=>{
    billAmount.value="";
    parcentage.value="";
    tipAmount.value="";
    total.value="";


})
