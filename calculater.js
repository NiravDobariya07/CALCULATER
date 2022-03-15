let display = document.getElementById('display');
function updateClock() {
    var now = new Date();
    var dname=now.getDay();
         mo = now.getMonth();
         dnum = now.getDate();
         yr =now.getFullYear();
         hou =now.getHours();
         min =now.getMinutes();
         sec = now.getSeconds();
         pe= "AM";

         if(hou==0){
             hou =12
         }
         if(hou>12){
             hou = hou-12;
             pe ="pm"
         }
         if(hou<10){
             hou = "0"+hou;
         }
         if(min<10){
            min = "0"+min;
        }
        if(sec<10){
            sec = "0"+sec;
        }


         var months = ["january","february","march","april","may","june","july","september","octomber","november","december"];
         var week = ["sunday","monday","tuesday","wednesday","thursday","friday","seturday"];
         var ids = ["dayname","month","daynum","year","hrs","miniute","second","period"];
         var values = [week[dname],months[mo],dnum,yr,hou,min,sec,pe];
         for(var i =0; i < ids.length; i++)
         document.getElementById(ids[i]).firstChild.nodeValue =values[i];
}
function initClock() {
    updateClock();
    window.setInterval("updateClock()",1);
}
let buttons = Array.from(document.getElementsByClassName('button'));
buttons.map( button => {
   button.addEventListener ("click",(e)=>{
       switch (e.target.innerText) {
           case'c':
           display.innerText = "";
           break;
           case'back':
              if(display.innerText ){
                display.innerText = display.innerText.slice(0,-1)
              };
           break;
           case"=":
           try{
           display.innerHTML = eval(display.innerText)
               
           }
           catch{
               display.innerText = "Error!!"
           }
           break;
           default:
               display.innerText += e.target.innerText
               break;
       }
   });
});