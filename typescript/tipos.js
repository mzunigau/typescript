"use strict";
(function () {
    function saludar(nombre) {
        console.table('Hola ' + nombre); // Hola Logan
    }
    var wolverine = {
        nombre: 'Logan'
    };
    saludar(wolverine.nombre);
    var mensaje = 'Hola';
    var numero = 123;
    var booleano = true;
    var hoy = new Date();
    var cualquiercosa;
    cualquiercosa = mensaje;
    cualquiercosa = numero;
    cualquiercosa = booleano;
    cualquiercosa = hoy;
    var spiderman = {
        nombre: 'Peter',
        edad: 30
    };
    spiderman = {
        nombre: 'Juan',
        edad: 100
    };
})();
