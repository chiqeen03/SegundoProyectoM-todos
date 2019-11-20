function mmg(llegadas, servicios){
    mmg(llegadas, servicios, 1);
}

function mmg(llegadas, servicios, servidores){
    let tasaLlegadas = llegadas;
    let tasaServicios = servicios;
    let s = servidores;
    // checar esto, no se si se recibe en el argumento
    let sigma = 1/tasaServicios;

    let Pn;
    let P0;
    let p;
    let Lq;
    let L;
    let Wq;
    let W;

    let n;

    // p
    p = tasaLlegadas/(tasaServicios * s);

    // P0
    P0 = 1-p;

    // Lq
    Lq = ((Math.pow(tasaLlegadas, 2) * Math.pow(sigma, 2)) + Math.pow(p, 2))/(2*(1-p));

    // L
    L = p + Lq;

    // Wq
    Wq = Lq / tasaLlegadas;

    // W
    W = Wq + (1/tasaServicios);

    // Pn
    Pn = Math.pow(p, n) * P0;
}