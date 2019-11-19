function mms(llegadas, servicios, servidores) {

    let tasaLlegadas = llegadas;
    let tasaServicios = servicios;
    let s = servidores;
    let n;

    let p0;
    let p;
    let Lq;
    let L;
    let Wq;
    let W;


    //P0
    let sum = 0;
    let temp = 0;

    for (i = 0; i < s; i++) {
        sum += Math.pow(tasaLlegadas / tasaServicios, i) / factorize(i);
    }

    temp = Math.pow(tasaLlegadas / tasaServicios, s) / factorize(s);

    let temp2 = temp * (1 / (1 - (tasaLlegadas / (s * tasaServicios))));

    let total = temp2 + sum;

    p0 = 1 / total;
    console.log("P0: " + p0);

    //P
    p = tasaLlegadas / (s * tasaServicios);
    console.log("P: " + p);

    //Lq
    Lq = (p0 * (Math.pow(tasaLlegadas / tasaServicios, s)) * p) / (factorize(s) * (Math.pow(1 - p, 2)));
    console.log("Lq: " + Lq);

    //L
    L = Lq + (tasaLlegadas / tasaServicios);
    console.log("L: " + L);

    //Wq
    Wq = Lq / tasaLlegadas;
    console.log("Wq: " + Wq);

    //W
    W = Wq + (1 / tasaServicios);
    console.log("W: " + W);
}

function Cn(n0, nf, comp, s) {
    let n = n0;
    let factorProceso;
    //Cn
    if (n >= s) {
        factorProceso = Math.pow(tasaLlegadas / tasaServicios, n) / factorize(n);
    } else {
        factorProceso = Math.pow(tasaLlegadas / tasaServicios, n) / factorize(s) * Math.pow(s, n - s);
    }
}

function Pn() {
    let promedioCliente;
    if (n >= s) {
        promedioCliente = Math.pow(tasaLlegadas / tasaServicios, n) / (factorize(n));
    } else {

    }
}

function factorize(num) {
    var result = num;
    if (num === 0 || num === 1)
        return 1;
    while (num > 1) {
        num--;
        result = result * num;
    }
    return result;
}