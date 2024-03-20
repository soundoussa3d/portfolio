window.addEventListener('load',init);
//Globals
//Available levels
const levels= {
    easy :5,
    medium : 3,
    hard : 2
}

//To change level
const currentlevel=levels.easy;

let time=currentlevel;
let score=0;
let isPlaying=true;

//DOM Elements
var  wordinput=document.getElementById("word-input");
var currentword=document.getElementById("current-word");
var scoredisplay=document.getElementById("score");
var timedisplay=document.getElementById("time");
var message=document.getElementById("message");
var seconds=document.getElementById("seconds");

const words=['hat','river','lucky','statue','generate','stubborn','javascript','developper','establish','nutrition','hero','runaway','revolver','oppression','siblings','gameover','winner','timestamp','background','basement','baseball','football','drink','definition'];

//Initialize Game
 function init(){
     //show number of seconds in UI
     seconds.textContent=currentlevel
    //Load word from array
    showWord(words);
    //Start matching on word input
    wordinput.addEventListener('input',startmatch);
    //Call countdown every second
    setInterval(countdown,1000);
    //Check game status
    setInterval(checkStatus,50);
}
//Start match
function startmatch(){
    if(matchwords()){
        isPlaying=true;
        time=currentlevel+1;
        showWord(words);
        wordinput.value='';
        score++;
    }
    //if score is -1 , display 0
    if(score===-1){
        scoredisplay.textContent=0;
    }
    else{
        scoredisplay.textContent=score;
    }
   
}
//Match the current word to the wordinput
function matchwords(){
    if(wordinput.value===currentword.innerHTML){
        message.textContent='Correct!!!';
        messagecss()
        return true
    }
    else {
        message.textContent='';
        return false
    }
}


//Picj & show random words
function showWord(words){
    //Generate random array index
    const randIndex=Math.floor(Math.random()* words.length);
    //Output a random word
    //var t=document.createTextNode(words[randIndex]) ;
    //currentword.appendChild(t);
    currentword.textContent=words[randIndex];
}
//Countdown timer
function countdown(){
    //Make sure time is not run out
    if(time>0){
        //decrement
        time-=1;
    }  else if(time == 0){
        //Game is over
        isPlaying=false;
    } 
    //Show time
    timedisplay.textContent= time;
     
    
}
//Check game status
function checkStatus(){
    if(!isPlaying && time===0){
        message.innerHTML='Game Over!!!';
        messagecss()
        score=-1;
    } 
}
//css message
function messagecss(){
    if(message.textContent=='Correct!!!'){
        message.style.color='white';
        
    } 
    else if(message.textContent=='Game Over!!!'){
        message.style.color='beige'
        
    } 
}
//ratting
/*const starsEl=document.querySelectorAll(".fa-star");
starsEl.forEach((starEL , index)=>{
    starEL.addEventListener('click',()=>{
        //update rating
        updaterating(index)
    } );
} );
function updaterating(index){
   starsEl.forEach((starEL,idx)=>{
      if(idx<index + 1 ){
         starEL.classList.add("active");
    } 
    else {
        starEL.classList.remove("active");
    } 
} ) ;

} */
const allStars=document.querySelectorAll('.star');
let current_rating=document.querySelector(".current_rating");

allStars.forEach((star,i)=>{
    star.onclick=function(){
        let current_star_leve=i+1;
        current_rating.innerText=`${
            current_star_leve } of 5`;
        allStars.forEach((star,j)=>{
            if(current_star_leve >= j+1){
                star.innerHTML='&#9733';
            }
            else{
                star.innerHTML='&#9734';
            }
        })
    }
})