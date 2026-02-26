const tareas = [
  { id: 1, titulo: "Backup", prioridad: 3, completada: true, duracion: 120 },
  { id: 2, titulo: "Deploy", prioridad: 5, completada: false, duracion: 30 },
  { id: 3, titulo: "Tests", prioridad: 4, completada: true, duracion: 45 },
  { id: 4, titulo: "Docs", prioridad: 2, completada: false, duracion: 90 },
  { id: 5, titulo: "Refactor", prioridad: 5, completada: true, duracion: 200 }
];

function procesarTarea (tarea){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(tarea.completada && tarea.duracion <= 120){
                resolve(`Tarea #${tarea.id} "${tarea.titulo}" procesada en duración min.`)
            } else {
                reject(`Tarea #${tarea.id} "${tarea.titulo}" no procesada.`)
            }
        }, 1000);
    });
};

const filtrador = tareas.filter(a=>a.prioridad >=4);

filtrador
    .map(procesarTarea)
    .forEach(p=>
        p.then(console.log).catch(console.log)
    );