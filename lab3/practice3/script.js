let counter=0;
 const constvalue=document.getElementById("counter");
 const butnderc=document.getElementById("decr");
 const butnres=document.getElementById("res");
 const butincr=document.getElementById("inc");
 function upcont(){
     constvalue.textContent=counter;
     if(counter>0){
         constvalue.style.color="green";

     }
     else if(counter<0){
         constvalue.style.color="red";
     }
     else{
         constvalue.style.color="black";
     }
    butincr.addEventListener("click", function(){
        counter++;
        upcont();
    });
     butnderc.addEventListener("click", function(){
         counter--;
         upcont();
     });
     butnres.addEventListener("click", function(){
         counter=0;
         upcont();
     })
 }