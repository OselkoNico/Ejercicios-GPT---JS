const pedidos = [
  { id: 1, cliente: "Ana", total: 120, estado: "entregado" },
  { id: 2, cliente: "Luis", total: 80, estado: "pendiente" },
  { id: 3, cliente: "Marta", total: 200, estado: "entregado" },
  { id: 4, cliente: "Pedro", total: 50, estado: "cancelado" },
  { id: 5, cliente: "Laura", total: 150, estado: "entregado" }
];

const nombres = pedidos.map(n=>n.cliente);
console.log(nombres);

const totalesFinales = pedidos.map(o=>{
    if(o.estado === "entregado")
        return o.total*0.9;
    else if(o.estado === "pendiente")
    return o.total;
    else if  (o.estado === "cancelado")
        return "total = 0";
    });
console.log(totalesFinales);

const objetosTransformados = pedidos.map(o => {
  // Calcular totalFinal
  const totalFinal = o.estado === "entregado" ? o.total * 0.9 :
                     o.estado === "pendiente" ? o.total :
                     0;

  // Calcular mensaje
  const mensaje = o.estado === "entregado" ? "Entregado ✅" :
                  o.estado === "pendiente" ? "Pendiente ⏳" :
                  "Cancelado ❌";

  // Retornar objeto transformado
  return {
    id: o.id,
    cliente: o.cliente,
    totalFinal,
    mensaje
  };
});

console.log(objetosTransformados);