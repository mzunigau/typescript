(function(){

    const miFuncion = function (a: string){
        return a;
    }

    const miFuncionF= (a: string)=> a;

    const sumarN = function ( a: number, b:number){
        return a+b;
    }

    const sumarF =(a:number, b:number)=>a+b;

    console.log( sumarF(1,2) );

    const hulk={
        nombre: 'Hulk',
        smash(){

            setTimeout(()=>{
                console.log(` ${this.nombre} smash!!`);
                
            }, 1000);
        }
    }

    hulk.smash();
})();



