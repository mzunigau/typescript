(()=>{

        // para definir reglar sobre objetos
    interface Xmen{
        nombre:string;
        edad: number;
        poder?: string;

    }

    const enviarMision = ( xmen: {nombre: string} )=>{
        console.log(`Enviando a ${ xmen.nombre} a la mision`);
    }

    const regresarCuartel = ( xmen: {nombre: string} )=>{
        console.log(`Regresa  ${ xmen.nombre} a al cuartel`);
    }

    const wolverine: Xmen= {
        nombre: 'Logan',
        edad: 60
    }

    enviarMision(wolverine);
    regresarCuartel(wolverine)
 
})();



