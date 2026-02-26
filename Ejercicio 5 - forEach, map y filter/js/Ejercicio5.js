const usuarios = [
  { nombre: "Ana", edad: 25, activo: true },
  { nombre: "Luis", edad: 17, activo: false },
  { nombre: "Marta", edad: 32, activo: true },
  { nombre: "Pedro", edad: 15, activo: true }
];

const mayoresEdad = usuarios.filter(m=> m.edad>=18);
console.log(mayoresEdad);

const bienvenida = mayoresEdad.map(u => {
  if(u.activo) {
    return `¡Hola ${u.nombre}, bienvenido a nuestra página!`;
  }  else {
    return `¡Hola ${u.nombre}, tu cuenta está inactiva!`;
  }
});

console.log(bienvenida);

bienvenida.forEach(mensaje=>console.log(mensaje));