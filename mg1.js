function mmg(llegadas, servicios){
    mmg(llegadas, servicios, 1);
}

function mmg(llegadas, servicios, varianza, servidores){
    // lambda
    let tasaLlegadas = llegadas;
    // mu
    let tasaServicios = servicios;
    // sigma cuadrada
    let sigmaCuadrada = varianza;
    // s
    let s = servidores;

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
    Lq = ((Math.pow(tasaLlegadas, 2) * sigmaCuadrada) + Math.pow(p, 2))/(2*tasaLlegadas*(1-p));

    // L
    L = p + Lq;

    // Wq
    Wq = Lq / tasaLlegadas;

    // W
    W = Wq + (1/tasaServicios);

    // Pn
    Pn = Math.pow(p, n) * P0;
}