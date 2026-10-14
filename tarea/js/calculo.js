// Arrow function con operador REST y reduce para promediar

export const promedio = (...notas) => {
  const suma = notas.reduce((acc, nota) => acc + nota, 0);
  return suma / notas.length;
};

// Función con parámetro por defecto

export const estado = (nota, minima = 13) => 
  nota >= minima ? "Aprobado" : "Desaprobado";

// Desestructuración directa en los parámetros y Template Literals

export const reporte = ({ nombre, notas }) => {
  // Uso del operador SPREAD para pasar las notas al promedio
  const prom = promedio(...notas);
  return `${nombre}: ${prom.toFixed(1)} - ${estado(prom)}`;
};