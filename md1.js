function md1(llegadas, servicios, servidores){
    let tasaLlegadas = llegadas;
    let tasaServicios = servicios;
    let s = servidores;

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
    Lq = Math.pow(p, 2)/(2*(1-p));

    // L
    L = p + Lq;

    // Wq
    Wq = Lq / tasaLlegadas;

    // W
    W = Wq + (1/tasaServicios);
}