'use strict';

fetch('http://localhost:3000/')
  .then((response) => response.json())
  .then((myJson) => {
    document.getElementById('saludo').innerHTML(myJson['data']);
  });