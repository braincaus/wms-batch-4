
let persona = {
    nombre: 'Giovanni',
    edad:'25',
    imprimirEdad: function(){
        console.log('Mi edad es: '+ this.edad);
    }
}

let Heredapersona= Object.create(persona);

Heredapersona.edad=50;





console.log(Heredapersona);


class   Poligono   {
    constructor  ( height ,  width )   {
      this  . height  =  height ;
      this  . width  =  width ;
    }
  
    get   area  (  )   {
      return   this  .  calcArea  (  )  ;
    }
 
    calcArea  (  )   {
      return   this  . height  *   this  . width ;
    }
  }
 
  const  cuadrado  =   new   Poligono  (  10  ,   10  )  ;
  

  console.log(Poligono);

  console.log(cuadrado);