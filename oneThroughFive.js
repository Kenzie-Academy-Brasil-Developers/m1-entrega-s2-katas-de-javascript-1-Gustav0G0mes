//PRIMEIRA ATIVIDADE
function oneThroughTwenty(){
let meuRetorno = []
for(let contador = 1;contador <=20; contador++){
meuRetorno.push(contador)

}
return meuRetorno 

}
console.log(oneThroughTwenty())


//SEGUNDA ATIVIDADE
function evensToTwenty(){
    let meuRetorno = []
    
    for(let contador = 1;contador <=20; contador++){
        if(contador % 2 == 0){
            meuRetorno.push(contador)    
        }
    
    
    }
    return meuRetorno 
    
    }
    console.log(evensToTwenty())


    //TERCEIRA ATIVIDADE
    function oddsToTwenty(){
        let meuRetorno = []
        
        for(let contador = 1;contador <=20; contador++){
            if(contador % 2 == 1){
                meuRetorno.push(contador)    
            }
        
        
        }
        return meuRetorno 
        
        }
        console.log(oddsToTwenty())


        //QUARTA ATIVIDADE
        function multiplesOfFive(){
            let meuRetorno = []
            
            for(let contador = 1;contador <=100; contador++){
                if(contador % 5 == 0){
                    meuRetorno.push(contador)    
                }
            
            
            }
            return meuRetorno 
            
            }
            console.log(multiplesOfFive())

            //QUINTA ATIVIDADE


            function squareNumbers(){
                let meuRetorno = []
                
                for(let contador = 1;contador <=10; contador++){
                        meuRetorno.push(contador * contador)    
                    }
                return meuRetorno 
                
                }
                console.log(squareNumbers())


            
//SEXTA ATIVIDADE
function countingBackwards(){
    let meuRetorno = []
    for(let contador = 20;contador >=1; contador--){
    meuRetorno.push(contador)
    
    }
    return meuRetorno 
    
    }
    console.log(countingBackwards())

    //SÉTIMA ATIVIDADE

   
    function evenNumbersBackwards(){
        let meuRetorno = []
        
        for(let contador = 20;contador >=1; contador--){
            if(contador % 2  == 0 ){
                meuRetorno.push(contador)    
            }
        
        
        }
        return meuRetorno 
        
        }
 
        console.log(evenNumbersBackwards())

        //OITAVA ATIVIDADE

         
    function oddNumbersBackwards(){
        let meuRetorno = []
        
        for(let contador = 20;contador >=1; contador--){
            if(contador % 2  == 1 ){
                meuRetorno.push(contador)    
            }
        
        
        }
        return meuRetorno 
        
        }
 
        console.log(oddNumbersBackwards())

        //NONA ATIVIDADE

         
    function multiplesOfFiveBackwards(){
        let meuRetorno = []
        
        for(let contador = 100;contador >=1; contador--){
            if(contador % 5  == 0 ){
                meuRetorno.push(contador)    
            }
        
        
        }
        return meuRetorno 
        
        }
 
        console.log(multiplesOfFiveBackwards())


        //DÉCIMA ATIVIDADE

        function squareNumbersBackwards(){
            let meuRetorno = []
            
            for(let contador = 10;contador >=1; contador--){
            
                    meuRetorno.push(contador * contador)    
                
            
            
            }
            return meuRetorno 
            
            }
            console.log(squareNumbersBackwards())