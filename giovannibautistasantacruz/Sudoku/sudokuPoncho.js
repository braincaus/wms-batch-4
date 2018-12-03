let puzzle = [
    [5, 3, 2, 7, 4, 6, 1, 9, 8],
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

const posibleColumn = (puzzle, x) => {
    const numbers = [];
    for (let y = 0; y < 9; y++) {
        numbers.push(puzzle[x][y]);
    }
    return initialArray.filter(number => !numbers.includes(number));
};

const posibleRow = (puzzle, y) => {
    const numbers = [];
    for (let x = 0; x < 9; x++) {
        numbers.push(puzzle[x][y]);
    }
    return initialArray.filter(number => !numbers.includes(number));
};

const posibleGrid = (puzzle, x, y) => {
    const numbers = [];
    const startRow = Math.floor( x/ 3) * 3;
    const startColumn = Math.floor(y / 3) * 3;
    for (let row = startRow; row < startRow + 3; row++) {
        for (let column = startColumn; column < startColumn + 3; column++) {
            numbers.push(puzzle[row][column]);
        }
    }
    return initialArray.filter(number => !numbers.includes(number));
};

const combine =(...arrays)=>{

    let result=[];

    for (const array of arrays){
        result = result.length === 0 ? array : result.filter(number=>{
            return array.includes(number);
        })
    }

    return result;
};



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
