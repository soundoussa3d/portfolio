const loadText=document.querySelector('.loading-text');
const bg=document.querySelector('.bg');
bod=document.getElementById("bod")
let load=0;
let int=setInterval(blurring , 30)
function blurring(){
    load++;
    if(load>99){
        clearInterval(int);
        create();
    } 
    loadText.textContent =`${load}%`;
    loadText.style.opacity= scale(load,0 ,100,1 , 0);
    bg.style.filter=`blur(${scale(load , 1 , 100 , 30, 0 )}px)`;
    
}
function create(){
    a=document.createElement("a");
    a.setAttribute("href","home.html" );
    a.setAttribute("class" , "a");
    a.textContent="WELCOME TO YOUR PERSONNAL PLATFORM  ";
    bod.appendChild(a);
}

    
const scale=(num , in_min , in_max , out_min ,out_max ) =>{
    return (num - in_min)* (out_max - out_min)/(in_max - in_min )+ out_min;
} 