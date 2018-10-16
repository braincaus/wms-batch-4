# React JS

## Propiedades
Son valores que recibe un componente y no pueden ser modificados ya que son inmutables.

### Flujo
Las propiedades fluyen de componentes padres a hijos.

## Estados

### Flujo
Son parte de un componente
No pueden modificarse directamente
Se  modifican usando la funcion setState de un componente

## Eventos
Los eventos en react son nombrados usando camelCase
Con JSX se pasa una función como event handler en lugar de una cadena

### Declaración
Los eventos se mandan como propiedad : onEventName

    Ejemplo:
            <Component onClick={ function … } />

### Synthetic Event
Estos son los que se reciben como parámetros en los callbacks de los elementos en que se asigna una función a un evento.
Estos están definidos de acuerdo a la especificación de la W3C así que no debes de preocuparte por el cross-browser compatibility.

### Eventos Disponibes
React incluye eventos de teclado

## Components
### Smart
Se ocupan uniamente de la logica de componente (negocio), pueden contener cualquier tipod de componentes, pero no elemetos visuales.

Provee los datos y el compartamiento a los elementos hijos (smart, dumb)

Proveen callbacks, datos yacciones en el flujo de datos a los dump

### Dump
Se ocupan de como lucen las cosas
Pueden contener cualquier tipo de componente y elementos DOM
Recibe datsos y callbacks exclusivamentes mediante propiedades
Es rara la ocacion llegan a poseer su propio estado
Son escritos usando funciones ya que no requieren de ciclo de c¡vida

### Ventajas
Separacion de propositos (concern)
Reusabilidad