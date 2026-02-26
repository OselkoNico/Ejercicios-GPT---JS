const inscripciones = [
  { id: 1, alumno: "Ana", curso: "JS", pagado: true },
  { id: 2, alumno: "Luis", curso: "JS", pagado: false },
  { id: 3, alumno: "Marta", curso: "React", pagado: true },
  { id: 4, alumno: "Pedro", curso: "JS", pagado: true },
  { id: 5, alumno: "Lucía", curso: "React", pagado: false }
];


function validarInscripcion (inscripcion){
    return new Promise ((resolve, reject)=>{
        setTimeout(()=>{
            if (inscripcion.pagado === true){
                resolve(`Inscripción #${inscripcion.id} de alumno aceptada en curso.`)
            } else {
                reject(`Inscripción #${inscripcion.id} de alumno rechazada: pago pendiente.`)
            }}, 1000);
    });
};

const filtrado = inscripciones.filter(f=>f.curso === "JS");

const transformar = filtrado.map(inscripcion=>validarInscripcion(inscripcion));

transformar.forEach(p=>
    p
    .then(mensaje => console.log(mensaje))
    .catch(rechazado => console.error(rechazado)));