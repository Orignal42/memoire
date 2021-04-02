let squares= document.querySelectorAll(".picture");
let counter = document.querySelector(".counter");
let picture = document.querySelector(".picture");
let tab=[];
let countClick=0;
let countClick2=0;
let countClick3=0;



squares.forEach((square) =>{
    square.addEventListener('click',function(e){
     let v= e.target.getAttribute("data-cell")
     
        countClick++;  
        countClick2++;  
        counter.innerHTML = countClick;
        e.target.style.opacity=1; 
        tab.push(v) 
        checkComp()
          


  


function checkComp(){

  if ( countClick2==2){ 
    if( tab[0]== tab[1]){ 
      e.target.style.opacity=1;       
    tab=[];          
    countClick2=0                     
    }
    else{   
      setTimeout(()  =>{  
        console.log(tab[0])
        console.log(tab[1])
      //tab[0].style.opacity = 0; 
      //tab[1].style.opacity = 0;       
      tab=[] ; 
      countClick2=0 ;   
      alert("retry")}
                
      )}  
    }

}
})
})

