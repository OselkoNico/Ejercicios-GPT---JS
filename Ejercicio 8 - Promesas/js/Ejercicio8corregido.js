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
           if (inscripcion.pagado) {
        resolve(`Inscripción #${inscripcion.id} de ${inscripcion.alumno} aceptada en ${inscripcion.curso}.`);
        } else {
        reject(`Inscripción #${inscripcion.id} de ${inscripcion.alumno} rechazada: pago pendiente.`);
        }}, 1000);
    });
};

const filtrado = inscripciones.filter(f=>f.curso === "JS");

filtrado
  .map(validarInscripcion)
  .forEach(p =>
    p.then(console.log).catch(console.error)
  );