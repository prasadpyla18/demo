const playerr=document.querySelector("#playeer");
const compu=document.querySelector("#computeer");
const resu=document.querySelector("#res1");
const butChoice=document.querySelectorAll(".but");
let play;
let com;
let res;
//console.log("fhd");
butChoice.forEach(bro=>bro.addEventListener("click",()=>
{
    play=bro.textContent;
   // console.log(play);
    computerrole();
    playerr.innerHTML="bgkb";
    playerr.textContent=`Player:  ${play}`;
    compu.textContent=`Computer:  ${com}`;
    resu.textContent=result();
}));
function computerrole()
{
    const choice=Math.floor(Math.random()*3)+1;
    switch(choice)
    {
        case 1:
            com="Rock";
            break;
        case 2:
            com="Paper";
            break;
        case 3:
            com="Scissor";
            break;
    }
    
}
function result()
{
    if(play==com)
        return "Game Draw 🤩🤩";
    else if(play=="Rock"&&com=="Paper"||play=="Paper"&&com=="Scissor"||play=="Scissor"&&com=="Rock")
        return "You Loss 😢😢";
    else 
        return "You Won 🏆🏆";
    console.log("res");

}