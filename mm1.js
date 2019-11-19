function mm1(llegadas, servicios) {
    var tasaLlegadas = llegadas;
    var tasaServicios = servicios;
    var factorUtiliza;
    var clientesCola;
    var promedioClientes;
    var tiempoCola;
    var promedioSistema;

    factorUtiliza = tasaLlegadas / tasaServicios;
    console.log("P: " + factorUtiliza);
    clientesCola = (Math.pow(tasaLlegadas, 2)) / tasaServicios * (tasaServicios - tasaLlegadas);
    console.log("Lq: " + clientesCola);
    promedioClientes = tasaLlegadas / (tasaServicios - tasaLlegadas);
    console.log("L: " + promedioClientes);
    tiempoCola = clientesCola / tasaLlegadas;
    console.log("Wq: " + tiempoCola);
    promedioSistema = promedioClientes / tasaLlegadas;
    console.log("W: " + promedioSistema);
}