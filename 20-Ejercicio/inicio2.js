/*let oFactura1 = {
    idFactura :
    idCliente: 
}

let oFactura2 = {
    idFactura :,
    idCliente: 
}*/

//funcion contructora llama this a un objeto

function Factura (idFactura, idCliente) {
    this.idFactura="";
    this.idCliente="";
}

/*function FacturaRara (a, b){

    this.idFactura= a;
    this.idCliente=b;
}*/

let f34 = new Factura("125", "A47");
let f35 = new Factura("126", "A47" );

console.log(f34);
console.log(f35);






