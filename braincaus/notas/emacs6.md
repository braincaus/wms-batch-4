# EMAC SCRIPT 6

## LET y CONST

let se usa para declarar variables
const se usa para declarar constantes

## Scope

A diferencia de var que tiene un alcance global, let y const solo tienes un alcance de bloque

## Hoisting

A diferencia de var, let y const no pueden ser usadas antes de ser declaradas.

## Asignación por desestructuración

La desestructuracion es una manera conveniente de obtener datos de un arreglo u objeto.

    let [firstValue] = [1,2,3,4]  // 1
    let [firstValue,,thirthValue] = [1,2,3,4]  // 1,3

## Symbols

Los simbolos son un nuevo tipo de dato que nos permiten crear valores unicos e inmutables. Estos son usados normalmente para declarar propiedades de ciertos objetos y no pueden inicializarce de forma literal (new).

Para crear un Symbol se usa:
    
    Symbol("key for symbol")   // local
    Symbol.for                 // global 

En el caso de Symbol.for por default busca un Symbol en el registro global, pero si no encuentra uno, lo crea.

## Iterators

### for..of

Es una caracteristica para iterar sobre colecciones de datos.

    for(cons x of collection){
        ...
    }



## Template literals
Estos proveen una forma mas facil de agregar datos a nuestros textos sin tener que recurrir a multiples operaciones de concatenacion.

    let template = `Este es un template`

    template =`Este es ...
    otro`

    template = `y pueden poseer expresiones como $(expresion)`