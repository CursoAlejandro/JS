/* Vuelo almacena aerolinea
numero de vuelo
dato salida

*/

let oVuelo = { name_aerolinea : "Oceanic",
               numero:815,
               Hora_salida: 16.00,
               Hora_llegada: 20.00,
            departure = {
                
               
                departure: "clave IATA",
                fecha_hora: "2004-09-22  14:55",
                ciudad: "Sydney",

            },
            arrival = {
                departure: "clave IATA Lax",
                fecha_hora: "2004-09-23  10:42",
                ciudad: "Los Angeles",
            } ,

            mostrar : () => {
                    console.log(oVuelo)
            }


}

oVuelo.mostrar();
