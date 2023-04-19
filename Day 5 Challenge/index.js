
let Displayone=document.getElementById("one");
let Displaytwo=document.getElementById("two");
let Answerresult=document.getElementById("answer");
function add(){
    let a = Displayone.value;
    let b = Displaytwo.value;   
    let result=parseFloat(a)+parseFloat(b);
    Answerresult.textContent="ANSWER = " + result;
}
function subtract(){
    let a = Displayone.value;
    let b = Displaytwo.value;   
    let result=a-b;
    Answerresult.textContent="ANSWER = " + result;
}
function multiply(){
    let a = Displayone.value;
    let b = Displaytwo.value;   
    let result=a*b;
    Answerresult.textContent="ANSWER = " + result;
}
function divide(){
    let a = Displayone.value;
    let b = Displaytwo.value;   
    let result=a/b;
    Answerresult.textContent="ANSWER = " + result;
}