let puzzle1 = [
    [5, 3, 0, 7, 0, 0, 0, 0, 0],
    [6, 0, 0, 1, 9, 5, 0, 0, 0],
    [0, 9, 8, 0, 0, 0, 0, 6, 0],
    [8, 0, 0, 0, 6, 0, 0, 0, 3],
    [4, 0, 0, 8, 0, 3, 0, 0, 1],
    [7, 0, 0, 0, 2, 0, 0, 0, 6],
    [0, 6, 0, 0, 0, 0, 2, 8, 0],
    [0, 0, 0, 4, 1, 9, 0, 0, 5],
    [0, 0, 0, 0, 8, 0, 0, 7, 9]
];

let initialArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const tomaValor = (puzzle) => {

    for (let i = 0; i < 9; i++) {

        for (let pz = 0; pz < 9; pz++) {

            let posición = pz;

            if (puzzle[i][pz] == 0) {

                let posibleSfila = verificaNumeros(puzzle[i]);

                let columna = integraColumnas(puzzle, posición);

                console.log(columna);

                let posibleSColumna = verificaNumeros(columna);

                let grid = integraGrid(puzzle, posición, i);

                let posibleSgrid = verificaNumeros(grid);

                let result = obtieneResultado(posibleSgrid, posibleSColumna, posibleSfila);

                if (result.length == 1) {

                    puzzle[i][posición] = result[0];

                    i = -1;
                    break;


                }
            }



        }
    }





    console.log(puzzle);

};


const integraGrid = (puzzle, posición, posicionArreglo) => {

    let grid = [];
    let valor = posición + 1;
    posicionArreglo = posicionArreglo + 1;
    if (valor < 4) {

        if (posicionArreglo < 4) {
            for (let i = 1; i < 4; i++) {

                grid.push(puzzle[0][i - 1]);
                grid.push(puzzle[1][i - 1]);
                grid.push(puzzle[2][i - 1]);
            }
        } else if (posicionArreglo < 7) {
            for (let i = 1; i < 4; i++) {

                grid.push(puzzle[3][i - 1]);
                grid.push(puzzle[4][i - 1]);
                grid.push(puzzle[5][i - 1]);
            }
        } else if (posicionArreglo < 10) {
            for (let i = 1; i < 4; i++) {

                grid.push(puzzle[6][i - 1]);
                grid.push(puzzle[7][i - 1]);
                grid.push(puzzle[8][i - 1]);
            }
        }



    } else if (valor < 7) {

        if (posicionArreglo < 4) {
            for (let i = 4; i < 7; i++) {

                grid.push(puzzle[0][i - 1]);
                grid.push(puzzle[1][i - 1]);
                grid.push(puzzle[2][i - 1]);
            }
        } else if (posicionArreglo < 7) {
            for (let i = 4; i < 7; i++) {

                grid.push(puzzle[3][i - 1]);
                grid.push(puzzle[4][i - 1]);
                grid.push(puzzle[5][i - 1]);
            }
        } else if (posicionArreglo < 10) {
            for (let i = 4; i < 7; i++) {

                grid.push(puzzle[6][i - 1]);
                grid.push(puzzle[7][i - 1]);
                grid.push(puzzle[8][i - 1]);
            }
        }



    } else if (valor < 10) {

        if (posicionArreglo < 4) {
            for (let i = 7; i < 10; i++) {

                grid.push(puzzle[0][i - 1]);
                grid.push(puzzle[1][i - 1]);
                grid.push(puzzle[2][i - 1]);
            }
        } else if (posicionArreglo < 7) {
            for (let i = 7; i < 10; i++) {

                grid.push(puzzle[3][i - 1]);
                grid.push(puzzle[4][i - 1]);
                grid.push(puzzle[5][i - 1]);
            }
        } else if (posicionArreglo < 10) {
            for (let i = 7; i < 10; i++) {

                grid.push(puzzle[6][i - 1]);
                grid.push(puzzle[7][i - 1]);
                grid.push(puzzle[8][i - 1]);
            }
        }


    }



    return grid;


}

const verificaNumeros = (fila) => {



    let result = initialArray.filter(p => fila.indexOf(p) < 0);
    console.log(result);
    return result;

};

const integraColumnas = (puzzle, posición) => {


    let columna = [];

    for (let i = 0; i < puzzle.length; i++) {

        columna.push(puzzle[i][posición]);

    }

    return columna;
}



const multiple = (valor, multiple = 3) => {
    resto = valor % multiple;
    if (resto == 0)
        return true;
    else
        return false;
}

const comparaArreglo = (arreglo1, arreglo2) => {

    let copia;
    if (arreglo1.length > arreglo2.length) copia = arreglo1, arreglo1 = arreglo2, arreglo2 = copia; // indexOf to loop over shorter
    return arreglo2.filter(function(e) {
        return arreglo1.indexOf(e) > -1;
    });


}

const obtieneResultado = (grid, columna, fila) => {
    console.log('grid');
    console.log(grid);

    console.log('columna');
    console.log(columna);


    console.log('fila');
    console.log(fila);





    let posibleRespuesta = comparaArreglo(grid, columna);

    console.log('posibleRespuesta');
    console.log(posibleRespuesta);



    let respuesta = comparaArreglo(posibleRespuesta, fila);

    console.log('respuesta');
    console.log(respuesta);


    return respuesta;

}

tomaValor(puzzle1)