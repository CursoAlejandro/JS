

function main() {  //2

    let oNum1 = { valor: 0 }
    let deseo = { valor: 0 }


    oNum1.valor = Number(prompt("Dime tu primer numero"));


    if ( oNum1.valor % 2 == 0) {

       console.log("Es Par")
       

   } else if (oNum1.valor%2 == 1) {

        console.log("Es IMPar")
    }


    else {
        alert("Not found")
    }


}

main();

