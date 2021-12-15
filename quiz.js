const quizform =document.querySelector
const submitAnswerBtn=document.querySelectorAll 
("#sumit-answer-btn")

const outputEI=document.querySelector("#output")

const correctAnswer=["90","right angled"];

function calculatescore(){
    let score =0;
    let index =0;

const formResult=new FormData(quizform);
for(let value of formResults.value()) {
    if (value===correctAnswer[index]){
        score=score+1;

    }
    index=index+1;

}console.log(score);  




submitAnswerBtn.addEvenlishener("click",calculatescore)