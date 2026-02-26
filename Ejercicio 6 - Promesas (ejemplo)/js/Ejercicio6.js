const usuarios = [
  { nombre: "Ana", edad: 25 },
  { nombre: "Luis", edad: 17 },
  { nombre: "Marta", edad: 32 }
];


function verificarEdad(usuario){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if (usuario.edad >= 18){
                resolve(`${usuario.nombre} es mayor de edad.`);
            } else {
                reject(`${usuario.nombre} es menor de edad.`);
            }
            }, 1000);
        });
    }

async function revisarUsuarios() {
  for (let usuario of usuarios) {
    try {
      const mensaje = await verificarEdad(usuario);
      console.log("Éxito:", mensaje);
    } catch (error) {
      console.log("Error:", error);
    }
  }
}

revisarUsuarios();