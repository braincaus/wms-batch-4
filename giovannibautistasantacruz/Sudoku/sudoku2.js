let a=[4,7,3];
let b=[4,3,5];
let c=[7,5,4];

const combine =(...arrays)=>{

    let result=[];

    for (const array of arrays){
        result = result.length === 0 ? array : result.filter(number=>{
            return array.includes(number);
        })
    }

    return result;
}

combine(a,b,c);


const comparaArreglo = (arreglo1, arreglo2) => {

    let copia;
    if (arreglo1.length > arreglo2.length) copia = arreglo1, arreglo1 = arreglo2, arreglo2 = copia; // indexOf to loop over shorter
    return arreglo2.filter(function(e) {
        return arreglo1.indexOf(e) > -1;
    });


}