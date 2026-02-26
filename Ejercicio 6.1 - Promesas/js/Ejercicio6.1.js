const usuarios = [
  { nombre: "Ana", edad: 25, activo: true, puntuacion: 85 },
  { nombre: "Luis", edad: 17, activo: false, puntuacion: 40 },
  { nombre: "Marta", edad: 32, activo: true, puntuacion: 90 },
  { nombre: "Pedro", edad: 15, activo: true, puntuacion: 70 },
  { nombre: "Lucía", edad: 28, activo: false, puntuacion: 50 }
];

// Función que devuelve una promesa según el estado del usuario
function verificarUsuario(usuario) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (usuario.activo) {
        resolve(`Bienvenido ${usuario.nombre}, tu puntuación es de: ${usuario.puntuacion}.`);
      } else {
        reject(`La cuenta de ${usuario.nombre} se encuentra inactiva.`);
      }
    }, 1000);
  });
}

// 1️⃣ Filtrar usuarios mayores de edad
const mayoresEdad = usuarios.filter(u => u.edad >= 18);

// 2️⃣ Transformar usuarios en promesas
const promesas = mayoresEdad.map(u => verificarUsuario(u));

// 3️⃣ Recorrer las promesas y mostrar resultados
promesas.forEach(p => 
  p
    .then(mensaje => console.log("Éxito:", mensaje))
    .catch(error => console.log("Error:", error))
);