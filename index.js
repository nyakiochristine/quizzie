function myButton() {

} 
{
    var score=0
    var correctAnswer1=document.firstChild.number1.value;
    var correctAnswer2=document.firstChild.number2.value;
    var correctAnswer3=document.firstChild.number3.value;
    var correctAnswer4=document.firstChild.number4.value;
    var correctAnswer5=document.firstChild.number5.value;
    var test=getElementById("test")
    var result=document.getElementById("text")
    if (correctAnswer1=="Array") {score+=20};
    if (correctAnswer2=="Script") {score+=20};
    if (correctAnswer3=="const") {score+=20};
    if (correctAnswer4=="Correct") {score+=20};
    test.style.display="none";
    
    if (score>=4) {
    result.textContent= "Your score is 80%. Congratulations";
    } else{

    }

}