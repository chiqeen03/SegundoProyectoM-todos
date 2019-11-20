function mmsk(llegadas, servicios, servidores,k) {
    let tasaLlegadas =  llegadas;
    let tasaServicios = servicios;
    let s = servidores;

    let sum = 0;
    let sum2 = 0;
    let temp = 0;
    let temp2 = 0;
    
    let p0;
    let p;
    let Lq;
    let Le;
    let pk;
    let wq;
    let w;
    let L;
    let ca;

    p = tasaLlegadas/(s*tasaServicios);

    for(i=0;i<=s;i++) {
        sum += Math.pow(tasaLlegadas/tasaServicios,i)/factorize(i);
    }

    temp = Math.pow(tasaLlegadas/tasaServicios,s)/factorize(s);

    for(j=s+1;j<=k;j++) {
        sum2 += Math.pow(p,j-s);
    }

    temp2 = sum + temp * sum2;

    p0 = 1/temp2;

    console.log("P0: "+p0);

    LqTemp1 = p0 * Math.pow(tasaLlegadas/tasaServicios,s) * p / (factorize(s)*(Math.pow(1-p,2)));

    LqTemp2 = 1 - Math.pow(p,k-s) - ((k-s) * Math.pow(p,k-s)) * (1-p);

    Lq = LqTemp1 * LqTemp2;

    console.log("Lq: "+Lq);

    pk = Pn(k,s,k, tasaLlegadas, tasaServicios, p0);

    console.log("Pk: "+pk);

    Le = tasaLlegadas * (1-pk);

    console.log("Le: "+Le);

    wq = lq/Le;

    console.log("Wq: "+wq);

    w = wq + (1/tasaServicios);

    console.log("W: "+w);

    L = Le * w;

    console.log("L: "+L);

    ca = 1-p0;

    console.log("Clientes atendidos: "+ca);
}

mmsk(2,3,1,3);

function Pn(n,s,k, tL, tS, p0) {

  if(n <= s) {
    return (Math.pow(tL/tS,n) / factorize(n)) * p0;
  }else if(n > s && n <= k) {
    return (Math.pow(tL/tS,n) / factorize(s) * Math.pow(s,n-s)) * p0;
  }else {
    return 0;
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