let squares= document.querySelectorAll(".square");
let counter = document.querySelector(".counter");
let p=document.querySelector(".picture");

let tab=[];
let countClick=0;
let countClick2=0;

squares.forEach((square) =>{
    square.addEventListener('click',function(e){
        countClick++;  
        countClick2++;  
        counter.innerHTML = countClick;
        e.target.style.opacity=1;       
        tab.push(e.target)
    

        if ( countClick==2 && tab[1]==tab[0]){
          tab[""];
        }
        else {
          e.target.style.opacity=1
          tab[""];
        }
            
                
              
        console.log(tab)
        console.log(p)      
             
    })

  
})




