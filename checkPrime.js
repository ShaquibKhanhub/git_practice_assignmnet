function identifyPrime(num) {


   
    let fact = 0;
   
   
     for(let i=2 ;i<=num;i++){
  
        if(num  % num === 1){
  
            fact++;
  
        }
 
    }
     
     
     if(fact === 2){
   
       console.log("Yes");
  
     }
 
     else{
  
        console.log("No");
  
      }
   
   
 }