let puzzle1 = [[5,3,0,7,0,0,0,0,0],[6,0,0,1,9,5,0,0,0],[0,9,8,0,0,0,0,6,0],[8,0,0,0,6,0,0,0,3],[4,0,0,8,0,3,0,0,1],[7,0,0,0,2,0,0,0,6],[0,6,0,0,0,0,2,8,0],[0,0,0,4,1,9,0,0,5],[0,0,0,0,8,0,0,7,9]];

let initialArray=[1, 2, 3, 4, 5, 6, 7, 8, 9];

const  tomaValor = ( puzzle ) => {
    let posición = puzzle[0].indexOf(0);

    let posibleSfila = verificaNumeros(puzzle[0]); 
    
    let columna = integraColumnas(puzzle);
    
    console.log(columna);

    let posibleSColumna=verificaNumeros(columna);

    let grid = integraGrid(puzzle,posición);

    let posibleSgrid = verificaNumeros(grid);
    console.log(grid);
};


const integraGrid=(puzzle,posición)=>{

    let grid =[];
    let valor = posición+1;
    if(valor < 4){

        for(let i=1; i < 4; i++) {
            
            grid.push(puzzle[0][i-1]);
            grid.push(puzzle[1][i-1]);
            grid.push(puzzle[2][i-1]);
        }
    }else if(valor < 7){

        for(let i=4; i < 7; i++) {
            
            grid.push(puzzle[0][i-1]);
            grid.push(puzzle[1][i-1]);
            grid.push(puzzle[2][i-1]);
        }

    }else if(valor < 10){
        for(let i=7; i < 10; i++) {
            
            grid.push(puzzle[0][i-1]);
            grid.push(puzzle[1][i-1]);
            grid.push(puzzle[2][i-1]);
        }
    }

    

    return grid;


}

tomaValor(puzzle1);


const verificaNumeros=(fila)=>{

    

    let result = initialArray.filter(p => fila.indexOf(p) < 0);
    console.log(result);
    return result;

}

const integraColumnas=(puzzle)=>{

    let columna =[];

    for(let i=0; i < puzzle.length; i++) {
    
        columna.push(puzzle[i][posición]);
    
    }

    return columna;
}

const integraGrid=(puzzle,posición)=>{

    let grid =[];
    let valor = posición+1;
    if(valor < 4){

        for(let i=1; i < 4; i++) {
            
            grid.push(puzzle[0][i-1]);
            grid.push(puzzle[1][i-1]);
            grid.push(puzzle[2][i-1]);
        }
    }else if(valor < 7){

        for(let i=4; i < 7; i++) {
            
            grid.push(puzzle[0][i-1]);
            grid.push(puzzle[1][i-1]);
            grid.push(puzzle[2][i-1]);
        }

    }else if(valor < 10){
        for(let i=7; i < 10; i++) {
            
            grid.push(puzzle[0][i-1]);
            grid.push(puzzle[1][i-1]);
            grid.push(puzzle[2][i-1]);
        }
    }

    

    return grid;


}

const multiple=(valor, multiple=3)=>
        {
            resto = valor % multiple;
            if(resto==0)
                return true;
            else
                return false;
        }