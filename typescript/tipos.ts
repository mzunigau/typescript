(function(){
    function saludar( nombre:string ) {
        console.table( 'Hola ' + nombre ); // Hola Logan
    }
    
    
    const wolverine = {
        nombre: 'Logan'
    };
    
    
    saludar( wolverine.nombre );


    let mensaje: string= 'Hola';
    let numero: number =123;
    let booleano: boolean = true;
    let hoy: Date= new Date();

    let cualquiercosa: string | number | Date | boolean;
    cualquiercosa= mensaje;
    cualquiercosa= numero;
    cualquiercosa= booleano;
    cualquiercosa = hoy;

    let spiderman = {
        nombre: 'Peter',
        edad: 30
    };

    spiderman = {
        nombre: 'Juan',
        edad : 100
    };

})();



