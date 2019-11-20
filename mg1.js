function mmg(llegadas, servicios, servidores, _sigma){
    let tasaLlegadas = llegadas;
    let tasaServicios = servicios;
    let s = servidores;
    // checar esto, no se si se recibe en el argumento
    let sigma = _sigma;

    let p0;
    let p;
    let Lq;
    let L;
    let Wq;
    let W;

    // p
    p = tasaLlegadas/(tasaServicios * s);

    // P0
    p0 = 1-p;

    // Lq
    Lq = ((Math.pow(tasaLlegadas, 2) * Math.pow(sigma, 2)) + Math.pow(p, 2))/(2*(1-p));

    // L
    L = p + Lq;

    // Wq
    Wq = Lq / tasaLlegadas;

    // W
    W = Wq + (1/tasaServicios);
}