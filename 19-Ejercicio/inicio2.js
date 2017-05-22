/* Factura

*/

let oFactura = { 
                 
            empresa: {
                 nombre: "Everis",
                 direccion: "C/ Jacinto Serrano 16 4d",
                 Telf: 936436357,
                 NIF : "G73847837"
                 },
                
            infoCliente1 : {
                nombre : "Benjamin",
                Apellidos:"From Giy",
                direccion: "C/ Jacinto Serrano 16 4d",
                Telf: 936436357,
                DNI : "G73847837"
                },
                elementos : [
                   { descripcion : "Pc 1", cantidad : 5, precio : 1200 },
                   { descripcion : "Pc 2", cantidad : 7, precio : 1800 },
                   { descripcion : "Pc 3", cantidad : 9, precio : 2100 }

                ],
                info: {
                    importeTotal: 300,
                    tipo_IVA: "26%",
                    formaPago: "tarjeta",
                    total:0,
                } 
};

oFactura.calculo = function(){
var primero = this.elementos[0];
console.log(primero);
};

            



oFactura.calculo();
