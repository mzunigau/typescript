(()=>{

const avenger ={
    nombre: 'Steve',
    clave: 'Captain America',
    poder: 'Droga'
}

const extraer = ( {nombre, poder, clave}:any)=>{

    //const{ nombre, clave, poder} = avenger;
    
    console.log( nombre);
    console.log( clave);
    console.log( poder);
}

//extraer(avenger);

const avengers: string[] = ['thor','ironman','spiderman'];

const [  , , spiderman]= avengers;

//console.log( thor );
//console.log( ironman) ;
//console.log( spiderman );

const extraerArr = ( [thor, ironman, spiderman]: string[])=>{

    //const{ nombre, clave, poder} = avenger;
    
    console.log( thor);
    console.log( ironman);
    console.log( spiderman);
}

extraerArr( avengers );



    
})();



