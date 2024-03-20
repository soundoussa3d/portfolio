function animatedForm(){
    const arrows=document.querySelectorAll(".fa-arrow-down");

    arrows.forEach(arrow => {
        arrow.addEventListener('click' , () =>{
           const input=arrow.previousElementSibling;
           const parent=arrow.parentElement;
           const nextform=parent.nextElementSibling;

           //check for validation
           if(input.type==="text" && validateUser(input)){
               nextSlide(parent,nextform); 
           }
           else if (input.type==='email' && validateEmail(input)){
            nextSlide(parent,nextform);
           }
           else if (input.type==='password' && validateUser(input)){
            nextSlide(parent,nextform);
           }
           else {
            parent.style.animation="shake 0.5s ease";
           }
           //get rid of animation
           parent.addEventListener('animationend',()=>{
            parent.style.animation='';
           })
        });
    });
}
function validateUser(user){
    if(user.value.lenght <6){
        console.log("not enough characrers");
    }
    else{
        return true ;
    }
}

function validateEmail(email){
    const validation=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (validation.test(email.value)){
        return true
    }
    
}

function nextSlide(parent,nextform){
    parent.classList.add('innactive');
    parent.classList.remove('active');
    nextform.classList.add('active');
}


animatedForm();
 



