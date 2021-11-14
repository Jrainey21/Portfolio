const s1=document.getElementById("s1");
const s2=document.getElementById("s2");
const s3=document.getElementById("s3");
const s4=document.getElementById("s4");
const s5=document.getElementById("s5");
const s6=document.getElementById("s6");
const s7=document.getElementById("s7");
const s8=document.getElementById("s8");
const s9=document.getElementById("s9");
const s10=document.getElementById("s10");
const s11=document.getElementById("s11");
const s12=document.getElementById("s12");
const s13=document.getElementById("s13");
const s14=document.getElementById("s14");
const s15=document.getElementById("s15");
const s16=document.getElementById("s16");
const s17=document.getElementById("s17");
const s18=document.getElementById("s18");
const s19=document.getElementById("s19");
const s20=document.getElementById("s20");

const enter1=document.getElementById("enter1")
const enter2=document.getElementById("enter2")
const enter3=document.getElementById("enter3")
const enter4=document.getElementById("enter4")
const enter5=document.getElementById("enter5")
const enter6=document.getElementById("enter6")
const enter7=document.getElementById("enter7")
const enter8=document.getElementById("enter8")
const enter9=document.getElementById("enter9")
const enter10=document.getElementById("enter10")

// const li1=document.getElementById("li1")
// const li2=document.getElementById("li2")
// const li3=document.getElementById("li3")
// const li4=document.getElementById("li4")
// const li5=document.getElementById("li5")
// const li6=document.getElementById("li6")
// const li7=document.getElementById("li7")
// const li8=document.getElementById("li8")
// const li9=document.getElementById("li9")
// const li10=document.getElementById("li10")
const tr1=document.getElementById("tr1")
const tr2=document.getElementById("tr2")
const tr3=document.getElementById("tr3")
const tr4=document.getElementById("tr4")
const tr5=document.getElementById("tr5")
const tr6=document.getElementById("tr6")
const tr7=document.getElementById("tr7")
const tr8=document.getElementById("tr8")
const tr9=document.getElementById("tr9")
const tr10=document.getElementById("tr10")



const blank1=document.getElementById("blank1")
const blank2=document.getElementById("blank2")
const blank3=document.getElementById("blank3")
const blank4=document.getElementById("blank4")
const blank5=document.getElementById("blank5")
const blank6=document.getElementById("blank6")
const blank7=document.getElementById("blank7")
const blank8=document.getElementById("blank8")
const blank9=document.getElementById("blank9")
const blank10=document.getElementById("blank10")

const element=document.getElementById("ul");
let tables=document.querySelectorAll("table")


// let numOfEquations=element.children.length;
const begin=document.getElementById("begin");
const correct=document.getElementById("correct");
const message=document.getElementById("message");

let numberCorrect=0;
let problemCount=document.querySelectorAll("tr").length;
const buttonReset = document.getElementById("button-reset");
const time=document.getElementById("time")
const c=document.getElementById("c")

function random(){
  let x=  Math.floor(Math.random()*13);
  if(x<2){
      return 2;
  }
   return x;

}

begin.onclick=function(){
    // li1.classList.remove("display");
    tr1.classList.remove("display")
    enter1.classList.remove("display")
    Interval = setInterval(startTimer, 10);
    
    // s1.textContent=Math.floor(Math.random()*10)
    // s2.textContent=Math.floor(Math.random()*10)
    s1.textContent=random();
    s2.textContent=random();
    begin.classList.add("display");
    // buttonReset.classList.remove("display");
}
enter1.onclick=function(){
   tr2.classList.remove("display");
   enter1.classList.add("display");
   s3.textContent=random();
   s4.textContent=random();
if(blank1.value==eval(s1.textContent*s2.textContent)){
    blank1.style.backgroundColor="green";
    numberCorrect=numberCorrect+1;
} else{
    blank1.style.backgroundColor="red";
}
}
enter2.onclick=function(){
    tr3.classList.remove("display");
    enter2.classList.add("display");
    s5.textContent=random();
    s6.textContent=random();
    if(blank2.value==eval(s3.textContent*s4.textContent)){
        blank2.style.backgroundColor="green";
        numberCorrect=numberCorrect+1;
    } else{
        blank2.style.backgroundColor="red";
    }
  }
  enter3.onclick=function(){
    tr4.classList.remove("display");
    enter3.classList.add("display");
    s7.textContent=random();
    s8.textContent=random();
    if(blank3.value==eval(s5.textContent*s6.textContent)){
        blank3.style.backgroundColor="green";
        numberCorrect=numberCorrect+1;
    } else{
        blank3.style.backgroundColor="red";
    }
  }
  enter4.onclick=function(){
    tr5.classList.remove("display");
    enter4.classList.add("display");
    s9.textContent=random();
    s10.textContent=random();
    if(blank4.value==eval(s7.textContent*s8.textContent)){
        blank4.style.backgroundColor="green";
        numberCorrect=numberCorrect+1;
    } else{
        blank4.style.backgroundColor="red";
    }
}
enter5.onclick=function(){
  tr6.classList.remove("display");
  enter5.classList.add("display");
  s11.textContent=random();
  s12.textContent=random();
  if(blank5.value==eval(s9.textContent*s10.textContent)){
      blank5.style.backgroundColor="green";
      numberCorrect=numberCorrect+1;
  } else{
      blank5.style.backgroundColor="red";
  }
}
enter6.onclick=function(){
  tr7.classList.remove("display");
  enter6.classList.add("display");
  s13.textContent=random();
  s14.textContent=random();
  if(blank6.value==eval(s11.textContent*s12.textContent)){
      blank6.style.backgroundColor="green";
      numberCorrect=numberCorrect+1;
  } else{
      blank6.style.backgroundColor="red";
  }
}
enter7.onclick=function(){
  tr8.classList.remove("display");
  enter7.classList.add("display");
  s15.textContent=random();
  s16.textContent=random();
  if(blank7.value==eval(s13.textContent*s14.textContent)){
      blank7.style.backgroundColor="green";
      numberCorrect=numberCorrect+1;
  } else{
      blank7.style.backgroundColor="red";
  }
}
enter8.onclick=function(){
  tr9.classList.remove("display");
  enter8.classList.add("display");
  s17.textContent=random();
  s18.textContent=random();
  if(blank8.value==eval(s15.textContent*s16.textContent)){
      blank8.style.backgroundColor="green";
      numberCorrect=numberCorrect+1;
  } else{
      blank8.style.backgroundColor="red";
  }
}
enter9.onclick=function(){
  tr10.classList.remove("display");
  enter9.classList.add("display");
  s19.textContent=random();
  s20.textContent=random();
  if(blank9.value==eval(s17.textContent*s18.textContent)){
      blank9.style.backgroundColor="green";
      numberCorrect=numberCorrect+1;
  } else{
      blank9.style.backgroundColor="red";
  }
}

enter10.onclick=function(){
    buttonReset.classList.remove("display");
    time.classList.remove("display");
    appendTens.classList.remove("display");
    c.classList.remove("display");
    appendSeconds.classList.remove("display");
    if(blank10.value==eval(s19.textContent*s20.textContent)){
        blank10.style.backgroundColor="green";
        numberCorrect=numberCorrect+1;
    } else{
        blank10.style.backgroundColor="red";
    }
    clearInterval(Interval);
    // correct.textContent=numberCorrect;
    // let percentCorrect=(numberCorrect/numOfEquations)*100;
    let percentCorrect=(numberCorrect/problemCount)*100;
//${numOfEquations}
    correct.textContent=`You answered ${numberCorrect} out of ${problemCount} correctly. You scored ${percentCorrect}%.`;
    
    function gradeMessage(){
        if (percentCorrect==100){
            return "Excellent Work"
        }if (percentCorrect>90 && percentCorrect<100){
            return "Great Work"
    } if(percentCorrect>75 && percentCorrect<90){
        return "Satisfactory Work"
    }if(percentCorrect<75){
        return "Keep Trying"
    }}
    
     message.textContent=gradeMessage();
}

  var seconds =00; 
  var tens = 00; 
  var appendTens = document.getElementById("tens")
  var appendSeconds = document.getElementById("seconds")
  //var buttonStart = document.getElementById('button-start');
  var buttonStop = document.getElementById('button-stop');
//   var buttonReset = document.getElementById('button-reset');
  var Interval ;
//buttonstart.onclick
//   begin.onclick = function() {
    
//     // clearInterval(Interval);
//      Interval = setInterval(startTimer, 10);
//   }
  //buttonStop.onclick
//     enter5.onclick = function() {
//        clearInterval(Interval);
//   }
  

  buttonReset.onclick = function() {
      document.location.reload()
    //  clearInterval(Interval);
    // tens = "00";
  	// seconds = "00";
    // appendTens.innerHTML = tens;
  	// appendSeconds.innerHTML = seconds;
  }
  
   
  
  function startTimer () {
    tens++; 
    
    if(tens <= 9){
      appendTens.innerHTML = "0" + tens;
    }
    
    if (tens > 9){
      appendTens.innerHTML = tens;
      
    } 
    
    if (tens > 99) {
      console.log("seconds");
      seconds++;
      appendSeconds.innerHTML = "0" + seconds;
      tens = 0;
      appendTens.innerHTML = "0" + 0;
    }
    
    if (seconds > 9){
      appendSeconds.innerHTML = seconds;
    }
  
  }
  


// wrlist.classList.add('noDisplay')
//calculate percentage correct.. total questions/ number correct. If statement with
// categories. Keep practicing, almost there, perfect. 
//type in refresh key for the begin button/ and add start clock when that button is pressed.
//if clock is at 0 then start. if its not at 0 then reset/ perhaps just have a reset at the bottom.
//message that says restart app when finished. or click reset.