(()=>{

    // class Avenger{
    //     nombre: string;
    //     equipo :string;
    //     nombreReal?: string;

    //     puedePelear: boolean;
    //     peleasGanadas: number;

    //     constructor (nombre:string, equipo:string, nombreReal:string, puedePelear:boolean, peleasGanadas: number ){
    //     this.nombre=nombre;
    //     this.equipo= equipo ;
    //     this.nombreReal= nombreReal;
    //     this.puedePelear= puedePelear;
    //     this.peleasGanadas= peleasGanadas;
        
    //     }
    // }


      class Avenger{
        // nombre: string;
        // equipo :string;
        // nombreReal?: string;

        // puedePelear: boolean;
        // peleasGanadas: number;

        constructor ( 
            public nombre: string,
            public equipo: string,
            public nombreReal?: string,
            public puedePelear?: boolean,
            public peleasGanadas: number= 0,
             ){}
    } 

        const antman= new Avenger('AntMan','IronMan','Scott Lang', true, 10);


        console.log(antman);


    

    
 
})();



