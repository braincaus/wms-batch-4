let puzzle1 = [[5,3,0,7,0,0,0,0,0],[6,0,0,1,9,5,0,0,0],[0,9,8,0,0,0,0,6,0],[8,0,0,0,6,0,0,0,3],[4,0,0,8,0,3,0,0,1],[7,0,0,0,2,0,0,0,6],[0,6,0,0,0,0,2,8,0],[0,0,0,4,1,9,0,0,5],[0,0,0,0,8,0,0,7,9]];

let initialArray=[1, 2, 3, 4, 5, 6, 7, 8, 9];

let  tomaValor = ( puzzle ) => {
    let posición = puzzle[0].indexOf(0);

    //let posibleSfila = verificaFila(puzzle[0]); 
    
    let posibleSColumna = [];
    
    for(let i=0; i < puzzle.length; i++) {
    
        posibleSColumna.push(puzzle[i][posición]);
    
    }
    
    console.log(posibleSColumna);
};




tomaValor(puzzle1);


function verificaFila(fila){

    

    let result = initialArray.filter(p => fila.indexOf(p) < 0);
    console.log(result);
    return result;

}
function verificaColumna(columna){

    let result = initialArray.filter(p => columna.indexOf(p) < 0);
    console.log(result);
    return result;
}
function verificaGrid(grid){

    let result = initialArray.filter(p => grid.indexOf(p) < 0);
    console.log(result);
    return result;

}