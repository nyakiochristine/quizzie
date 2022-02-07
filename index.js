function myButton() {
    var score=0;
    var currentAnswer1 = document.Quick.number1.value;
    var currentAnswer2 = document.Quick.number2.value;
    var currentAnswer3 = document.Quick.number3.value;
    var currentAnswer4 = document.Quick.number4.value;
    var currenttAnswer5 = document.Quick.number5.value;

    // var test=getElementById("test")
    // var result=document.getElementById("text")
    if (currentAnswer1=="Array") {score+=20};
    if (currentAnswer2=="Script") {score+=20};
    if (currentAnswer3=="const") {score+=20};
    if (currentAnswer4=="Correct") {score+=20};
    if (currenttAnswer5=="//" ){score+=20};
    document.write(score);
    // alert(score)
    
    if (score>=80) {
   result.textContent= 'Congrats you scored' + score + 'you have excellently passed'
    } else if(score>=50){
        result.textContent='Congrats you  scored' + score + 'you have fairly passed'
    }
    else {
        result.textContent=`You scored' + score + 'retake the test!`
    }



}
