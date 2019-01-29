let puzzle1 = [
    [5, 3, 0, 0, 7, 0, 0, 0, 0],
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

            

            if (puzzle[i][pz] == 0) {

                let posibleSfila = verificaNumeros(puzzle[i]);

                let columna = integraColumnas(puzzle, pz);

               
                let posibleSColumna = verificaNumeros(columna);

                let grid = integraGrid(puzzle, pz, i);

                let posibleSgrid = verificaNumeros(grid);

                let result = obtieneResultado(posibleSgrid, posibleSColumna, posibleSfila);

                if (result.length == 1) {

                    puzzle[i][pz] = result[0];

                    i = -1;
                    break;


                }
            }



        }
    }





    console.log(puzzle);

};


const integraGrid = (puzzle, posicion, posicionArreglo) => {

    let grid = [];
    
    
    if (posicion < 3) {

        if (posicionArreglo < 3) {
            for (let i = 0; i < 3; i++) {

                grid.push(puzzle[0][i]);
                grid.push(puzzle[1])[i];
                grid.push(puzzle[2][i]);
            }
        } else if (posicionArreglo < 6) {
            for (let i = 0; i < 3; i++) {

                grid.push(puzzle[3][i]);
                grid.push(puzzle[4][i]);
                grid.push(puzzle[5][i]);
            }
        } else if (posicionArreglo < 9) {
            for (let i = 0; i < 3; i++) {

                grid.push(puzzle[6][i]);
                grid.push(puzzle[7][i]);
                grid.push(puzzle[8][i]);
            }
        }



    } else if (posicion < 6) {

        if (posicionArreglo < 3) {
            for (let i = 3; i < 6; i++) {

                grid.push(puzzle[0][i]);
                grid.push(puzzle[1][i]);
                grid.push(puzzle[2][i]);
            }
        } else if (posicionArreglo < 6) {
            for (let i = 3; i < 6; i++) {

                grid.push(puzzle[3][i]);
                grid.push(puzzle[4][i]);
                grid.push(puzzle[5][i]);
            }
        } else if (posicionArreglo < 9) {
            for (let i = 3; i < 6; i++) {

                grid.push(puzzle[6][i]);
                grid.push(puzzle[7][i]);
                grid.push(puzzle[8][i]);
            }
        }



    } else if (posicion < 9) {

        if (posicionArreglo < 3) {
            for (let i = 6; i < 9; i++) {

                grid.push(puzzle[0][i]);
                grid.push(puzzle[1][i]);
                grid.push(puzzle[2][i]);
            }
        } else if (posicionArreglo < 6) {
            for (let i = 6; i < 9; i++) {

                grid.push(puzzle[3][i]);
                grid.push(puzzle[4][i]);
                grid.push(puzzle[5][i]);
            }
        } else if (posicionArreglo < 9) {
            for (let i = 6; i < 9; i++) {

                grid.push(puzzle[6][i]);
                grid.push(puzzle[7][i]);
                grid.push(puzzle[8][i]);
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

const integraColumnas = (puzzle, posicion) => {


    let columna = [];

    for (let i = 0; i < puzzle.length; i++) {

        columna.push(puzzle[i][posicion]);

    }

    return columna;
}


const combine =(...arrays)=>{

    let result=[];

    for (const array of arrays){
        result = result.length === 0 ? array : result.filter(number=>{
            return array.includes(number);
        })
    }

    return result;
}


const obtieneResultado = (grid, columna, fila) => {
    console.log('grid');
    console.log(grid);

    console.log('columna');
    console.log(columna);


    console.log('fila');
    console.log(fila);





    
    let respuesta = combine(grid,columna,fila);

    console.log('respuesta');
    console.log(respuesta);


    return respuesta;

}

tomaValor(puzzle1)