let btnCalculate=document.getElementById("calculate");
let billAmount=document.getElementById("bill");
let parcentage=document.getElementById("parcentage");
let tipAmount=document.getElementById("amount");
let total=document.getElementById("total");
let amount;
let sum;

btnCalculate.addEventListener("click", ()=>{
    let bill=billAmount.value;
    let parcent=parcentage.value;
    amount=(bill*parcent)/100;
    tipAmount.value=amount;
    sum=amount + parseFloat(bill);
    total.value=sum;


})
