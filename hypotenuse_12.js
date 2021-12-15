const input=document.querySelectorAll(".side-input")
const isTriangle=Document.querySelectorAll("#hypotenuse-btn")
const outputEI = document.querySelector("#output");

function calculatesumOfAngle(a,b) {
    const sumOfsquaress=a*a+b*b;
    return sumOfsquaress;
}

function calculateHypotenus (){
    const sumOfsquares = calculatesumOfSquares(Number(sides[0].value),number(sides[1].value));
    const lengthHypotenuse =Math.sqrt(sumOfsquares);
    outputEI.innerText="The lenght of hypotenuse is"+
    lengthHypotenuse

}