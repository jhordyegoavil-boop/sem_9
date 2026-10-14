// Exportación nombrada
export const curso = "Diseño de Interfaces";

// Arreglo original de estudiantes
const estudiantes = [
  { nombre: "Ana", notas: [16, 18, 15] },
  { nombre: "Luis", notas: [12, 10, 14] },
  { nombre: "Rosa", notas: [19, 17, 20] }
];

// Generar 'nuevo' usando Spread de objetos
const nuevo = { ...estudiantes[0], nombre: "Ana María" };

// Crear 'todos' usando Spread de arreglos
const todos = [...estudiantes, nuevo];

// Exportación por defecto
export default todos;
