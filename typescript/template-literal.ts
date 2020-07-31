(function(){

    function getEdad(   ){
        return 100 + 100 +300;
    }
    

const nombre = 'Marco';
const apellido = 'Zuniga';
const edad = 38;

//const salida = nombre +" "+apellido+" (Edad"+ edad + " )";
const salida =`${nombre} 
${apellido} 
( Edad ${edad + 100} ) 
${getEdad()}`;

console.log(salida);


})();



