function multifun (a,b){
        let dodawanie= a+b;
        let odejmowanie= a-b;
        let mnozenie= a*b;
        if(dodawanie>0){ 
            console.log("Wynik dodawania wynosi:", dodawanie);
        } else if(dodawanie<0) {
            console.log("Wynik dodawania jest ujemny");}

        if(odejmowanie>0){ 
            console.log("Wynik odejmowania wynosi:", odejmowanie);
        } else if(odejmowanie<0){
            console.log("Wynik odejmowania jest ujemny");}
        
        if(mnozenie>0){ 
            console.log("Wynik mnożenia wynosi:", mnozenie);
        } else if(mnozenie<0){
            console.log("Wynik mnożenia jest ujemny");}
        
    }
    
    multifun (2,3);

