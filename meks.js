function meks(llegadas, servicios, servidores, clientes){
    // lambda
    let tasaLlegadas = llegadas;
    // mu
    let tasaServicios = servicios;
    // s
    let s = servidores;
    // k
    let k = clientes;

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
    Lq = ((1+k)/(2*k))*((Math.pow(tasaLlegadas, 2))/(tasaServicios*(tasaServicios - tasaLlegadas)));

    // Wq
    Wq = Lq / tasaLlegadas;

    // W
    W = Wq + (1/tasaServicios);

    // L
    L = tasaLlegadas * W;

    // Pn
    Pn = Math.pow(p, n) * P0;
}