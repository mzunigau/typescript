(()=>{

 const retirarDinero = ( montoRetirar: number): Promise<number> =>{

    let dineroActual = 1000;

    return new Promise( (resolve, reject)=>{
        
        if( montoRetirar > dineroActual ){
            reject('No hay suficientes fondos');

        }else{
            dineroActual -= montoRetirar;
        }

    });

 }   


 retirarDinero( 500)
                 .then( montoActual => console.log( `Me queda ${montoActual}`))
                 .catch(  console.warn);

    
})();



