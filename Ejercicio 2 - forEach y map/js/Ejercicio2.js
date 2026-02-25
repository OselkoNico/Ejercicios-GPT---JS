const ordenes = [
  { id: 1, cliente: "Ana", total: 120, estado: "entregado" },
  { id: 2, cliente: "Luis", total: 80, estado: "pendiente" },
  { id: 3, cliente: "Marta", total: 200, estado: "entregado" },
  { id: 4, cliente: "Pedro", total: 50, estado: "cancelado" }
];

const nombres = ordenes.map(o=>o.cliente);
console.log(nombres);

const totales = ordenes.map(o=>
    {if (o.estado === "pendiente" || o.estado === "cancelado")
       { return o.total;
    }else {return (o.total*0.9);
}});
console.log(totales);

const resumen = ordenes.forEach(j=>
    console.log(`Orden #${j.id} - ${j.cliente}: ${j.total}€ (${j.estado})`)
);

const nuevoArray = ordenes.map(o => ({
  id: o.id,
  cliente: o.cliente,
  totalFinal: o.estado === "entregado" ? o.total * 0.9 : o.total
}));

console.log(nuevoArray);