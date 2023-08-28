let userselect=document.getElementById('selected');
let userimage=document.getElementById('usersideimage');
let userimage2=document.getElementById('computersideimage')
let gameOptions=document.getElementById('selected')
let buton=document.getElementById('buttonn')
let output=document.getElementById('result')

var a;

function userchoosegun(){
    
    userimage.src='gun.jpeg'
    return 0;
}



function userchoosewater(){
    userimage.src='water.jpeg';

    return 1;

}

function userchoosesnake(){
    userimage.src='snake-drawing-step-10.png';
    
    return 2;
}

function computerchoose(){
    let a=Math.round(Math.random()*2)
    
    if(a==0){
        userimage2.src='gun.jpeg';
    }
    else if(a==1){
        userimage2.src='water.jpeg';
        
    }
    else{
        userimage2.src='snake-drawing-step-10.png';
    }
    return a;
}



function autochoose(){
gameOptions.addEventListener('change', function() {
    const selectedOption = gameOptions.value;
    if (selectedOption !== "") {
      if(selectedOption=="gun"){
        a=userchoosegun()
        
       

        
      }
      else if(selectedOption=="water"){
        a=userchoosewater()
        
        
        
      }
      else if(selectedOption=="snake"){
        a=userchoosesnake()
        
       
        
      }
      console.log(a)
    }
    
}
)}


autochoose()

function submit(){
buton.addEventListener('click', function(){
    let b=computerchoose();
    if(a==b){
        output.textContent="match tie you both chose the same \u{1F60A}";
    }
    else if(a==0 && b==1){
        output.textContent="computer wins\n OOps gun is damaged in water";
    }
    else if(b==0 && a==1){
        output.textContent="wooho you wins\n you damaged the gun";
    }
    else if(a==1 && b==2){
        output.textContent="computer wins \n oops snake drunk the water";
    }
    else if(b==1 && a==2){
        output.textContent="wooho you wins\n you drunk the water ";
    }
    else if(a==0 && b==2){
        output.textContent="wohoo you win \n you shoot the snake";
    }
    else if(b==0 && a==2){
        output.textContent="oops computer wins\n oops your snake got shooted by gun";
    }
})
}

submit()