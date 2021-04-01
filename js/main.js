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
    

        if ( e.target.getAttribute('data-cell')===tab[0].getAttribute('data-cell')){
          tab[];
        }
        else {e.target.style.opacity=0}
            
                
              
        console.log(tab)
        console.log(p)      
             
    })

  
})




