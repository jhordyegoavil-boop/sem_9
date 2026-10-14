// Importación de módulos
import todos, { curso } from '/tarea/js/datos.js';
import { reporte } from '/tarea/js/calculo.js';

// 1. Mostrar resultados en la Consola
console.log(`Curso: ${curso}`);
todos.forEach(estudiante => console.log(reporte(estudiante)));

// 2. Mostrar resultados en la página HTML
const ulReportes = document.getElementById('reportes');

if (ulReportes) {
  // Crear elementos li dinámicamente mapeando el arreglo de reportes
  const itemsHTML = todos
    .map(estudiante => `<li>${reporte(estudiante)}</li>`)
    .join('');
  
  ulReportes.innerHTML = itemsHTML;
}
