let btn=document.querySelector(".btn");
let dice=document.querySelector("#dice");
let historyList=document.querySelector(".dice-list")
let list=[];
function rolldice(){
    let newNum = Math.floor(Math.random()*6)+1;
    const result=diceFace(newNum);
   dice.classList.add("roll-animation");

   setTimeout(() => {
    dice.innerHTML=result;
    dice.classList.remove("roll-animation");
   }, 1000);
   list.push(newNum);
   addHistory();
}

function addHistory(){
    historyList.innerHTML="";
    for(let i=0;i<list.length;i++){
        const listE1=document.createElement("li");
        listE1.classList.add("list-item");
        listE1.innerHTML=`Roll ${i+1} <span> ${diceFace(list[i])} </span>`
        historyList.appendChild(listE1);
    }
}

function diceFace(newNum){
       switch(newNum){
        case 1:
            return "&#9856";
          
        case 2:
            return "&#9857";  
           
        case 3:
            return "&#9858";
        case 4:
            return "&#9859";
        case 5:
            return "&#9860";
        case 6:
            return "&#9861";
       }
}





btn.addEventListener("click",()=>{
     rolldice();
})