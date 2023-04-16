let count =  0;
let countEL = document.getElementById("count");

function increment(){
    count= count + 1;
    countEL.innerText=count;
    
}

let saveEL = document.getElementById("save-el");

function save(){
    let countSTR = count + " - ";
    saveEL.textContent += countSTR;
    countEL.innerText=0;
    count=0;
}