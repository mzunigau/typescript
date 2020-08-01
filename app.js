"use strict";
(function () {
    var miFuncion = function (a) {
        return a;
    };
    var miFuncionF = function (a) { return a; };
    var sumarN = function (a, b) {
        return a + b;
    };
    var sumarF = function (a, b) { return a + b; };
    console.log(sumarF(1, 2));
    var hulk = {
        nombre: 'Hulk',
        smash: function () {
            var _this = this;
            setTimeout(function () {
                console.log(" " + _this.nombre + " smash!!");
            }, 1000);
        }
    };
    hulk.smash();
})();
