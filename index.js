function myButton() {
    var Correct=0;
    document.write(score);
     var currentAnswer1=document.Quick.number1.value;
    var currentAnswer2=document.Quick.number2.value;
    var currentAnswer3=document.Quick.number3.value;
    var currentAnswer4=document.Quick.number4.value;
    var currenttAnswer5=document.Quick.number5.value;
    var test=getElementById("test")
    var result=document.getElementById("text")
    if (currenttAnswer1=="Array") {score++};
    if (currentAnswer2=="Script") {score+=20};
    if (currentAnswer3=="const") {score+=20};
    if (currentAnswer4=="Correct") {score+=20};
    
    
    if (score>=4) {
    result.textContent= "Your score is 80%. Congratulations";
    } else{

    }
}


