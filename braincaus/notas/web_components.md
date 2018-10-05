# Web Component
## Pilares
### HTML Imports
### Templates
### Custom Elements
### Shadow DOM (Document Object Model)

## Tipos
### Stateful
Este tipo de componentes son los mas utilizados. Las principales características de este tipo de componentes es que utilizan la encapsulación en clases, tienen un estado que definen, y actualizan y cada cambio tanto en props como en estado llaman al método render.
### Stateless
Estos componentes son una versión simplificada del componente más común: el Stateful. Este tipo de componentes se definen como funciones en vanilla js y no tienen ni trabajan con estado. Los únicos datos con los que trabajan este tipo de componentes es con las props recibidas, además no permite trabajar con sobrescribir los métodos de su ciclo de vida. Las ventajas de este tipo de componentes es que son sencillos de escribir, fácilmente testeables y mejoran el rendimiento.
### Pure.Component
Este tipo de componentes es similar a los stateful en cuanto a su definición. También se implementan como clases, pero en este caso van a extender de React.PureComponent. Al igual que los componentes stateless este tipo de componentes no definen un estado, siendo puramente solo un componente visual. Este tipo de componentes están optimizados para una mayor performance de renderizado, ya que solo cambian si detectan un cambio en sus props y estos son distintos a los valores anteriores.
### HOC
Los Componentes de Orden Superior (HOC) son funciones que toman como parámetro otro componente, extendiendo su funcionalidad y devolviendo un nuevo componente con funcionalidad extendida. Si las propiedades del HOC cambian, este se renderizará de nuevo y actualizará el componente envuelto en él.


### Componentes estructurales
Estos tipos de componentes no corresponden técnicamente con ningún elemento de la API, clase o función en React, son simplemente puramente conceptuales . El propósito de esta categorización es organizar nuestra aplicación para que sea más sencilla e intuible de desarrollar. Esta categorización no es un estándar de React si no de la comunidad y permite definir una arquitectura en nuestras aplicaciones.
### Componentes Visuales
Conocidos en inglés como Presentational Components. Este tipo de componentes solo deben centrase y enfocar sus esfuerzos en como debe renderizarse la UI. Este tipo de componentes puede componerse de otros elementos visuales y suele incluir estilos y clases. Todos los datos implicados en su renderización se deben recibir a través de props, por lo que deben ser independientes de llamadas a servicios externos. Este tipo de componentes suelen ser de tipo Stateless ya que no necesitan estado, y deben de gestionar las acciones pasándoselas a componentes padre a través de sus props.
### Componente Contenedor
Conocidos en inglés como Container Components. Estos componentes deben de dejar a un lado la interfaz y encargarse de la parte funcional, simplemente son contenedores de otros componentes y se encargan de gestionar la lógica de interacción y la lógica de los datos, haciendo las llamadas necesarias a servicios externos. A diferencia de los anteriores suelen gestionar su propio estado, siendo un nodo importante en la jerarquía del árbol de componentes.
